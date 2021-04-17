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
  const {user} = useContext(UserContext);
  const [loggedInUser,setLoggedInUser] = user;
  const  [serviceData,setServiceData] = useState({})
  const [clientData,setClientData] = useState({})
  useEffect(()=>{
      fetch('https://fierce-garden-72152.herokuapp.com/getService/'+id)
      .then(res=>res.json())
      .then(data=>setServiceData(data))
      const  userInfo = {
        name:loggedInUser.name,
        email:loggedInUser.email,
        service:serviceData.name,
        hiredPrice:serviceData.price
    }
   setClientData({...userInfo})
  },[id])

  return (
    <div className="row bg-light">
        <div className="col-md-4">
            <Sidebar></Sidebar>
        </div>

    
      <div className="user col-md-4 p-5 ">
        <form action="" >
          <input
            type="text"
            className="form-control mt-2"
            name="name"
            placeholder="name"
            value={loggedInUser.name}
          />
          <input
            type="text"
            className="form-control mt-2"
            name="email"
            placeholder="email"
            value={loggedInUser.email}
          />
          <input
            type="text"
            className="form-control my-2"
            name="service"
            placeholder="service"
            value={serviceData.name}
          />
          {/* <input type="submit" value='submit your data' className='btn bg-primary' name='submit'/> */}
        </form>
        <h5>Pay with</h5>
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>
  <label class="form-check-label" for="flexRadioDefault1">
  Credit Card
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
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
