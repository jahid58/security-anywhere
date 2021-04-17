import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const userReview = {
      name: data.name,
      email: data.email,
      message: data.message,
      ratings: data.ratings,
    };
    fetch("https://fierce-garden-72152.herokuapp.com/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    }).then((res) => console.log(res));
  };

  return (
    <div className="row" style={{ backgroundColor: "#2C5F2D" }}>
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-5 text-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <br />
          <input
            placeholder="Name"
            className="form-control"
            type="Text"
            {...register("name", { required: true })}
          />{" "}
          <br />
          <br />
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <br></br>
          <input
            type="number"
            className="form-control"
            placeholder="Out of 5"
            {...register("ratings", { required: true })}
          />
          <br></br>
          <input
            type="textarea"
            className="form-control"
            style={{ height: "150px" }}
            placeholder="Message"
            {...register("message", { required: true })}
          />
          <br></br>
          <input
            type="submit"
            value="Send your feedback"
            className="btn btn-light"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
