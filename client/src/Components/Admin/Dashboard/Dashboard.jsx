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
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          let userData = await userDetails();
          setSearchList(userData.users);
          setUsers(userData.users)

        } catch (error) {
        
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }, []); 

    const deleteuser = (id) => {
      deleteUser(id).then((data) => {
        console.log(data);
        
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
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
              <th scope="col">Last name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {searchList.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{user.name}</td>
                <td>{user.number}</td>
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
