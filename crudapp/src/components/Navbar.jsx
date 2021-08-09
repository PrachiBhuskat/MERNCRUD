import React from 'react'

import {NavLink} from 'react-router-dom';


const Navbar = () => {
  
    return (
      
           <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#310f94'}}>
               <div className = "container">
                <NavLink   style={{color:'#fff',textDecoration:'none',marginRight:'40px',padding:'20px 10px'}} to="/">User Management</NavLink>
                <NavLink   style={{color:'#fff',textDecoration:'none',marginRight:'20px'}}  to="/all"  ><i class="fas fa-users" style={{marginRight:'10px'}}></i>All Users</NavLink>
                <NavLink   style={{color:'#fff',textDecoration:'none'}}  to="/add-user"><i class="fas fa-user" style={{marginRight:'10px'}}></i>Add New User</NavLink>
               </div>
            </nav>
   
      
    )
}

export default Navbar
