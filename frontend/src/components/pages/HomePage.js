import React from "react";

import HeroSection from "../HeroSection"
import AboutUs from "../AboutUs"
import "../../styles/App.css"
import Locations from "../Locations";
import Footer from "../Footer";


const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection id="home-target" />
      <AboutUs />
      <Locations />
      <Footer />
    </React.Fragment>
  )
}

export default HomePage;