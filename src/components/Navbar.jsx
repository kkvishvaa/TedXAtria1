import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import tedxLogo from "/tedxlogo.png";

const Navbar = ({
  showSpeakers = true,
  showPartners = true,
  showAbout = true,
  showHome = true
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={tedxLogo} alt="TEDxAtria IT" height="180" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {showHome && (
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </Link>
              </li>
            )}

            {showSpeakers && (
              <li className="nav-item">
                <a className="nav-link" href="#speakers">
                  Speakers
                </a>
              </li>
            )}

            {showPartners && (
              <li className="nav-item">
                <a className="nav-link" href="#partners">
                  Partners
                </a>
              </li>
            )}

            {showAbout && (
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={() => window.scrollTo(0, 0)}>
                  About Us
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
