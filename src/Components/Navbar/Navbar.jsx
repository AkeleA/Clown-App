import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-left">
        <div className="n-name">R'O'M</div>
        <span>About</span>
      </div>
      <div className="nav-right">
        <div className="log">LOGIN</div>
        <button className="n-signup">
          <span>SIGN UP</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
