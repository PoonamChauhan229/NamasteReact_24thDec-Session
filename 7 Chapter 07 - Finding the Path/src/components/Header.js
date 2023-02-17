import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
