import React from 'react'
import './CarouselItem.css'

function CarouselItem( { children, width, height }) {
  return (
    <div className="carousel-item" style={{ width: width, height: height }}>
        { children }
    </div>
  );
}

export default CarouselItem;