import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="./assets/horizontal-pictures/vegetable-roll.jpeg"
          alt="Vegetable Roll"
        />
        <Carousel.Caption>
          <h3>Vegetable Roll</h3>
          <p>Cucumber, fresh carrot, scallion, avocado</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="./assets/horizontal-pictures/salmon-nigiri.jpeg"
          alt="Salmon Nigiri"
        />

        <Carousel.Caption>
          <h3>Salmon Nigiri</h3>
          <p>A topping, salmon, served on top of sushi rice.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="./assets/horizontal-pictures/rainbow-roll.jpeg"
          alt="Rainbow Roll"
        />

        <Carousel.Caption>
          <h3>Rainbow Roll</h3>
          <p>
            Fish cake/imitation crab, avocado, cucumber, tuna, avocado, salmon,
            shrimp, yellowtail
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
