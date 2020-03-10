import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
// import RBCarousel from "react-bootstrap-carousel";
// import { Row, Col, Button, ButtonGroup } from "./bootstrap-component.jsx";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
interface YogaCarouselProps {
    images: object
} 

export default function YogaCarousel({ images }: YogaCarouselProps) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const IMAGE_URL = 'http://127.0.0.1:8000/static'


    const handleSelect = (selectedIndex: number, e: any) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel activeIndex={0} indicators={true} slide={true} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${IMAGE_URL}/${images}`}   
            alt="First slide"
            style={{ width: '470px' }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${IMAGE_URL}/${images}`}   
            alt="Second slide"
            style={{ width: '470px' }}
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${IMAGE_URL}/${images}`}   
            alt="Third slide"
            style={{ width: '470px' }}
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
  