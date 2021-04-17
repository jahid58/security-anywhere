import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import Sidebar from "../Sidebar/Sidebar";

const Hire = () => {
  const { id } = useParams();
  const [loggedInUser,setLoggedInUser] =useContext(UserContext)
  const [serviceData, setServiceData] = useState({});
  const [clientData, setClientData] = useState({});
  const history = useHistory()
  useEffect(() => {
    fetch("https://fierce-garden-72152.herokuapp.com/getService/" + id)
      .then((res) => res.json())
      .then((data) =>{
        const userInfo = {
          name: loggedInUser.name,
          email: loggedInUser.email,
          service: data.name,
          hiredPrice: data.price,}
   setClientData({ ...userInfo });
        setServiceData(data)
console.log(clientData)
      })
     
  }, []);
  
  return (
    <div className="row bg-light">
      <div className="col-md-4">
        <Sidebar></Sidebar>
      </div>

      <div className="user col-md-4 p-5">
        <form action="">
          <input
            type="text"
            className="form-control mt-2"
            name="name"
            placeholder="name"
            defaultValue={loggedInUser.name}
          />
          <input
            type="text"
            className="form-control mt-2"
            name="email"
            placeholder="email"
            defaultValue={loggedInUser.email}
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
          
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            defaultChecked
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Credit Card
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
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
