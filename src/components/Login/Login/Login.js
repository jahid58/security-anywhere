import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "./firebaseConfig";
import { UserContext } from "../../../App";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../images/logo.png";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email, error } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        if (!error) {
          history.replace(from);
        }
      })
      .catch(function (error) {
        const errorMessage = error.message;
      });
  };

  return (
    <div className="p-5 d-flex justify-content-center align-items-center ">
      <div
        className="shadow p-5 text-center text-white rounded"
        style={{ backgroundColor: "#022335" }}
      >
        <h2 className="text-white">Security Anywhere</h2>
        <img src={logo} style={{ width: "60px" }} alt="" />
        <h3> Login With </h3>
        <button className="btn btn-secondary " onClick={handleGoogleSignIn}>
          <FontAwesomeIcon icon={faGoogle} style={{ color: "blue" }} /> Continue
          with Google
        </button>
        <p>
          Don't have an account <a href="/#">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
