import React from 'react'
import { useState } from 'react';
import 'Carousel.css';

function Carousel({ children, ...other }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = function(newIndex){
        if(newIndex < 0){
            newIndex = 0;
        }
        else if(newIndex >= React.Children.count(children)){
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex);
    };
    return (
        <div className="carousel">
            <div className="inner" style={{ transform: `translateX(-${activeIndex*100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%", height: "100%" });
                })}
            </div>

            <div className="indicators" style={{ paddingLeft: '15rem', marginTop: other.marginTopCarouselItem }}>
                {React.Children.map(children, (child, index) => {
                    return (
                        <img className='logo' onClick={() => {
                            updateIndex(index);
                        }}
                            src={child.props.src} alt={child.props.alt}></img>
                    );
                })}
            </div>
        </div>
    )
}

export default Carousel