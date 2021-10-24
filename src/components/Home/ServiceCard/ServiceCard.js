import React from "react";
import { useHistory } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const history = useHistory();
  const { name, description, image, price, _id } = service;
  return (
    <div
      className="col-md-4 rounded-2 p-4"
      onClick={() => {
        history.push(`/hire/${_id}`);
      }}
    >
      <div className=" service text-center rounded shadow">
        <div className="animation">
          <img
            src={`data:image/png;base64,${image.img}`}
            className="image"
            alt=""
          />
          <div class="middle">
            <div class="text">Click for Hire</div>
          </div>
        </div>
        <div className="m-2">
          <h5 className="mt-3 mb-3">{name}</h5>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
