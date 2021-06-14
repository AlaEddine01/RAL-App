import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Button } from "reactstrap";

function ProtectedRoute({ isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return (
            <>
              <Component {...rest} />
              <Button
                className="form-control"
                onClick={() => {
                  localStorage.removeItem("token");
                }}
              >
                Log Out
              </Button>
            </>
          );
        } else {
          return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
