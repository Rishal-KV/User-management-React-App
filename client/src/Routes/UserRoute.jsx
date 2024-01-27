import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLoginAuth from '../Authentication/UserLoginAuth';
import LoginPage from '../Pages/User/LoginPage';

import DashboardPage from '../Pages/User/DashboardPage';
import ProfilePage from '../Pages/User/ProfilePage';
import SignupPage from '../Pages/User/SignupPage'

function UserRoute() {
  return (
    <Routes>

<Route path ='/login' element={<LoginPage/>}/>

<Route path='/signup' element={<SignupPage/>}/>
<Route path ='/dashboard' element={<DashboardPage/>}/>
<Route path ='/editprofile' element={<ProfilePage/>}/>
        </Routes>
  )
}

export default UserRoute
