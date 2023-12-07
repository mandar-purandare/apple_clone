import React, { useState } from 'react'
import Header from './Header'
import './Register.css'
import people_shaking_hands_logo from './images/people_shaking_hands_logo.png'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import api from './Config/Axios.config'

function Register() {
   
  const [user, setUser] = useState({firstName:'', lastName:'', country:'', dob:'', email:'', password:'', confirmPass:'', countryCode:'', phone:''})

  const router = useNavigate();

  function handleChange(event){
    setUser({...user, [event.target.name]: event.target.value});
  }

  async function registerUser(){
    try{
            if(!user.firstName || !user.lastName || !user.email || !user.password || !user.confirmPass){
                return toast.error('User name, email and password are mandatory')
            }

            if(user.password !== user.confirmPass){
                return toast.error('Password and confirm password do not match');
            }

            const response = await api.post('/auth/register', {...user});
            if(response.data.success){
                toast.success(response.data.message);
            }

    }catch(error){
        toast.error(error.response.data.message);
    } 
    
  }

  return (
    <div className='register-container'>
        <Header/>
        <div className='register-nav'>
            <h2>Apple ID</h2>
            <ul>
                <li onClick={()=>{router('/signin')}}>Sign In</li>
                <li>Create Your Apple ID</li>
                <li>FAQ</li>
            </ul>
        </div>
        <hr className='register-hr-1'/>
        <section className='register-sections'>
            <h2>Create Your Apple ID</h2>
            <p>One Apple ID is all you need to access all Apple services.</p>
            <div className='register-name'>
                <div><input name='firstName' type='text' placeholder='first name' onChange={handleChange}/></div>
                <div><input name='lastName' type='text' placeholder='last name' onChange={handleChange}/></div>
            </div>
            <p className='register-section-text'>COUNTRY/REGION</p>
            <select className='register-section-big-div' name='country' onChange={handleChange} value={user.country}><option value='India'>India</option></select>
            <div className='register-section-big-div'><input name='dob' type='date' placeholder='Date of birth (dd-mm-yyyy)' onChange={handleChange}/></div>
        </section>
        <hr className='register-hr-2'/>
        <section className='register-sections'>
            <div className="register-section-big-div apple-id"><input name='email' type='email' placeholder='name@example.com' onChange={handleChange}/></div>
            <p className='register-section-text apple-id-message'>This will be your Apple ID</p>
            <div className="register-section-big-div"><input name='password' type='password' placeholder='password' onChange={handleChange}/></div>
            <div className="register-section-big-div"><input name='confirmPass' type='password' placeholder='confirm password' onChange={handleChange}/></div>
        </section>
        <hr className='register-hr-2'/>
        <section className='register-sections'>
            <select className='register-section-big-div' name='countryCode' onChange={handleChange} value={user.countryCode}><option value='+91'>+91 (India)</option></select>
            <div className="register-section-big-div"><input name='phone' type='tel' placeholder='phone number' onChange={handleChange}/></div>
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
            <button className='registration-button' onClick={registerUser}>Continue</button>
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
        <Toaster/>
    </div>
  )
}

export default Register