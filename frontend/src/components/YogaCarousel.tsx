import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

interface YogaCarouselProps {
    images: any
} 

export default function YogaCarousel({ images }: YogaCarouselProps) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const IMAGE_URL = 'http://127.0.0.1:8000'


    const handleSelect = (selectedIndex: number, e: any) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel activeIndex={index} indicators={true} slide={true} onSelect={handleSelect}>
        {images.map((image: any) => 
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${IMAGE_URL}/${image}`}   
              alt="slide"
              style={{ width: '470px' }}
            />
            {/* <Carousel.Caption>
              <h3>slide label</h3>
              <p>why why why why why?</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          )
        }
        
      </Carousel>
    );
}
  