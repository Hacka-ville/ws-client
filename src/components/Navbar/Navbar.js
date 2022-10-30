import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <img src="../../../img/Logo.svg" alt="Logo" />
      </div>
      <div className="navbarList">
        <div className="navbarItem">
          <img
            src="../../../img/AmericaFlag.png"
            alt="America Flag"
            height="50"
          />
          <a href="#">EN</a>
        </div>
        <div className="navbarItem">
          <img
            src="../../../img/DollarIcon.png"
            alt="Dollar Sign"
            height="50"
          />
          <a href="#">Bookings</a>
        </div>
        <div className="navbarItem">
          <img src="../../../img/AccountLogo.png" alt="Account" height="50" />
          <a href="#">Account</a>
        </div>
      </div>
    </div>
  );
};
