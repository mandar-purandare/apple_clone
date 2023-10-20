import React from 'react'
import './Cart.css'
import Header from './Header'
import Footer from './Footer'
import i15pro from './images/cart/iphone-15-pro-bluetitanium-select.jpeg'
import box from './images/cart/box.png'
import apple_bag from './images/cart/apple_bag.png'
import apple_new_arrivals from './images/cart/apple-new-arrivals-checkout-201804.jpeg'
import c_type_adapter from './images/cart/MU862.jpeg'
import iphone_clear_casing from './images/cart/MT233.jpeg'
import iphone_fine_woven_case from './images/cart/MT4H3.jpeg'
import macbook_air from './images/cart/mba15-midnight-select-202306.jpeg'

const youMayLikeArray = [{img:c_type_adapter, name:'20W USB-C Power Adapter', price:'MRP ₹1900.00'},
                         {img:iphone_clear_casing, name:'iPhone 15 Pro Max Clear Case with MagSafe', price:'MRP ₹4900.00'},
                         {img:iphone_fine_woven_case, name:'iPhone 15 Pro FineWoven Case with MagSafe - Black', price:'MRP ₹1900.00'}];

const cartItemsArray = [{img:i15pro,name:'iPhone 15 Pro 128GB Blue Titanium',price:'₹134900.00',savingAmt:'₹11457.00',installmentAmt:'₹21483.00', shortName:'iPhone 15 Pro',appleCareAmt:'₹20900.00'},
                        {img:macbook_air,name:'15-inc Macbook Air with M2 chip-Midnight',price:'₹154900.00',savingAmt:'₹16134.00',installmentAmt:'₹24150.00', shortName:'15‑inch MacBook Air (M2)',appleCareAmt:'₹21900.00'}]

