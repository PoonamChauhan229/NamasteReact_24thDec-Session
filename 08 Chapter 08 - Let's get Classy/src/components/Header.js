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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
