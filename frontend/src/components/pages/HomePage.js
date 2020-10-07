import React from "react";

import HeroSection from "../HeroSection"
import AboutUs from "../AboutUs"
import "../../styles/App.css"
import Locations from "../Locations";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection/>
      <AboutUs />
      <Locations />
    </React.Fragment>
  )
}

export default HomePage;