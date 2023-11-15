import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./HomeCarousel.css"
const HomeCarousel = () => {
  return (
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="https://assets.entrepreneur.com/content/3x2/2000/20160813000120-GettyImages-486493061.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>We are where people need help</h1>
      <Button variant="secondary" size="lg" block>
    Learn more
  </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="https://thatgoodolfeelin.com/wp-content/uploads/2022/03/pexels-rodnae-productions-6646917.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>We are where people need help</h1>
      <Button variant="secondary" size="lg" block>
    Learn more
  </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="https://serudsindia.org/wp-content/uploads/2018/07/10-Psychological-Benefits-of-Helping-People-Making-Charity.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>We are where people need help</h1>
      <Button variant="secondary" size="lg" block>
    Learn more
  </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
};

export default HomeCarousel;
