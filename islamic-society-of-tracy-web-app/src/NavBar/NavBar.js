import React from 'react'
import './NavBar.scss';

const NavBar = props => {
  return (
    <div className="header">
      <img src={require("../images/isotLogo.png")} alt="isot logo" className="logo"/>
      <div className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Donate</a>
        <a href="#">Events</a>
        <a href="#">Prayer Times</a>
      </div>
    </div>
  );
};

export default NavBar;
