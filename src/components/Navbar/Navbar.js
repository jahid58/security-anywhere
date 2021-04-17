import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-label="Toggle navigation"
      >
         
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
      <img src={logo} style={{ width: "60px" }} alt="" />
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link mr-5 text-white" to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="#">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="/review">
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="#">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="/admin">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
