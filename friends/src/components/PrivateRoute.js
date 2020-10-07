import React from "react";
import { Route, Redirect } from "react-router-dom";

const iUserAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={() => {
        if (iUserAuthenticated()) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
