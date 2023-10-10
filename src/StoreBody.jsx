import React from "react";
import './StoreBody.css';
import BigSlider from "./BigSlider";
import store_chat_specialist from './images/store/store-chat-specialist-icon-202305_AV1.jpeg';
import store_location_icon from './images/store/store-location-icon.png';
import mac from './images/store/store-card-14-16-mac-nav-202301.png';
import iphone from './images/store/store-card-13-iphone-nav-202309_GEO_EMEA.png';
import ipad from './images/store/store-card-13-ipad-nav-202210.png';
import apple_watch from './images/store/store-card-13-watch-nav-202309_GEO_IN.png';
import airpods from './images/store/store-card-13-airpods-nav-202209.png';
import airtag from './images/store/store-card-13-airtags-nav-202108.png';
import apple_tv_4k from './images/store/store-card-13-appletv-nav-202210.png';
import homepod from './images/store/store-card-13-homepod-nav-202301.png';
import iphone_15_pro from './images/store/store-card-40-iphone-15-pro-202309.jpeg';
import iphone_15 from './images/store/store-card-40-iphone-15-202309.jpeg';
import apple_watch_9_series from './images/store/store-card-40-watch-s9-202309_GEO_IN.jpeg';

function StoreBody(){
    const storeAssistanceArray = [{icon: store_chat_specialist, line_1:'Need shopping help?', line_2:'Ask a specialist'}, 
    {icon:store_location_icon, line_1:'Visit an Apple Store', line_2:'Find one near you'}];

    const allProdcutsSliderArray = [{img:mac, prod_name:'Mac'},
                                    {img:iphone, prod_name:'iPhone'},
                                    {img:ipad, prod_name:'iPad'},
                                    {img:apple_watch, prod_name:'Apple Watch'},
                                    {img:airpods, prod_name:'AirPods'},
                                    {img:airtag, prod_name:'AirTag'},
                                    {img:apple_tv_4k, prod_name:'Apple TV 4K'},
                                    {img:homepod, prod_name:'HomePod'}];

    const latestCategoryArray = [{prod:'IPHONE 15 PRO',description:'Titanium', price:'From ₹134900‡', image: iphone_15_pro, color:'white'},
                                 {prod:'IPHONE 15',description:'Newphoria', price:'From ₹79900‡', image: iphone_15, color:'black'},
                                 {prod:'APPLE WATCH SERIES 9',description:'Smarter.Brighter.Mightier', price:'From ₹41900‡', image: apple_watch_9_series, color:'white'}]

    return(
        <div className="storebody-container">
            <div className="nav-and-savings">
                <div className="nav-background"></div>
                <div className="savings-div">
                    <i class="fa-solid fa-chevron-left fa-s"></i>
                    <div>
                        <p>Get up to ₹8000 instant savings on selected products with eligible HDFC Bank cards.§§ Plus No Cost EMI from most leading banks.§</p>
                        <span className="text-blue underline">See offers <i class="fa-solid fa-chevron-right fa-xs"></i></span>
                    </div>
                    <i class="fa-solid fa-chevron-right fa-s"></i>
                </div>
            </div>
            <section className="store-heading-and-assistance black-border">
                <div className="store-heading black-border"><div><span className="store-word">Store.</span> The best way to buy the products you love.</div></div>
                <div className="store-assistance black-border">
                    {storeAssistanceArray.map(obj => (
                            <div className="black-border">
                                <div className="store-assistance-icon black-border"><img src={obj.icon}/></div>
                                <div className="store-assistance-text"><p>{obj.line_1}</p><p className="text-blue">{obj.line_2}</p></div>
                            </div>
                    ))}
                </div>
            </section>
            <section className="store-all-products-slider black-border">
                {allProdcutsSliderArray.map(obj => (
                    <div className="store-all-products-slider-card black-border">
                        <div className="black-border"><img src={obj.img}/></div>
                        <p>{obj.prod_name}</p>
                    </div>
                ))}
            </section>
            <section className="latest-category-big-slider">
                <BigSlider textOnCard={latestCategoryArray} heading1={`The latest.`} heading2={` Take a look at what's new right now.`}/>
            </section>
        </div>
    )
}

export default StoreBody