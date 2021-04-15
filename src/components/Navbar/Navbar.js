import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'


const Navbar = () => {
    return (
       
    <div style={{backgroundColor:'#200371',opacity:'.5'}}>
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <img src={logo} className='img-fluid' style={{height:'60px'}} alt=""/>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link mr-5 active text-white" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mr-5 text-white" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mr-5 text-white" to="/admin">Admin</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mr-5 text-white" to="#">Reviews</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mr-5 text-white" to="#">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mr-5 text-white " to="/login">Login</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
       
    );
};

export default Navbar;