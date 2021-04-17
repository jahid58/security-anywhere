import React from "react";
import { Delete, Edit } from "@material-ui/icons";
import { useHistory } from "react-router";

const ServiceList = (props) => {
  const { name, price, _id } = props.service;
  const history = useHistory()
  const handleDelete = (e) => {
    fetch("https://fierce-garden-72152.herokuapp.com/delete/" + _id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => history.push('/home'));
      e.preventDefault()
      
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