import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

interface CarouselProps {
    images: object
}

export default function YogaCarousel({ images }: CarouselProps) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    
    const IMAGE_URL = 'http://127.0.0.1:8000/static'

    // const handleSelect = (selectedIndex, e): any => {
    //   setIndex(selectedIndex);
    //   setDirection(e.direction);
    // };

  
    return (
        <Carousel>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={`${IMAGE_URL}/${images}`}
                alt="First slide"
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
                alt="Third slide"
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
            />
        
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
  }
  
