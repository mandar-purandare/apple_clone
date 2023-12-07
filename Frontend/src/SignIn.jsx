import React, { useContext, useState } from 'react'
import Header from './Header'
import './SignIn.css'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import api from './Config/Axios.config';
import { AuthContext } from './Context/Auth.context';

function SignIn() {

  const {Login} = useContext(AuthContext);

  const [user, setUser] = useState({email:'', password:''});

  function handleChange(event){
    setUser({...user, [event.target.name] : event.target.value})
  }

  const router = useNavigate();

  async function userLogin(){
    try{
          const response = await api.post('/auth/login', {...user});
          if(response.data.success){
                toast.success(response.data.message);
                Login(response.data.user);
                localStorage.setItem('apple-user', JSON.stringify(response.data.token));
                setTimeout(()=>{
                  router('/');
                },2000)
                
          }

    }catch(error){
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className='sign-in-container'>
      <Header/>
      <h2>Sign in for faster checkout.</h2>
      <h3>Sign in to Apple Store</h3>
      <div className='sign-in-email-or-phone'>
        <input type='text' placeholder='Email or Phone Number' name='email' onChange={handleChange}/>
        {/* <i class="fa-regular fa-circle-right fa-xl"></i> */}
      </div>
      <div className='sign-in-email-or-phone-password'>
        <input type='text' placeholder='Password' name='password' onChange={handleChange}/>
        <i class="fa-regular fa-circle-right fa-xl" onClick={userLogin}></i>
      </div>
      <div className='remember-me-div'>
        <input type='checkbox'/><span> Remember me</span>
      </div>
      <p className='blue-link-hover sign-in-forgot-password'>Forgotten your password? <i class="fa-solid fa-square-arrow-up-right"></i></p>
      <p className='sign-in-create-apple-id'>
        <span>Do not have an Apple ID?</span><span className='blue-link-hover' onClick={(() => {router('/register')})}> Create yours now. <i class="fa-solid fa-square-arrow-up-right"></i></span>
      </p>
      <div className='sign-in-pre-footer'>
        <p>Need some help? <span className='blue-link-hover'>Chat now</span> or call 000800 040 1966.</p>
      </div>
      <div className='sign-in-footer'>
          <p className='sign-in-encryption-and-security'>The Apple Online Store uses industry-standard encryption to protect the confidentiality of the information you submit. Learn more about our Security Policy.</p>
          <hr className='sign-in-footer-hr'/>
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
      <Toaster/>
    </div>
  )
}

export default SignIn