import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Iphone15Pro.css'
import side_view from './images/iphone_15_pro/hero_endframe__ov6ewwmbhiqq_large.jpg'
import a_17_pro from './images/iphone_15_pro/chip__fuct924q1s66_large.jpg'
import all_colors from './images/iphone_15_pro/all_colors__eppfcocn9mky_large.jpg'
import color_pallate from './images/iphone_15_pro/color_pallate.png'
import titanium_border from './images/iphone_15_pro/titanium_endframe__jkbvub6cqj6u_large.jpg'
import camera_close_up from './images/iphone_15_pro/lightest__boybgwifuehe_large.jpg'
import side_button_shot from './images/iphone_15_pro/durable__omxi3w443rue_large.jpg'

function Iphone15Pro() {
  return (
    <div className='iphone-15-pro-container'>
        <div className='iphone-15-pro-header-container'><Header/></div>
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
            <p>Explore the full story.</p>
            <h2>iPhone.</h2>
            <h2>Forged in titanium.</h2><br/><br/><br/><br/>
            <div className='i15pro-sec-4-img1-div'>
                <img src={titanium_border}/>
            </div>
            <div className='i15pro-sec-4-img1-div'>
                <div><img src={camera_close_up}/></div>
                <div><img src={side_button_shot}/></div>
            </div>
            <div className='split-paras'>
                <p>iPhone 15 Pro is <span className='white-text'>the first iPhone to feature an aerospace‑grade titanium design, </span>using the same alloy that spacecraft use for missions to Mars.</p>
                <p>Titanium has one of the best strength‑to‑weight ratios of any metal, making these our <span className='white-text'>lightest Pro models ever. </span> You’ll notice the difference the moment you pick one up.</p>
            </div>
        </section>
        <section className='i15pro-sec-5'>
            
        </section>
        <section className='iphone-related-menu'>
            <h2>iPhone</h2>
            <div>
                <ul>
                    <li className='small-li'>Explore iPhone</li>
                    <li>Explore All iPhone</li>
                    <li>iPhone 15 Pro</li>
                    <li>iPhone 15</li>
                    <li>iPhone 14</li>
                    <li>iPhone 13</li>
                    <li>iPhone SE</li>
                </ul>
                <ul>
                    <li className='small-li'>Shop iPhone</li>
                    <li>Shop iPhone</li>
                    <li>iPhone Accessories</li>
                    <li>MagSafe Accessories</li>
                    <li>Trade In</li>
                    <li>Ways to Buy</li>
                </ul>
                <ul>
                    <li className='small-li'>Go Further</li>
                    <li>iPhone Support</li>
                    <li>iOS 17</li>
                    <li>iPhone Privacy</li>
                    <li>iCloud</li>
                    <li>Wallet</li>
                    <li>Siri</li>
                </ul>
            </div>
            <h5>Compare iPhone</h5>
            <h5>Switch from Android</h5>
        </section>
        <section className='pre-footer i15pro-pre-footer'>
            <p className='footer-text'>
            *Listed pricing is Maximum Retail Price (inclusive of all taxes).
            </p>
            <p className='footer-text'>
            ‡Instant savings, otherwise referred to as instant cashback, is available on the Apple Store Online and Apple Retail Stores with the purchase of an eligible product with qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only from 15 October 2023 to 14 November 2023, with the exception of iPhone 14 and iPhone 14 Plus, and AirPods Pro (2nd generation), which will have instant savings applicable between 15 October 2023 and 7 November 2023 only. Minimum transaction value of ₹10001.00 applies. Click here to see instant savings amounts and eligible devices. Instant savings are available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.
            </p>
            <p className='footer-text'>
            No Cost EMI is available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply.
            </p>
            <p className='footer-text'>
            Representative example:
            Based off a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00.
            </p>
            <p className='footer-text'>
                1. Display size: The display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 15.54 cm / 6.12″ (iPhone 15 Pro) or 17.00 cm / 6.69″ (iPhone 15 Pro Max) diagonally. Actual viewable area is less.
            </p>
            <p className='footer-text'>
                2. iPhone 15 Pro and iPhone 15 Pro Max are splash, water and dust resistant, and were tested under controlled laboratory conditions with a rating of IP68 under IEC standard 60529 (maximum depth of 6 metres up to 30 minutes). Splash, water and dust resistance are not permanent conditions. Resistance might decrease as a result of normal wear. Do not attempt to charge a wet iPhone; refer to the user guide for cleaning and drying instructions. Liquid damage is not covered under warranty.
            </p>
            <p className='footer-text'>
                3. Stand is sold separately.
            </p>
            <p className='footer-text'>
                4. Apple Vision Pro is available early next year in the United States.
            </p>
            <p className='footer-text'>
                5. USB 3 cable with 10 Gbps speed is required.
            </p>
            <p className='footer-text'>
                6. Wi‑Fi 6E available in countries and regions where supported.
            </p>
            <p className='footer-text'>
                7. Ultra Wideband availability varies by region.
            </p>
            <p className='footer-text'>
                8. The included USB‑C Charge Cable is compatible with AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)
            </p>
            <p className='footer-text'>
                9. Testing conducted by Apple in August 2023 using preproduction iPhone 15, iPhone 15 Plus, iPhone 15 Pro and iPhone 15 Pro Max units and software and accessory Apple USB-C Power Adapter (20W Model A2305). Fast-charge testing conducted with drained iPhone units. Charge time varies with settings and environmental factors; actual results will vary.
            </p>
            <p className='footer-text'>
                10. Use of eSIM requires a wireless service plan (which may include restrictions on switching service providers and roaming, even after contract expiration). Not all carriers support eSIM. Use of eSIM in iPhone may be disabled when purchased from some carriers. See your carrier for details. To learn more, visit apple.com/in/esim.
            </p>
            <p className='footer-text'>
                11. Data plan is required. 5G is available in selected markets and through selected carriers. Speeds vary based on site conditions and carrier. For details on 5G support, contact your carrier and see apple.com/in/iphone/cellular.
            </p>
            <p className='footer-text'>
                12. All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced. Battery life and charge cycles vary by use and settings. See apple.com/in/batteries and apple.com/in/iphone/battery.html for more information.
            </p>
            <p className='footer-text'>
                13. Accessories are sold separately.
            </p>
            <p className='footer-text'>
                14. iPhone 15 and iPhone 15 Pro can detect a severe car crash and call for help. Requires a cellular connection or Wi‑Fi calling.
            </p>
            <p className='footer-text'>
                15. On a mass balance allocation.
            </p>
            <p className='footer-text'>
                16. Breakdown of U.S. retail packaging by weight. Adhesives, inks and coatings are excluded from our calculations of plastic content and packaging weight.
            </p>
            <p className='footer-text'>
                17. Responsible sourcing of wood fibre is defined in Apple’s Responsible Fibre Specification. We consider wood fibres to include bamboo.
            </p>
            <p className='footer-text'>
                18. Door Detection and Point and Speak can read signs and labels in Cantonese (Simplified, Traditional), Chinese (Simplified, Traditional), English (U.S.), French (France), German (Germany), Italian (Italy), Japanese (Japan), Korean (Korea), Portuguese (Brazil), Russian (Russia), Spanish (Spain) and Ukrainian (Ukraine). Detection Mode should not be relied on in circumstances where you may be harmed or injured or in high-risk or emergency situations.
            </p>
            <p className='footer-text'>
                19. Requires an iPhone and Apple Watch with second-generation Ultra Wideband chip. Ultra Wideband availability varies by region.
            </p>
            <p className='footer-text'>
                20. Trade-in values will vary based on the condition, year and configuration of your trade-in device, and is computed on Maximum Retail Price. You must be at least 18 years old to be eligible to trade in for credit. Not all devices are eligible for credit. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply. Credit applied towards your new iPhone will be based on the received device matching the description you provided when your estimate was made and upon validation by the courier. Apple reserves the right to refuse or limit the quantity of any device for any reason.
            </p>
            <p className='footer-text'>
                21. Battery life claim refers to larger models. All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced. Battery life and charge cycles vary by use and settings. See apple.com/in/batteries and apple.com/in/iphone/battery.html for more information.
            </p>
            <p className='footer-text'>
            </p>
        </section>
        <Footer/>
    </div>
  )
}

export default Iphone15Pro