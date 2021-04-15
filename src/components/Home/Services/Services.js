import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';





const Services = () => {
    const  [serviceData,setServiceData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/getServices')
        .then(res=>res.json())
        .then(data=>setServiceData(data))
    },[])
    return (
        <section className="services-container mt-5 p-3 bg-light">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-2 pt-3">
                {serviceData.length &&
                    serviceData.map(service => <ServiceCard service={service} key={service.name}></ServiceCard>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;