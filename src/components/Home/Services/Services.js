import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Service.css";
const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch("https://fierce-garden-72152.herokuapp.com/getServices")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);
  return (
    <section className="services-container mt-3 p-3 ">
      <div className="text-center">
        <h3 >OUR SERVICES</h3>
      </div>
      <div className="d-flex justify-content-center">
        <div className=" row mt-2 ">
          {serviceData.length &&
            serviceData.map((service) => (
              <ServiceCard service={service} key={service._id}></ServiceCard>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
