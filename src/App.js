import { Navigate, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import { useEffect } from "react";

function App({ name }) {
  var navigate = useNavigate();
  useEffect(() => {
    if (name != "") {
      console.log("1:", name);
    }
    navigate("/A");
  }, [name]);
  console.log("2:", name);

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
