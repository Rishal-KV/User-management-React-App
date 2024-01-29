import React from 'react'
import '../Dashboard/Dashboard.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
function Dashboard() {
    // const userName = (state) => state.user.userName;
    const username = useSelector((state) => state)
    console.log(username);

  return (
    <div>
      <NavBar/>
      <div class="container d-flex justify-content-center align-items-center">
             
             <div className="card">

              <div className="upper">

                <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid"/>
                
              </div>

              <div class="user text-center">

                <div class="profile">

                  <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80"/>
                  
                </div>

              </div>


              <div class="mt-5 text-center">

                <h4 class="mb-0">{username.user.email}</h4>


              <Link to="/editprofile"> <button class="btn btn-primary btn-sm follow">edit profile</button></Link> 


                <div class="d-flex justify-content-between align-items-center mt-4 px-4">

                  <div class="stats">
                    <h6 class="mb-0">Followers</h6>
                    <span>8,797</span>

                  </div>


                  <div class="stats">
                    <h6 class="mb-0">Projects</h6>
                    <span>142</span>

                  </div>


                  <div class="stats">
                    <h6 class="mb-0">Ranks</h6>
                    <span>129</span>

                  </div>
                  
                </div>
                
              </div>
               
             </div>

           </div>
    </div>
  )
}

export default Dashboard
