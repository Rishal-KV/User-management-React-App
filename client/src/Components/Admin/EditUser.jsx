import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadDetails, updateUser } from '../../Api/AdminApi';

function EditUser() {
  const { id } = useParams();

  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    id : id,
    name: '',
    number: '',
    email: '',
    
  });

  useEffect(() => {
    loadDetails(id).then((data) => {
     
      setFormData({
        id : data.specificUser._id,
        name: data.specificUser.name,
        number: data.specificUser.number,
        email: data.specificUser.email,
        image : data.specificUser.image
      });
    });
  }, [id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setFormData((preData) => ({ ...preData, image: file.name }));
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData).then((data)=>{
        setFormData(data)
    })
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <label htmlFor="fileInput">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src={
                  previewImage || formData.image
                    ? previewImage
                      ? previewImage
                      : `/public/uploads/${formData.image}`
                    : "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                }
                alt="Profile"
              />
              <span className="text-black-50">Additional Information</span>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="col-md-5 border-right">
          <form onSubmit={handleSubmit}>
            <div className="p-3 py-5">
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
           
              <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button text-dark" type="submit">
                  Save Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
