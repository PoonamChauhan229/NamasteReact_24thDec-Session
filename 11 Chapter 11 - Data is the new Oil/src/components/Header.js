import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useOnline } from "../utilis/useOnline";
const Title = () => {
  return <img src={logo} alt="logo" className="logo" />;
};

const Header = () => {

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
      </div>
    </div>
  );
};
export default Header;
