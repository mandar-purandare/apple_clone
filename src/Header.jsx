import React from 'react'
import './Header.css';

function Header() {
    const navItems = ['logo','Store','Mac','iPad','iPhone','Watch','AirPods','TV & Home','Entertainment','Accessories',
                      'Support','search','bag'];
  return (
    <div className='header-container'>
      <nav>
        {navItems.map(items => <div>{items}</div>)}
      </nav>
    </div>
  )
}

export default Header