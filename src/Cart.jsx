import React from 'react'
import './Cart.css'
import Header from './Header'
import Footer from './Footer'
import i15pro from './images/iphone_15_pro/iphone_15pro__3nx4u28gc026_large.jpg'

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
            <hr/>
        </section>
        <section className='cart-items'>
            <div className='cart-item-template black-border'>
                <div className='cart-item-template-row1'>
                    <div className='cart-item-img'>
                        <img src={i15pro}/>
                    </div>
                    <div className='cart-item-name-installment'>
                        <h3>iPhone 15 Pro 128GB Blue Titanium</h3>
                        <p>Pay 15% pa for 6 months:^</p>
                    </div>
                    <div className='quantity-select-and-remove'>
                        <div>
                            <div>1 <i class="fa-solid fa-chevron-down fa-xs"></i></div>
                            <h3>₹134900.00</h3>
                        </div>
                        <p>Get up to ₹11457.00 savings with eligible card(s)^</p>
                        <p>₹21483.00/mo.^</p>
                        <p className='blue-link-hover'>Remove</p>
                    </div>
                </div>
                <hr/>
                <div className='cart-item-template-row2'>
                    <div>
                        <div><i class="fa-brands fa-apple"></i><h3>Add AppleCare+ for iPhone 15 Pro for ₹20900.00</h3></div>
                        <span>Add</span>
                    </div>
                    <ul>
                        <li>Unlimited repairs for accidental damage protection</li>
                        <li>Apple-certified repairs using genuine Apple parts</li>
                        <li>Priority access to Apple experts</li>
                    </ul>
                    <span>Learn more</span>
                </div>
                <hr/>
                <div className='cart-item-template-row3'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Cart