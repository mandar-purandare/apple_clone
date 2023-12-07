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
import online_specialist from './images/store/store-card-50-specialist-help-202305.jpeg';
import personal_session from './images/store/iphone-card-50-personal-session-202109.jpeg';
import apple_support_app from './images/store/apple-support-app-202308_GEO_IN.jpeg';
import flexible_ways_to_pay from './images/store/flexible_ways_to_pay.png';
import exchange_your_smartphone from './images/store/exchange_your_smartphone.png';
import our_bussiness_your_team from './images/store/our_bussiness_your_team.png';
import trade_in_your_apple from './images/store/trade_in_your_apple.png';
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function StoreBody(){

    const router = useNavigate();

    function goTo(product){
        let path = product.toLowerCase();
        path = path.replaceAll(' ','');
        router('/shop'+ path);
      }

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

    const helpAndSupportArray = [{prod:'APPLE SPECIALIST', description:'Shop one on one with a Specialist online.', price:'', image: online_specialist, color: 'black'},
                                 {prod:'', description:'Get to know your new device with a free Personal Session.', price:'', image: personal_session, color: 'black'},
                                 {prod:'WATCH AND LEARN', description:'Need support? Our teams are here for you.', price:'', image: apple_support_app, color: 'black'}];

    const appleStoreDifferenceArray = [{prod:'',description:'',price:'',image: flexible_ways_to_pay,color:''},
                                       {prod:'',description:'',price:'',image: exchange_your_smartphone,color:''},
                                       {prod:'',description:'',price:'',image: our_bussiness_your_team,color:''},
                                       {prod:'',description:'',price:'',image: trade_in_your_apple,color:''}]

    return(
        <div className="storebody-container">
            <Header/>
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
            <section className="store-heading-and-assistance">
                <div className="store-heading "><div><span className="store-word">Store.</span> The best way to buy the products you love.</div></div>
                <div className="store-assistance ">
                    {storeAssistanceArray.map(obj => (
                            <div className="">
                                <div className="store-assistance-icon "><img src={obj.icon}/></div>
                                <div className="store-assistance-text"><p>{obj.line_1}</p><p className="text-blue">{obj.line_2}</p></div>
                            </div>
                    ))}
                </div>
            </section>
            <section className="store-all-products-slider ">
                {allProdcutsSliderArray.map(obj => (
                    <div className="store-all-products-slider-card " onClick={() => {goTo(obj.prod_name)}}>
                        <div className=""><img src={obj.img}/></div>
                        <p>{obj.prod_name}</p>
                    </div>
                ))}
            </section>
            <section className="latest-category-big-slider">
                <BigSlider cardArray={latestCategoryArray} heading1={`The latest.`} heading2={` Take a look at what's new right now.`} customCard={''}/>
            </section>
            <section className="help-and-support-big-slider">
                <BigSlider cardArray={helpAndSupportArray} heading1={`Help is here.`} heading2={`Whenever and however you need it.`} customCard={'wide'}/>
            </section>
            <section className="apple-store-difference">
                <BigSlider cardArray={appleStoreDifferenceArray} heading1={`The Apple Store difference.`} heading2={`Even more reasons to shop with us.`} customCard={'medium'}/>
            </section>
            <section className="quick-links">
                <h2>Quick Links</h2>
                <div className="quick-links-options-div">
                    <div>Order status</div>
                    <div>Shopping help</div>
                    <div>Your Saves</div>
                </div>
            </section>
            <div className="pre-footer">
                <p className="footer-text">
                ◊◊ Monthly pricing is after purchase using EMI with qualifying cards at 15% pa over a 6 month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions.
                </p>
                <p className="footer-text">
                Representative example: Based on purchase of ₹79900.00. Total amount payable ₹83432.00 paid over 6 months as 6 monthly payments of ₹13905.00 at an interest rate of 15% pa. Total interest paid to bank: ₹3532.00.
                </p>
                <p className="footer-text">
                § No-Cost EMI available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuing bank. Offer may be revised or withdrawn at any time without any prior notice. https://www.apple.com/in/shop/browse/financing/terms Terms Apply.
                </p>
                <p className="footer-text">
                Representative example: Based off a 6 month tenure. ₹79900.00 total cost includes 15% pa and No Cost EMI savings of ₹3380.00, paid over 6 months as 6 monthly payments of ₹13317.00.
                </p>
                <p className="footer-text">
                §§ Instant savings, otherwise referred to as instant cashback, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001 applies. Click here to see instant savings amounts and eligible devices. Instant savings are available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. https://www.apple.com/in/shop/browse/financing/terms Terms Apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.
                </p>
                <p className="footer-text">
                * Trade-in values will vary based on the condition, year and configuration of your trade-in device, and is computed on Maximum Retail Price. You must be at least 18 years old to be eligible to trade in for credit. Not all devices are eligible for credit. We only accept MacBook portables for Trade In at our Apple Stores. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply. Credit applied towards your new device will be based on the received device matching the description you provided when your estimate was made and upon validation. Apple reserves the right to refuse or limit the quantity of any device for any reason.
2. Special pricing available to qualified customers. To learn more about how to start qualifying for special pricing, talk to an Apple Specialist in a store or give us a call on 000800 040 1966.
                </p>
                <p className="footer-text">
                ° New and qualified returning subscribers only. ₹99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a FamilySharing group, regardless of the number of devices that you or your family purchase. This offer is not available if you or your Family have previously accepted an Apple TV+ three-months-free or one-year-free offer. Offer valid for three months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
                </p>
                <p className="footer-text">
                ⁺ New subscribers only. ₹99/month after trial. Offer available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer valid for three months after eligible device pairing. No audio product purchase necessary for current owners of eligible devices. Plan automatically renews until cancelled. Restrictions and other terms apply.
                </p>
                <p className="footer-text">
                ‡ Listed pricing is Maximum Retail Price (inclusive of all taxes).
                </p>
                <p className="footer-text">
                We use your location to show you delivery options faster. We found your location using your IP address or because you entered it during a previous visit to Apple.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default StoreBody