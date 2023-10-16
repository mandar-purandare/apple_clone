import React from 'react'
import Header from './Header'
import './Register.css'
import people_shaking_hands_logo from './images/people_shaking_hands_logo.png'

function Register() {
  return (
    <div className='register-container'>
        <Header/>
        <div className='register-nav'>
            <h2>Apple ID</h2>
            <ul>
                <li>Sign In</li>
                <li>Create Your Apple ID</li>
                <li>FAQ</li>
            </ul>
        </div>
        <hr className='register-hr-1'/>
        <section className='register-sections'>
            <h2>Create Your Apple ID</h2>
            <p>One Apple ID is all you need to access all Apple services.</p>
            <div className='register-name'>
                <div><input type='text' placeholder='first name'/></div>
                <div><input type='text' placeholder='last name'/></div>
            </div>
            <p className='register-section-text'>COUNTRY/REGION</p>
            <select className='register-section-big-div'><option>India</option></select>
            <div className='register-section-big-div'>Date of birth</div>
        </section>
        <hr className='register-hr-2'/>
        <section className='register-sections'>
            <div className="register-section-big-div apple-id">name@example.com</div>
            <p className='register-section-text apple-id-message'>This will be your Apple ID</p>
            <div className="register-section-big-div">password</div>
            <div className="register-section-big-div">confirm password</div>
        </section>
        <hr className='register-hr-2'/>
        <section className='register-sections'>
            <select className='register-section-big-div'><option>+91 (India)</option></select>
            <div className="register-section-big-div">phone number</div>
            <p className='register-section-text phone-number-message'>Make sure you enter a phone number you can always access. It will be used to verify your identity any time you sign in on a new device or web browser. Messaging or data rates may apply.</p>
            <div className='verify-account-div'>
                <span>Verify with a: </span>
                <input type='radio' name='verify-account'/><span> Text Message </span>
                <input type='radio' name='verify-account'/><span> Phone Call </span>
            </div>
        </section>
        <hr className='register-hr-2'/>
        <section className='register-sections register-section-text services-message'>
            <input type='checkbox'/><span> Announcements</span>
            <p>Receive Apple emails and communications including announcements, marketing, recommendations and updates about Apple products, services and software.</p>
            <br/>
            <input type='checkbox'/><span> Apps, Music, TV and More</span>
            <p>Receive Apple emails and communications including new releases, exclusive content, special offers and marketing, and recommendations for apps, music, movies, TV, books, podcasts and more.</p>
        </section>
        <hr className='register-hr-2'/>
        <section className='register-sections'>
            <img src={people_shaking_hands_logo}/>
            <p className='registration-section-text data-managed-message'>Your Apple ID information is used to allow you to sign in securely and access your data. Apple records certain data for security, support and reporting purposes. If you agree, Apple may also use your Apple ID information to send you marketing emails and communications, including based on your use of Apple services. See how your data is managed.</p>
            <button className='registration-button'>Continue</button>
        </section>
        <footer className='register-section-text registration-footer'>
            <div className='sign-in-footer'>
                <p className='footer-text'>More ways to shop: <span className='blue-link'>Find an Apple Store</span> or <span className='blue-link'>other retailer</span> near you. Or call 000800 040 1966.</p>
                <div className='footer-bottom-div footer-text'>
                    <p >Copyright © 2023 Apple Inc. All rights reserved</p>
                    <ul >
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Sales Policy</li>
                    <li>Legal</li>
                    <li>Site Map</li>
                    </ul>
                    <span>India</span>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Register