import React from "react";
import { Carousel } from "@mantine/carousel";

export const CarouselHome = () => {
  return (
    <Carousel
      sx={{ maxWidth: "100vw" }}
      mx="auto"
      withIndicators
      height={"auto"}
    >
      <Carousel.Slide>
        <img
          style={{ width: "100%" }}
          src="../../img/Carousel1.jpg"
          alt="CarouselPhoto1"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          style={{ width: "100%" }}
          src="../../img/Carousel2.jpg"
          alt="CarouselPhoto2"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          style={{ width: "100%" }}
          src="../../img/Carousel3.jpg"
          alt="CarouselPhoto3"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          style={{ width: "100%" }}
          src="../../img/Carousel4.jpg"
          alt="CarouselPhoto3"
        />
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
};
