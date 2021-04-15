import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CreditCard } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import Sidebar from "../Sidebar/Sidebar";

const Hire = () => {
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const  [serviceData,setServiceData] = useState({})
  const [clientData,setClientData] = useState({})
  useEffect(()=>{
      fetch('http://localhost:5000/getService/'+id)
      .then(res=>res.json())
      .then(data=>setServiceData(data))
  },[id])
  const handleSubmit = (e,data) => {
    const  userInfo = {
          name:loggedInUser.name,
          email:loggedInUser.email,
          Service:serviceData.name,
          hiredPrice:serviceData.price
      }
     setClientData({...userInfo})
      e.preventDefault()
    
  };
  return (
    <div className="row">
        <div className="col-md-4">
            <Sidebar></Sidebar>
        </div>

    
      <div className="user col-md-8 p-5 bg-light">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control m-2"
            name="name"
            placeholder="name"
          />
          <input
            type="text"
            className="form-control m-2"
            name="email"
            placeholder="email"
          />
          <input
            type="text"
            className="form-control m-2"
            name="service"
            placeholder="service"
          />
       <input type="submit" value='submit' name='submit'/>
        </form>
        <h5>Pay with</h5>
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Credit Card
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
   Pay pal
  </label>
  </div>
        <ProcessPayment client={clientData}></ProcessPayment>
      </div>
      </div>
      
  );
};

export default Hire;
