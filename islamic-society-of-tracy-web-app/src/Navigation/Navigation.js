import React from 'react'
import './Navigation.scss';

const Navigation = props => {
  return (
    <div className="navigation">
      <div className="top">
        <div className="navigation-container">
          <img src={require("../images/isotLogo.png")} alt="isot logo" className="logo"/>
        </div>
      </div>
      <div className="bottom">
        <div className="navigation-container">
          <div className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Donate</a>
            <a href="#">Events</a>
            <a href="#">Prayer Times</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;