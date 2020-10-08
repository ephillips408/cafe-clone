import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCoffee,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  useEffect(() => {
    if (clicked) {
      document.querySelector(".sidebar").classList.add("open");
    } else {
      document.querySelector(".sidebar").classList.remove("open");
    }
  }, [clicked]);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
          </div>
          <div className="nav-icon">
            <Link to="/">
              <FontAwesomeIcon icon={faCoffee} />
            </Link>
          </div>
          <div className="nav-icon">
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </div>
        </div>
      </nav>
      <aside className="sidebar">
        <ul>
          <li>
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/store" onClick={handleClick}>
              Store
            </Link>
          </li>
        </ul>
      </aside>
    </React.Fragment>
  );
};

export default Navbar;
