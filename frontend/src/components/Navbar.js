import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCoffee, faTimes } from "@fortawesome/free-solid-svg-icons";

import "../styles/Navbar.css";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faCoffee} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
          </div>
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Locations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/store" className="nav-links">
                Store
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
