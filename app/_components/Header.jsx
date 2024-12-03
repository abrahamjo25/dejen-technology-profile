import React from "react";

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="#" className="logo d-flex align-items-center me-auto">
          <img
            src="assets/img/green-light-logo.png"
            alt="GreenLight Logo"
            className="me-2"
          />
          <div>
            <h2 className="sitename mb-0">GreenLight &reg;</h2>
            <p className="small mb-0">Software Technology</p>
          </div>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        <a className="btn-getstarted" href="#about">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
