import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <GiHamburgerMenu className="icon" />
      <h1
        style={{
          color: "#6c6c6c",
          letterSpacing: "10px",
        }}
      >
        MINT NFT
      </h1>
    </div>
  );
}

export default Navbar;
