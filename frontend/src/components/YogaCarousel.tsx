import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';

interface CarouselProps {
  images: object[];
}

export default function YogaCarousel({ images }: CarouselProps) {
    const IMAGE_URL = 'http://127.0.0.1:8000'; 

    return (
      <Carousel autoplay>  
        {images.map(image => 
            <img src={`${IMAGE_URL}${image}`} />
        )}
      </Carousel>
    );
}


