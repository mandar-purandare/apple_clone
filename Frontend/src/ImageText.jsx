import React from 'react'
import './ImageText.css'
import { useNavigate } from 'react-router-dom'

function ImageText({textObj}) {

  const router = useNavigate();

  function goTo(product){
    // let path = product.toLowerCase();
    // path = path.replaceAll(' ','');
    router('/'+product);
  }

  return (
    <div className={`image-text-container ${textObj.class}`}>
        <h2  style={{color: textObj.color}}>{textObj.heading}</h2>
        <h3  style={{color: textObj.color}}>{textObj.description}</h3>
        <h4><span onClick={() => goTo(textObj.route)}>Learn more <i class="fa-solid fa-chevron-right fa-xs"></i></span><span>Buy <i class="fa-solid fa-chevron-right fa-xs"></i></span></h4>
    </div>
  )
}

export default ImageText