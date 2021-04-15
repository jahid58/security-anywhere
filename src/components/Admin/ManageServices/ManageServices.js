import React, { useEffect, useState } from 'react';
import AdminPanel from '../AdminPanel/AdminPanel';
import './ManageService.css'
import ServiceList from './ServiceList';
const ManageServices = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/getServices')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
       <div className='row'>
         <div className="col-md-3"><AdminPanel></AdminPanel></div>
         <div className="col-md-9">
         <div className="manage p-5">
        <div className="head d-flex justify-content-between p-3">
          <p>Name</p><p>Price</p><p>Action</p>
        </div>
       <div>
       {
          services.length &&
          services.map(fd=><ServiceList key={fd._id} service={fd}></ServiceList>)
          }
       </div>
      </div>
         </div>
       </div>
    );
};

export default ManageServices;