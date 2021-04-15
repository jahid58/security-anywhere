import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
    faPeopleArrows,
    faPlus,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router";
import './AdminPanel.css'

const AdminPanel = () => {
  const history = useHistory()
  return (
    <div className="dashboard">
        <div className="headings">
          <button className="btn " onClick={()=>history.push('/hiredService')}>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> Hired List
          </button><br/>
          <button className="btn " onClick={()=>history.push('/addService')}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Service
           
          </button><br/>
          <button className="btn " onClick={()=>history.push('/makeAdmin')}>
            <FontAwesomeIcon icon={faPeopleArrows}></FontAwesomeIcon> Make admin
          </button>
          <br/>
          <button className="btn " onClick={()=>history.push('/manageServices')}>
            <FontAwesomeIcon icon={faWindows}></FontAwesomeIcon> Manage services
          </button>
        </div>
       
    </div>
  );
};

export default AdminPanel;
