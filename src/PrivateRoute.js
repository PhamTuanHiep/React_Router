import { useState } from "react";
import Login from "./component/Login";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function PrivateRoute({ name, ...props }) {
  console.log("P: ", name);
  // const locat = useLocation();
  // console.log(props.children);
  // const prevLocation = useLocation();
  if (name) {
    return <>{props.children}</>;
  } else {
    return (
      <>
        <Navigate to="/login"></Navigate>
        {/* <Login></Login> */}
      </>
    );
  }
}
export default PrivateRoute;
