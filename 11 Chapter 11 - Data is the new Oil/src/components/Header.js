import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useOnline } from "../utilis/useOnline";
import { useContext } from "react";
import UserContext from "../utilis/UserContext";
const Title = () => {
  return <img src={logo} alt="logo" className="logo" />;
};

const Header = () => {
  const {user}=useContext(UserContext)
  console.log(user)

  const isOnline=useOnline()
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>{isOnline?"✅":"🔴"}</li>
          <Link to="/">
          <li>Home</li>
          </Link>
          <Link to="/about">
          <li>About</li>
          </Link>
          <Link to="/contact">
          <li>Contact</li>
          </Link>
          <Link to="/instamart">
          <li>Instamart</li>
          </Link>          
        </ul>
        <h6>{user.name}-{user.email}</h6>
      </div>
    </div>
  );
};
export default Header;
