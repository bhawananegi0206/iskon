import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import iskon1 from "./images/iskonBG1.jpeg";
import iskon2 from "./images/iskonBG2.jpeg";
import iskon3 from "./images/iskonBG3.jpeg";

const Hero = () => {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={iskon1} className="d-block w-100" alt="..." />
        <MDBCarouselCaption>
          <div className="descriptionSection">
            <h5>Welcome to</h5>
            <p>Sri Sri Radha Rasabihari Temple</p>
          </div>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={iskon2} className="d-block w-100" alt="..." />
        <MDBCarouselCaption>
          <div className="descriptionSection">
            <h5>Welcome to</h5>
            <p>Sri Sri Radha Rasabihari Temple</p>
          </div>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={iskon3} className="d-block w-100" alt="..." />
        <MDBCarouselCaption>
          <div className="descriptionSection">
            <h5>Welcome to</h5>
            <p>Sri Sri Radha Rasabihari Temple</p>
          </div>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
};

export default Hero;
