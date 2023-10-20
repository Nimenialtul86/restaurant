import React, { useState } from "react";
import gericht from "../../assets/gericht.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";


const Menu = () => {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#menu">Menu</a>
      <a href="#social">Social</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

function Navbar() {
  const [toggleButton, setToggle] = useState(false);

  return (
    <div className="navbar ">
      <div className="logo">
        <img src={gericht} alt="logo" />
      </div>
      <div className="nav_links">
        <Menu />
      </div>
      <div className="registration">
        <div className="login">
          <p className="login-btn">Login</p>
          <p className="register-btn">Registration</p>
        </div>
        <p>Book Table</p>
      </div>
      <div className="toggleMenu">
        {toggleButton ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => 
          setToggle(true)} />
        )}
        {toggleButton && (
          <div className="nav_links-container tracking-in-expand">
            <div className="nav_links-toggle">
              <Menu />
            </div>
            <div className="registration-toggle">
              <div className="login-toggle">
                <p>Login</p>
                <p>Registration</p>
              </div>
              <div>
                <p>Book Table</p>
              </div>
            </div>
          </div>
        )} :
        {!toggleButton && (
          <div className="nav_links-container tracking-out-contract">
          <div className="nav_links-toggle">
              <Menu />
            </div>
            <div className="registration-toggle">
              <div className="login-toggle">
                <p>Login</p>
                <p>Registration</p>
              </div>
              <div>
                <p>Book Table</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
