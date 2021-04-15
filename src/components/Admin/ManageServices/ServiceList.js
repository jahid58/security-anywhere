import React from "react";
import { Delete, Edit } from "@material-ui/icons";
import { useHistory } from "react-router";

const ServiceList = (props) => {
  const { name, price, _id } = props.service;
  const history = useHistory()
  const handleDelete = (e) => {
    fetch("http://localhost:5000/delete/" + _id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => history.push('/home'));
      
  };
  return (
    <div className="item_info d-flex justify-content-between p-3">
      <p>{name}</p>
      <p>{price}</p>
      <p style={{cursor:'pointer'}}>
        {" "}
        <Edit></Edit> <Delete onClick={handleDelete}></Delete>
      </p>
    </div>
  );
};

export default ServiceList;