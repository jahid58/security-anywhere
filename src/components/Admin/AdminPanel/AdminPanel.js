import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
    faPeopleArrows,
    faPlus,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../../App";
import './AdminPanel.css'

const AdminPanel = () => {
  const history = useHistory()
  
  const [loggedInUser,setLoggedInUser] =  useContext(UserContext);
  const  [isAdmin,setIsAdmin] = useState(false)
  useEffect(()=>{
      fetch('https://fierce-garden-72152.herokuapp.com/isAdmin', {
          method: 'POST',
          headers: { 'content-type': 'application/json'},
          body: JSON.stringify({email:loggedInUser.email})
      })
      .then(res=>res.json())
      .then(data=>setIsAdmin(data))
     
  },[loggedInUser])
  return (
    <div className="dashboard">
        {
          isAdmin &&
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
        }
        {
          !isAdmin && <div className='text-center'><h1>  Ops ! </h1></div>
        }
       
    </div>
  );
};

export default AdminPanel;
