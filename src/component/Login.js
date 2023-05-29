import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const navigate = useNavigate();
  const handleValidateName = (val) => {
    props.callbackFunc(val);
    // <Navigate to="/"></Navigate>;
    handleSuccessLogin();
  };

  const location = useLocation();
  const handleSuccessLogin = () => {
    const { redirectTo } = queryString.parse(location.search);
    history.push(redirectTo == null ? "/" : redirectTo);
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
