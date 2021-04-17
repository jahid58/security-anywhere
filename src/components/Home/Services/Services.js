import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css'
const Services = () => {
    const  [serviceData,setServiceData] = useState([])
    useEffect(()=>{
        fetch('https://fierce-garden-72152.herokuapp.com/getServices')
        .then(res=>res.json())
        .then(data=>setServiceData(data))
    },[])
    return (
        <section className="services-container mt-3 p-3 ">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
            </div>
            <div className="d-flex justify-content-center">
            <div className="p-3 row mt-2 ">
                {serviceData.length &&
                    serviceData.map(service => <ServiceCard service={service} key={service.name}></ServiceCard>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;