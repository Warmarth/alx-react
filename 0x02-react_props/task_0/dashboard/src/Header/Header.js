import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./Header.css";

function Header() {
  // modified footer
  return (
    <div className="App">
      {/* Header */}
      <div className="App-header">
        <img src={logo} className="Hoblerton-logo" alt="Hoblerton-logo" />
        <h1>School dashboard</h1>
      </div>
    </div>
  );
}
export default Header;
