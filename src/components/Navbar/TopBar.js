import React, { useContext } from "react";

import { UserContext } from "../../App";
import logo from "../../images/logo.png";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const TopBar = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div className="topBar flex sticky-top">
      <div className=" pt-2 ">
        <Navbar collapseOnSelect expand="lg ">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <img
                src={logo}
                style={{ width: "60px" }}
                className="d-md-block d-sm-none"
                alt=""
              />
              <NavLink
                className="menu-item"
                style={{ textDecoration: "none" }}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="menu-item"
                style={{ textDecoration: "none" }}
                to="/features"
              >
                Features
              </NavLink>
              <NavLink
                className="menu-item"
                style={{ textDecoration: "none" }}
                to="/admin"
              >
                Admin
              </NavLink>

              <NavLink
                className="menu-item"
                style={{ textDecoration: "none" }}
                to="/login"
              ></NavLink>
            </Nav>
          </Navbar.Collapse>
          <div>
            {loggedInUser.name ? (
              <h6 className="text-white">{loggedInUser.name}</h6>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            )}
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default TopBar;
