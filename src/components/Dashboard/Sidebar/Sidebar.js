import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faCommentDots,
  faShoppingBasket,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";

import './Sidebar.css'

const Sidebar = () => {
    const history = useHistory()
  return (
    <div className="dashboard">
        <div className="headings ">
          <button className="btn " onClick={()=>history.push('/hire')}>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Hire
          </button><br/>
          <button className="btn " onClick={()=>history.push('/hiringList')}>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> Hiring
            List
          </button><br/>
          <button className="btn " onClick={()=>history.push('/review')}>
            <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon> Review
          </button>
        </div>
      
          
      </div>
    
  );
};

export default Sidebar;