import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import HiredCard from "./HiredCard";
import hiringBg from "../../../images/hiring-bg.jpg";
import Loader from "react-loader-spinner";

const HiringList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [hiredService, setHiredService] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://fierce-garden-72152.herokuapp.com/hiredServices", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setHiredService(data));
  }, [history, loggedInUser.email]);

  return (
    <div
      className="row"
      style={{
        background: `url(${hiringBg})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-9">
        <div className=" m-4 text-center">
          {!hiredService.length ? (
            <Loader
              type="Circles"
              color="#00BFFF"
              height={100}
              width={100}
            ></Loader>
          ) : (
            <h2 className="text-warning">Your services</h2>
          )}
          <div className="row">
            {hiredService.length &&
              hiredService.map((service) => (
                <HiredCard hired={service} key={service._id}></HiredCard>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringList;
