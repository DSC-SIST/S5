import React from "react";
import logo from "../assets/GDSC.png";
const Navbar = () => {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="Developer Student Clubs" height={10} />
          </a>
          <a
            role="button"
            className="navbar-burger"
            data-target="navbarMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-start" />
          <div className="navbar-end has-text-centered">
            <div className="navbar-item">
              <a
                href="https://discord.gg/eaDRhRgS7k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mdc-button mdc-button--outlined">
                  <span className="mdc-button__label">
                    💬 Join our Discord Server!
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
