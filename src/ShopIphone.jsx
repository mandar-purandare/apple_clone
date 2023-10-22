import React from 'react'
import Header from './Header'
import './ShopIphone.css'
import store_chat_specialist from './images/store/store-chat-specialist-icon-202305_AV1.jpeg';
import store_location_icon from './images/store/store-location-icon.png';

function ShopIphone() {
    const storeAssistanceArray = [{icon: store_chat_specialist, line_1:'Need shopping help?', line_2:'Ask an iPhone specialist'}, 
    {icon:store_location_icon, line_1:'Visit an Apple Store', line_2:'Find one near you'}];

  return (
    <div className='shop-iphone-container'>
        <Header/>
        <div className='header-background'></div>
        <div className='instant-savings shop-iphone-instant-savings'>
            <p>Save up to ₹6000.00 instantly on iPhone with HDFC Bank Credit Cards. Plus No Cost EMI from most leading banks.‡ See offers <i class="fa-solid fa-chevron-right"></i></p>
        </div>
        <section className="store-heading-and-assistance">
                <div className="store-heading shop-iphone-title"><div><span className="store-word">Shop iPhone</span></div></div>
                <div className="store-assistance ">
                    {storeAssistanceArray.map(obj => (
                            <div className="">
                                <div className="store-assistance-icon "><img src={obj.icon}/></div>
                                <div className="store-assistance-text"><p>{obj.line_1}</p><p className="text-blue">{obj.line_2}</p></div>
                            </div>
                    ))}
                </div>
            </section>
    </div>
  )
}

export default ShopIphone