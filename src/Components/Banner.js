import { Button } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = () => {
  return (
    <>
      <div className="banner-page">
        <LazyLoadImage

          className="profile"
          alt="profile"
          src="https://drive.google.com/thumbnail?export=view&id=1eoWloTX78lbGH3SNn3m0XOyB21Z6LiJC&sz=w10000"
          effect="blur"
        />
      </div>
      <div className="about-page">
        <h3>HI,I'm Kavin R</h3>
        <h1>Full Stack Developer</h1>
        <Button color="info" href="#contact">
          Contact Me
        </Button>
      </div>
    </>
  );
};

export default Banner;
