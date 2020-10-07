import React from "react";
import { Route, Redirect } from "react-router-dom";

const iUserAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (iUserAuthenticated()) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
