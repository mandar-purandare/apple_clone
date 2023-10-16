import React, { useState } from 'react'
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navItems = [<i class="fa-brands fa-apple fa-xl"></i>,'Store','Mac','iPad','iPhone','Watch','AirPods','TV & Home','Entertainment','Accessories',
                      'Support','search', <i class="fa-solid fa-bag-shopping fa-xl"></i>];

    const router = useNavigate();

    const [opacity, setOpacity] = useState('');

    function goTo(items){

      if(typeof items === 'object'){
        if(items.props.class === 'fa-brands fa-apple fa-xl'){
          setOpacity(opacity => opacity ='');
          router('/');
        }
        if(items.props.class === 'fa-solid fa-bag-shopping fa-xl'){
          setOpacity(opacity => opacity ='transparent');
          router('/signin');
        }
      }
      if(typeof items === 'string'){
        let path = items.toLowerCase();
        if(path === 'store'){
          setOpacity(opacity => opacity ='transparent');
        }
        router('/'+ path);
      }
    }

  return (
    <div className='header-container'>
      <nav className={opacity}>
        {navItems.map(items => <div onClick={() => goTo(items)}>{items}</div>)}
      </nav>
    </div>
  )
}

export default Header