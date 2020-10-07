import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "../styles/Footer.css"


const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-newsletter">
        <p className="footer-heading">Subscribe to Our Newsletter</p>
        <p className="footer-subheading">Updates, deals, and more!</p>
        <div className="inputs">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <button className="subscribe-button">Subscribe</button>
          </form>
        </div>
      </section>
      <section className="lower-bar">
        <div className="logo">
          <Link to="/admin" className="logo">
            <FontAwesomeIcon icon={faCoffee} />
          </Link>
        </div>
        <small>Cafe</small>
        <div className="social">
          <Link
            to="/"
            target="_blank"
            aria-label="Instagram"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
