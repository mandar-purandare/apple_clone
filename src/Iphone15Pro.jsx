import React from 'react'
import Header from './Header'
import './Iphone15Pro.css'
import side_view from './images/iphone_15_pro/hero_endframe__ov6ewwmbhiqq_large.jpg'
import a_17_pro from './images/iphone_15_pro/chip__fuct924q1s66_large.jpg'
import all_colors from './images/iphone_15_pro/all_colors__eppfcocn9mky_large.jpg'
import color_pallate from './images/iphone_15_pro/color_pallate.png'

function Iphone15Pro() {
  return (
    <div className='iphone-15-pro-container'>
        <Header/>
        <div className='instant-savings'>
            <p>Save up to ₹6000.00 instantly on iPhone with HDFC Bank Credit Cards. Plus No Cost EMI from most leading banks.‡ Shop iPhone <i class="fa-solid fa-chevron-right"></i></p>
        </div>
        <div className='big-image'>
            <h3>iPhone 15 Pro</h3>
            <img src={side_view}/>
            <button>Buy</button>
            <h4>From ₹21483.00/mo.‡ or ₹134900.00*</h4>
        </div>
        <section className='i15pro-sec-2'>
            <div className='i15pro-sec-2-text-div'>
                <div><p>Get the highlights.</p></div>
                <div><h4 className='text-blue'>Watch the film <i class="fa-regular fa-circle-play"></i></h4><h4 className='text-blue'>Watch the event <i class="fa-solid fa-chevron-right fa-xs"></i></h4></div>
            </div>
            <div className='i15pro-sec-2-img-card'>
                <div className='i15pro-sec-2-img-text'>
                    <p>Enter A17 Pro</p>
                    <p>Game-changing chip.</p>
                    <p>Groundbreaking performance.</p>
                </div>
                <div className='i15pro-sec-2-img-div'>
                    <img src={a_17_pro}/>
                </div>
            </div>
        </section>
        <section className='i15pro-sec-3'>
            <h2>Take a closer look.</h2>
            <div>
                <img src={all_colors}/>
            </div>
            <div>
                <p>6.1'' iPhone 15 Pro in four colours</p>
                <img src={color_pallate}/>
            </div>
        </section>
        <section className='i15pro-sec-4'>

        </section>
        <section className='i15pro-sec-5'>
            
        </section>
    </div>
  )
}

export default Iphone15Pro