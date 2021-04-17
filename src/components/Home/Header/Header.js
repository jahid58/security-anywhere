import React from "react";
import "./Header.css";
import headerImg from "../../../images/headerImg.png";
const Header = () => {
  return (
    <div className="header row">
      <div className="header_content p-5 m-auto text-white col-md-6 ">
        <h1>
          Lets Assure <br /> Your Assets
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          doloribus iure doloremque eligendi ad reiciendis sapiente saepe
          laboriosam, voluptates iusto.
        </p>
        <button className="btn btn-success">Learn more</button>
      </div>
      <div className="col-md-5 pt-5 header_img m-auto">
        <img src={headerImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
