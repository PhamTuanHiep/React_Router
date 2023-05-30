import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import App from "./App";
import A from "./component/A";
import B from "./component/B";
import C from "./component/C";
import Login from "./component/Login";
function LayOut() {
  const [name, setName] = useState("");
  var callbackFunc = (val) => {
    setName(val);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<App name={name} />}>
          <Route
            path="A"
            element={
              <PrivateRoute name={name}>
                <A name={name} />
              </PrivateRoute>
            }
          />
          <Route path="B" element={<B name={name} />} />
          <Route
            path="C"
            element={
              <PrivateRoute name={name}>
                <C name={name} />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={<Login name={name} callbackFunc={callbackFunc} />}
          />
        </Route>
      </Routes>
    </>
  );
}
export default LayOut;
