import React, { useContext } from 'react';
import  firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../../App';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bgImg from '../../../images/header_bg.jpg'

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
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div className='p-5 d-flex justify-content-center align-items-center' 
    style={{backgroundImage:`url(${bgImg})`,backgroundSize:'cover' ,height:'100vh'} }>
   
        <div className="shadow p-5 text-center bg-light rounded" style={{minWidth:'350px'}}>
            <input type="text" className="form-control my-4" placeholder='email' />
            <input type="password" className="form-control my-4" placeholder='password'/>
          
          
         <button className="btn btn-primary my-1">Sign in</button><br/>
         
            <button className="btn btn-success" onClick={handleGoogleSignIn}>
              <FontAwesomeIcon icon={faGoogle} style={{color:'blue'}}/> Google Sign in</button>
          </div> 
        </div>
        
 
    
  );
};

export default Login;