import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
