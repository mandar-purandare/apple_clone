import React from 'react'
import './ImageText.css'

function ImageText({textObj}) {
  return (
    <div className={`image-text-container ${textObj.class}`}>
        <h2  style={{color: textObj.color}}>{textObj.heading}</h2>
        <h3  style={{color: textObj.color}}>{textObj.description}</h3>
        <h4><span>Learn more <i class="fa-solid fa-chevron-right fa-xs"></i></span><span>Buy <i class="fa-solid fa-chevron-right fa-xs"></i></span></h4>
    </div>
  )
}

export default ImageText