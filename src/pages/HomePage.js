import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { CarouselHome } from "../components/CarouselHome";
import { FeaturesHome } from "../components/FeaturesHome";
import { TopDestinations } from "../components/TopDestinations/TopDestinations";
import { TopAttractions } from "../components/TopAttractions/TopAttractions";
import { Footer } from "../components/Footer/Footer";

const HomePage = () => {
  /*const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));*/

  return (
    <React.Fragment>
      <Navbar />
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
