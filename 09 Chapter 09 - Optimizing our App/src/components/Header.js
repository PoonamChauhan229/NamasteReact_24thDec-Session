import { Link } from "react-router-dom";
import useOnline from "../../utilis/useOnline";

const Title = () => {
  return (
    <>
      <img
        src="https://i.ibb.co/kcyMhF8/foodvilla.png"
        alt="logo"
        className="logo"
      />
    </>
  );
};

const Header = () => {
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>

          <li>Cart</li>
        </ul>
        <h1>{!isOnline ? "🔴" : "✅"}</h1>
      </div>
    </div>
  );
};
export default Header;
