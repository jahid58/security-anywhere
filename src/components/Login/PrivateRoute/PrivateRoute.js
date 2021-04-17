import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import jwt_decode from "jwt-decode";
import { UserContext } from '../../../App';

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useContext(UserContext);
    const [loggedInUser,setLoggedInUser] = user
    
    return (
      <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;