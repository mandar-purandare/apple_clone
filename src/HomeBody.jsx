import React from 'react'
import './HomeBody.css'
import iphone_15_pro from './images/cropped_iphone_15_pro.png';
import iphone_15 from './images/cropped_iphone_15.png';
import apple_watch_series_9 from './images/cropped_apple_watch_series_9.png';
import watch_series_9_logo from './images/hero_logo_apple_watch_series_9__eg5xcrxghuaa_large.png'
import ipad_pro from './images/promo_ipadpro_refresh__evi9utuixwuq_large.jpg';
import watch_ultra_2 from './images/promo_apple_watch_ultra2_order__dyxqj5ia98om_large.jpg';
import watch_ultra_2_logo from './images/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_large.png';
import macbook_air_15 from './images/promo_macbook_air_15_midnight__3zojl1nanrme_large.jpg';
import airpod_pro from './images/promo_airpods_pro_order__d8xv36p4uwae_large.jpg';
import trade_in from './images/promo_iphone_tradein__bugw15ka691e_large.jpg';
import homepod_mini from './images/tile_homepod_mini__b73w4z3ljymu_large.jpg';
import m2_chip_logo from './images/promo_m2_chip__enw2kz91lsuq_large.png';
import trade_in_logo from './images/logo_tradein__d1fpktgipvki_large.png';
import silo from './images/SILO.jpg';
import slider_dots from './images/slider_dots.png';
import ImageText from './ImageText';

function HomeBody() {
  const largeImageTextArray = [
    {heading:'iPhone 15 Pro', description:'Titanium. So strong. So light. So Pro', color: 'white', class:'large'},
    {heading:'iPhone 15', description:'New camera. New design. Newphoria', color: 'black', class:'large'},
    {heading: <img src={watch_series_9_logo} style={{height:90, width:180}}/>, description:'Smarter. Brighter. Mightier', color: 'white', class:'large'}
  ]

  const chip_logo_description = <img src={m2_chip_logo} style={{height:35, width:35}}/>;

  const smallImageTextArray = [
    {heading:'iPad Pro', description: 'Super charged by', color: 'white', class:'small'},
    {heading: <img src={watch_ultra_2_logo} style={{height:100, width:270}}/>, description:'Next-level adventure.', color: 'black', class:'small'},
    {heading: 'MacBook Air 15’‘', description:'Impressively big. Impossibly thin.', color: 'black', class:'small'},
    {heading:'AirPods Pro', description:'Adaptive audio. Now playing.', color: 'white', class:'small'},
    {heading: <img src={trade_in_logo} style={{height:70, width:350}}/>, description:'Upgrade and save. It‘s that easy.', color: 'black', class:'small'},
    {heading: 'HomePod mini', description:'', color: 'black', class:'small'}
  ]
  const largeImageArray = [iphone_15_pro, iphone_15, apple_watch_series_9];
  const smallImageArray = [ipad_pro, watch_ultra_2, macbook_air_15, airpod_pro, trade_in, homepod_mini]
  return (
    <div className='homebody-container'>
      <div className='instant-savings'>
        <p>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.* Shop now <i class="fa-solid fa-chevron-right"></i></p>
      </div>
      <div className='large-img-container'>
        {largeImageArray.map((img,i) => <div><img src={img}/><ImageText textObj={largeImageTextArray[i]}/></div>)}
      </div>
      <div className='small-img-container'>
        {smallImageArray.map((img,i) => <div><img src={img}/><ImageText textObj={smallImageTextArray[i]}/></div>)}
      </div>
      <div className='movie-slider'>
        <img src={silo} style={{height:450, width:800}}/><br/>
        <img src={slider_dots}/>
      </div>
    </div>
  )
}

export default HomeBody