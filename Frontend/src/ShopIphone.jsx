import React, { useState } from 'react'
import Header from './Header'
import BigSlider from './BigSlider';
import './ShopIphone.css'
import store_chat_specialist from './images/store/store-chat-specialist-icon-202305_AV1.jpeg';
import store_location_icon from './images/store/store-location-icon.png';
import iphone_15 from './images/shop_iphone/iphone-card-40-iphone15hero-202309.jpeg'
import iphone_15_pro from './images/shop_iphone/iphone-card-40-iphone15prohero-202309.jpeg'
import iphone_14 from './images/shop_iphone/iphone-card-40-iphone14-202209.jpeg'
import iphone_modal_image from './images/shop_iphone/iphone-modal-image.png'
import iphone_modal_footer from './images/shop_iphone/iphone-modal-footer.png'
import feature_li_opt_1 from './images/shop_iphone/li-screen-size.png'
import feature_li_opt_2 from './images/shop_iphone/li-action-button.png'
import feature_li_opt_3 from './images/shop_iphone/li-camera.png'
import feature_li_opt_4 from './images/shop_iphone/li-a17-pro-chip.png'
import feature_li_opt_5 from './images/shop_iphone/li-c-type.png'

import Footer from './Footer';

function ShopIphone() {

    const [productModal, setProductModal] = useState('hidden-modal');

    function closeModal(){
        setProductModal(productModal => productModal = 'hidden-modal');
    }

    const storeAssistanceArray = [{icon: store_chat_specialist, line_1:'Need shopping help?', line_2:'Ask an iPhone specialist'}, 
    {icon:store_location_icon, line_1:'Visit an Apple Store', line_2:'Find one near you'}];

    const shopNavArray = ['All Models','Festive specials.','Shopping Guides','Accessories','Setup and Support','The iPhone Experience'];

    const shopBigSliderArray = [{image: iphone_15_pro, prod:'iPhone 15 Pro &', color:'black', description:'iPhone 15 Pro Max', price:'From ₹21483/mo. with instant savings and No Cost EMI or ₹134900.00‡', route:'iphone_15_pro'},
                                {image: iphone_15, prod:'iPhone 15 &', color:'black', description:'iPhone 15 Plus', price:'From ₹12483/mo. with instant savings and No Cost EMI or ₹79900.00‡', route:''},
                                {image: iphone_14, prod:'iPhone 14 &', color:'black', description:'iPhone 14 Plus', price:'From ₹10983/mo. with instant savings and No Cost EMI or ₹69900.00‡', route:''}]

    return (
        <div className='shop-iphone-container'>

            {/* ------------modal start----------------- */}

            <div className={productModal}>
                <div className='close-modal-button' onClick={closeModal}>
                    <i class="fa-solid fa-circle-xmark fa-2xl"></i>
                </div>
                <div className='product-modal-template'>
                    <div className='product-modal-body'>
                        <div className='prduct-modal-left'>
                            <div className='product-modal-nav'>
                                <div>iPhone 15 Pro</div>
                                <div>iPhone 15 Pro Max</div>
                            </div>
                            <div className='product-modal-img'>
                                <img src={iphone_modal_image}/>
                            </div>
                        </div>
                        <div className='prduct-modal-right'>
                            <div className='product-modal-title'>
                                <div>
                                    <span>New</span>
                                    <h1>iPhone 15 Pro</h1>
                                    <p>From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡</p>
                                </div>
                                <div>
                                    <button>Buy</button>
                                </div>
                            </div>
                            <div className='product-modal-features'>
                                <ul>
                                    <li className='feature-li-opt-1'><img src={feature_li_opt_1}/><p>15.5 cm (6.1-inch) Super Retina XDR display¹ featuring ProMotion, Always-On and Dynamic Island</p></li>
                                    <li className='feature-li-opt-2'><img src={feature_li_opt_2}/><p>Strong and light titanium design with Action button — a fast track to your favourite feature</p></li>
                                    <li className='feature-li-opt-3'><img src={feature_li_opt_3}/><p>48MP Main camera for super-high-resolution photos and 3x Telephoto camera</p></li>
                                    <li className='feature-li-opt-4'><img src={feature_li_opt_4}/><p>A17 Pro chip delivers a massive leap in graphics performance, transforming mobile gaming</p></li>
                                    <li className='feature-li-opt-5'><img src={feature_li_opt_5}/><p>USB-C connector with USB 3 for up to 20x faster transfer speeds footnote ² and new pro workflows</p></li>
                                </ul>
                            </div>
                            <p className='product-modal-explore'>Explore iPhone 15 Pro further <i class="fa-solid fa-chevron-right fa-xs"></i></p>
                        </div>
                    </div>
                    <div className='product-modal-footer'>
                        <img src={iphone_modal_footer}/>
                    </div>
                </div>   
            </div>

            {/* ---------------modal end--------------------- */}

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
                <div className='shop-iphone-shop-nav'>
                        {shopNavArray.map(opt => (
                            <div>{opt}</div>
                        ))}
                </div>
                <div className="store-heading shop-iphone-store-heading"><div><span className="store-word">All models.</span> Take your pick.</div></div>
                <BigSlider heading1={''} heading2={''} cardArray={shopBigSliderArray} customCard={'shop-iphone-big-slider'} modalState={{productModal,setProductModal}}/>
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

export default ShopIphone