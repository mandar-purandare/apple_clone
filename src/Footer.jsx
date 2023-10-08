import React from 'react'
import './Footer.css'

function Footer() {
  const listTitles = ['Shop and Learn','Apple Wallet','Account','Entertainment','Apple Store','For Business','For Education', 'For Healthcare','Apple Values','About Apple'];

  const listItems = [['Store','Mac','iPad','iPhone','Watch','AirPods','TV & Home','AirTag','Accessories','Gift Cards'],  ['Wallet'],['Manage Your Apple ID','Apple Store Account','iCloud.com'],['Apple One','Apple TV+','Apple Music','Apple Arcade','Apple Podcasts','Apple Books','App Store'],['Find a Store','Genius Bar','Today at Apple','Apple Camp','Apple Trade In','Ways to Buy','Recycling Programme','Order Status','Shopping Help'],['Apple and Business','Shop for Business'],['Apple and Education','Shop for Education','Shop for University'],['Apple in Healthcare','Health on Apple Watch'],['Accessibility','Education','Environment','Privacy','Supplier Responsiblity'],['Newsroom','Apple Leadership','Career Opportunities','Investors','Ethics & Complaince','Events','Contact Apple']]
  return (
    <div className='footer-container'>
      <p className='footer-text'>
          *Instant savings, otherwise referred to as instant cashback on the Apple Store Online, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001.00 applies. <span className='bold-and-underline'>Click here</span> to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. <span className='bold-and-underline'>Terms and conditions</span> apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.
      </p><br/>
      <p className='footer-text'>A subscription is required for Apple TV+.</p>
      <hr className='footer-hr-1'/>
      <div className='footer-lists-container'>
        {
          listTitles.map((title,i) => <div className='footer-single-list-container'><h5>{title}</h5>{listItems[i].map(item => <p>{item}</p>)}</div>)
        }
      </div>
      <br/>
      <p className='footer-text'>More ways to shop: <span className='blue-link'>Find an Apple Store</span> or <span className='blue-link'>other retailer</span> near you. Or call 000800 040 1966.</p>
      <hr className='footer-hr-1'/>
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
      <br/>
    </div>
  )
}

export default Footer