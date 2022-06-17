import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <img src="/W3Schools_logo.png" alt="no image"></img>
        <div className="navbar_des">
          <div className="navbar_left">
            <a className="link">
              Tutorial
              <i className="fa fa-caret-down"></i>
            </a>
            <a className="link"> 
              Reference <i className="fa fa-caret-down"></i>
            </a>
            <a className="link">
              Exercise <i className="fa fa-caret-down"></i>
            </a>
            <a className="menu">
              Menu <i className="fa fa-caret-down"></i>
            </a>
            <a className="vedio">Vedio </a>
          </div>
          <div className="navbar_right">
            <div className="div_icons">
              <a className="dark_switch">
              <i class="fa-solid fa-circle-half-stroke"></i>
              </a>
              <a>
              <i class="fa-brands fa-firefox"></i>
              </a>
              <a>
              <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </div>
            <div className="div_web">
              <a className="pro"> Pro
                <span className="badge">new</span>
              </a>
              <a>
                <button className="btn btn_website">Website
                <span className="badge">new</span>
                </button>
              </a>
              <a className="paid_counter">Paid Courses</a>
            </div>
            <button className="btn btn_login"> login</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
