  import React, { useEffect, useState } from 'react';
  import NavBar from '../NavBar/NavBar';
  import { deleteUser, userDetails } from '../../../Api/AdminApi';
  import { useNavigate } from 'react-router-dom';
  function Dashboard() {
      const navigate = useNavigate()
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const[searchList, setSearchList] = useState([]);
    let obj = {
      search : search,
      setSearch : setSearch,
      searchList : searchList,
      setSearchList : setSearchList,
      users : users,
      
    }
    const fetchUserData = async () => {
      try {
        let userData = await userDetails();
        setSearchList(userData.users);
        setUsers(userData.users)
        
      } catch (error) {
        
        console.error('Error fetching user data:', error);
      }
    };
    
    useEffect(() => {
      fetchUserData();
    }, []); 

    const deleteuser = (id) => {
      // Display a confirmation dialog using SweetAlert
      Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
         
          deleteUser(id).then(() => {
           
            fetchUserData();
          });
        }
      });
    };
    return (
      <>
        <div>
          <NavBar obj={obj} />
        </div>
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First name</th>
              <th scope="col">Number</th>
              <th scope='col'>Account created</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {searchList.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.number}</td>
                <td>{user.createdAt}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={()=> navigate(`/admin/edituser/${user._id}`)} className='btn btn-primary mr-2'>edit</button>
                    <button onClick={()=>deleteuser(user._id)} className='btn btn-primary'>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }

  export default Dashboard;
