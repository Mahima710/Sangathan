// import React, { useState } from 'react'
import '../assets/css/homepage.css'
import'font-awesome/css/font-awesome.css'
import { Fragment } from 'react';
const Nav = () => {
    return (
        <Fragment>
        <nav style={{marginBottom : "6rem", background:"#191a35"}}>
        <div className="menu-icon">
           <span className="fas fa-bars"></span>
        </div>
        <div className="logo">
           Sangathan
        </div>
        <div className="nav-items">
           <li><a href="/organization">Home</a></li>
           <li><a href="/events">Events</a></li>
           <li><a href="/profile">Profile</a></li>
           <li><a href="/">Logout</a></li>
        </div>
       
     </nav>  
     </Fragment>   
    )
}
export default Nav;