function Cart() {
  return (
    <div className='cart-container'>
        <Header/>
        <div className='nav-background'></div>
        <div className="savings-div cart-savings-div">
                    <div>
                        <p>Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards.§§ Plus No Cost EMI from most leading banks.§</p>
                        <span className="text-blue underline">Learn More <i class="fa-solid fa-chevron-right fa-xs"></i></span>
                    </div>
        </div>
        <section className='cart-total'>
            <h2>Your bag total is ₹289800.00 or ₹45633.00/mo.^</h2>
            <button>Check Out</button>
            <hr className='divider-hr'/>
        </section>
        <section className='cart-items'>
            {
                cartItemsArray.map(obj => (
                    <div className='cart-item-template '>
                        <div className='cart-item-template-row1'>
                            <div className='cart-item-img'>
                                <img src={obj.img}/>
                            </div>
                            <div className='cart-item-name-installment'>
                                <h3>{obj.name}</h3>
                                <p>Pay 15% pa for 6 months:^</p>
                            </div>
                            <div className='quantity-select-and-remove'>
                                <div>
                                    <div>1 <i class="fa-solid fa-chevron-down fa-xs"></i></div>
                                    <h3>{obj.price}</h3>
                                </div>
                                <p>Get up to {obj.savingAmt} savings with eligible card(s)^</p>
                                <p>{obj.installmentAmt}/mo.^</p>
                                <p className='blue-link-hover'>Remove</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='cart-item-template-row2'>
                            <div>
                                <div><i class="fa-brands fa-apple"></i><h3>Add AppleCare+ for {obj.shortName} for {obj.appleCareAmt}</h3></div>
                                <span className='blue-link-hover'>Add</span>
                            </div>
                            <ul>
                                <li>Unlimited repairs for accidental damage protection</li>
                                <li>Apple-certified repairs using genuine Apple parts</li>
                                <li>Priority access to Apple experts</li>
                            </ul>
                            <p className='blue-link-hover'>Learn more <i class="fa-solid fa-chevron-right fa-xs"></i></p>
                        </div>
                        <hr/>
                        <div className='cart-item-template-row3'>
                            <div><h3>Find out how soon you can get this item.</h3><span className='blue-link-hover'>Enter pin code <i class="fa-solid fa-chevron-down fa-xs"></i></span></div>
                            <div><span><img src={box}/> In stock and ready to ship.</span><span><img src={apple_bag}/> Pick up at an Apple Store near you.</span></div>
                        </div>
                    </div>
                ))
            }
            <hr className='divider-hr'/>
        </section>
        <section className='cart-checkout '>
            <div>
                <p>Subtotal</p>
                <p>₹289800.00</p>
            </div>
            <div>
                <p>Shipping</p>
                <p>FREE</p>
            </div>
            <hr/>
            <div>
                <h3>Total</h3>
                <h3>₹289800.00</h3>
            </div>
            <div>
                <p>Monthly payment</p>
                <p>₹45633.00/mo.^ with EMI</p>
            </div>
            <div className='cart-total-savings'>
                <p>Total savings of ₹27591.00 with eligible card(s)^</p>
                <p className='blue-link-hover'>Explore instant Cashback§§ and No Cost EMI§</p>
            </div>
            <button>Check Out</button>
        </section>
        <section className='cart-need-help'>
            <hr/>
            <p>Need some help? Chat now (opens in new window)or call 000800 040 1966.</p>
            <hr/>
        </section>
        <h2 className='cart-you-may-also-like-h2'>You may also like</h2>
        <section className='cart-you-may-also-like'>
            
            {
                youMayLikeArray.map(obj => (
                    <div className='cart-you-may-like-template '>
                        <div className='cart-you-may-like-img-div '>
                            <img src={obj.img}/>
                        </div>
                            <h3>{obj.name}</h3>
                            <p>{obj.price}</p>
                            <p>(Incl. of all taxes)</p>
                            <button>Add to Bag</button>
                    </div>
                ))
            }
           
        </section>
        <p className='show-more-products blue-link-hover'>Show more products <i class="fa-solid fa-chevron-down fa-xs"></i></p>
        <section className='cart-new-arrivals'>
            <div className='cart-new-arrivals-img-div '>
            <div className='cart-new-arrivals-text'>
                <h3>New Arrivals</h3>
                <p>Check out the latest asseccories.</p>
                <p className='blue-link-hover'>Shop <i class="fa-solid fa-chevron-right fa-xs"></i></p>
            </div>
                <img src={apple_new_arrivals}/>
            </div>
        </section>
        <hr/>
        <div className='cart-qns-about-buying'>
            <h2>Questions about buying</h2>
            <i class="fa-solid fa-plus fa-xl"></i>
        </div>
        <section className='pre-footer'>
            <p className='footer-text'>^During checkout when you provide your card or account information, we’ll display all your EMI◊◊ options, including No Cost EMI§ as available. If instant Cashback§§ is being offered, we’ll determine your eligibility and add it to your total savings.</p>
            <p className='footer-text'>No Cost EMI will be deducted from the order total, along with any instant credit or cashback, reducing the amount to be paid or financed. Minimum order value must be met. Offers vary by bank. Subject to terms and conditions.</p>
            <p className='footer-text'>EMI rates are determined by your bank. No Cost EMI and instant Cashback offers are determined by Apple and our banking partners. Note that you cannot combine offers from multiple banks in the same order, and all items in an order will be set to the same number of instalments.</p>
            <p className='footer-text'>◊◊ Monthly pricing is after purchase using EMI with qualifying cards at 15% pa over a 6 month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions.</p>
            <p className='footer-text'>Representative example: Based on purchase of ₹79900.00. Total amount payable ₹83432.00 paid over 6 months as 6 monthly payments of ₹13905.00 at an interest rate of 15% pa. Total interest paid to bank: ₹3532.00.</p>
            <p className='footer-text'>§ No Cost EMI is available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply.</p>
            <p className='footer-text'>Representative example: Based on a 6 month tenure. ₹79900.00 total cost includes 15% pa and No Cost EMI savings of ₹3380.00, paid over 6 months as 6 monthly payments of ₹13317.00.</p>
            <p className='footer-text'>§§ Instant savings otherwise referred to as instant cashback, is available on the Apple Online Store and Apple Retail Stores with the purchase of an eligible product with qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only from October 15 2023 to November 14 2023, with the exception of iPhone 14 and iPhone 14 Plus and AirPods Pro (2nd generation), which will have instant savings applicable between October 15 2023 to November 7 2023 only. Minimum transaction value of ₹10001 applies. Click here to see instant savings amounts and eligible devices. Instant savings are available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.</p>
        </section>
        <Footer/>
    </div>
  )
}

export default Cart