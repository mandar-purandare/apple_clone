import React from 'react';
import './BigSlider.css';

function BigSlider({cardArray, heading1, heading2, customCard}) {
  return (
    <div className={`big-slider-container  ${customCard}`}>
        <h2 className='big-slider-heading'><span>{heading1}</span><span>{heading2}</span></h2>
        <div className='big-slider-card-container'>
            {cardArray.map(obj => (
                <div className={`big-slider-card `}>
                    <img src={obj.image}/>
                    <div className='big-slider-card-text' style={{color:obj.color}}>
                        <h4>{obj.prod}</h4>
                        <h2>{obj.description}</h2>
                        <h3>{obj.price}</h3>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BigSlider