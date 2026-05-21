import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "../index.css"

const Navbar = () => {
  return (
    <div>
      <ul>
        <NavLink className={(e)=>{return e.isActive?"pur":""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"pur":""}} to="/login"><li>Login</li></NavLink>
        {/* <NavLink className={(e)=>{return e.isActive?"pur":""}} to="user"><li>User</li></NavLink>        navigate to user become /login/user */}
        <NavLink className={(e)=>{return e.isActive?"pur":""}} to="/user"><li>User</li></NavLink>        
        <NavLink className={(e)=>{return e.isActive?"pur":""}} to="username"><li>Username</li></NavLink>        
      </ul>
    </div>
  )
}

export default Navbar
