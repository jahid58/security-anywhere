import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faPeopleArrows,
  faPlus,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../../App";
import "./AdminPanel.css";

const AdminPanel = () => {
  const history = useHistory();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("https://fierce-garden-72152.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser]);
  return (
    <div>
      {!isAdmin && (
        <div className="text-center text-primary mt-5">
          <p>For only testing purpose we are allowing user to admin panel </p>
        </div>
      )}
      {loggedInUser && (
        <div className="dashboard">
          <button
            className="btn "
            onClick={() => history.push("/hiredService")}
          >
            <FontAwesomeIcon
              className="text-light"
              icon={faShoppingBasket}
            ></FontAwesomeIcon>{" "}
            Hired List
          </button>
          <br />
          <button className="btn " onClick={() => history.push("/addService")}>
            <FontAwesomeIcon
              className="text-light"
              icon={faPlus}
            ></FontAwesomeIcon>{" "}
            Add Service
          </button>
          <br />
          <button className="btn " onClick={() => history.push("/makeAdmin")}>
            <FontAwesomeIcon
              className="text-light"
              icon={faPeopleArrows}
            ></FontAwesomeIcon>{" "}
            Make admin
          </button>
          <br />
          <button
            className="btn "
            onClick={() => history.push("/manageServices")}
          >
            <FontAwesomeIcon
              className="text-light"
              icon={faWindows}
            ></FontAwesomeIcon>{" "}
            Manage services
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
