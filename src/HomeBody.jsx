import React from 'react'
import './HomeBody.css'
import iphone_15_pro from './images/cropped_iphone_15_pro.png';
import iphone_15 from './images/cropped_iphone_15.png';
import apple_watch_series_9 from './images/cropped_apple_watch_series_9.png';
import ipad_pro from './images/promo_ipadpro_refresh__evi9utuixwuq_large.jpg';
import watch_ultra_2 from './images/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_large.png';
import macbook_air_15 from './images/promo_macbook_air_15_midnight__3zojl1nanrme_large.jpg';
import airpod_pro from './images/promo_airpods_pro_order__d8xv36p4uwae_large.jpg';
import trade_in from './images/logo_tradein__d1fpktgipvki_large.png';
import homepod_mini from './images/tile_homepod_mini__b73w4z3ljymu_large.jpg';

function HomeBody() {
  const largeImageArray = [iphone_15_pro,iphone_15, apple_watch_series_9];
  const smallImageArray = []
  return (
    <div className='homebody-container'>
      <div className='instant-savings'>
        <p>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.* Shop now <i class="fa-solid fa-chevron-right"></i></p>
      </div>
      <div className='large-img-container'>
        {largeImageArray.map(img => <img src={img}/>)}
      </div>
      <div className='small-img-container'>
        <div></div>
      </div>
    </div>
  )
}

export default HomeBody