import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { loadDetails, updateUser } from '../../Api/AdminApi';
import { Card, Typography, Input, Button } from '@material-tailwind/react';

function EditUser() {
  const { id } = useParams();
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: id,
    name: '',
    number: '',
    email: '',
  });

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [numberError, setNumberError] = useState('');

  useEffect(() => {
    loadDetails(id).then((data) => {
      setFormData({
        id: data.specificUser._id,
        name: data.specificUser.name,
        number: data.specificUser.number,
        email: data.specificUser.email,
        image: data.specificUser.image,
      });
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateName = () => {
    if (formData.name.trim() === '') {
      setNameError('Name is required');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setEmailError('Enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validateNumber = () => {
    const numberRegex = /^\d+$/;
    if (!formData.number.trim() || !numberRegex.test(formData.number.trim())) {
      setNumberError('Enter a valid phone number');
      return false;
    }
    setNumberError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateName() && validateEmail() && validateNumber()) {
      updateUser(formData).then((data) => {
        navigate('/admin/dashboard');
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Edit User
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your name"
              className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${nameError && 'border-red-500'}`}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={validateName}
            />
            {nameError && <Typography color="red" className="text-xs">{nameError}</Typography>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your email"
              className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${emailError && 'border-red-500'}`}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={validateEmail}
            />
            {emailError && <Typography color="red" className="text-xs">{emailError}</Typography>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Number
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your number"
              className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${numberError && 'border-red-500'}`}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              onBlur={validateNumber}
            />
            {numberError && <Typography color="red" className="text-xs">{numberError}</Typography>}
          </div>
          <Button className="mt-6" fullWidth type="submit">
            Update
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default EditUser;
