import React from "react";
import img from "../../../images/avatar.png";
import "./Testimonials.css";

const Testimonial = ({ review }) => {
  const { message, name, email, ratings } = review;

  return (
    <div
      className="card shadow col-md-4 col-sm-2 m-2"
      style={{ minWidth: "300px" }}
    >
      <div className="card-body">
        <p className="card-text text-center">{message}</p>
      </div>
      <div className="card-footer d-flex  align-items-center">
        <img className="mx-3" src={img} alt="" width="60" />
        <div>
          <h6 className="text-white">{name}</h6>
          <p className="m-0">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
