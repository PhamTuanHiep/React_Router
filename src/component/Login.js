import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const navigate = useNavigate();
  const handleValidateName = (val) => {
    props.callbackFunc(val);
    navigate(-1);
  };

  return (
    <div className="login">
      <label htmlFor="input-name"> User Name</label>
      <input
        id="input-name"
        type="text"
        placeholder="enter name"
        onChange={(e) => handleValidateName(e.target.value)}
      />
    </div>
  );
}
export default Login;
