import React from 'react'
import { Navigate } from 'react-router-dom'

function UserLoginAuth({children}) {

    const hasUser = Boolean(localStorage.getItem('token'))
    return hasUser ? children : <Navigate to = "/login" />
   
  
}

export default UserLoginAuth
