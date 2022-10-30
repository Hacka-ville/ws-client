import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { CarouselHome } from "../components/CarouselHome/CarouselHome";
import { FeaturesHome } from "../components/FeaturesHome/FeaturesHome";
import { TopDestinations } from "../components/TopDestinations/TopDestinations";
import { TopAttractions } from "../components/TopAttractions/TopAttractions";
import { Footer } from "../components/Footer/Footer";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <Navbar
        handleTravel={props.onHandleFindTravel}
        city={props.city}
        dates={props.dates}
      />
      <CarouselHome />
      <FeaturesHome />
      <hr />
      <TopDestinations />
      <TopAttractions />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
