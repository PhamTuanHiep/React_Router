import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/A" className="nav-link">
          Page A
        </Link>
        <Link to="/B" className="nav-link">
          Page B
        </Link>
        <Link to="/C" className="nav-link">
          Page C
        </Link>
      </div>
      <div className="header-right">
        <Link to="/Login" className="nav-link">
          Login
        </Link>
      </div>
    </div>
  );
}
export default Header;
