import React from 'react';
import './Header.css'
import SearchIcon from '../assets/header/search.png'
import pukyLogo from '../assets/header/123.png'
import gokuLogo from '../assets/header/goku3.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpider } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
  <div className='header'>
     <div className='logoContainer'>
         <img src={pukyLogo} className='pukyLogo' alt='gokuLogo'/>
     </div>
     <div>
     <img src={gokuLogo} className='gokuLogo' alt='gokuLogo'/>

     </div>
     <div className='searchContainer'>
        <div className='searchIconContainer'>
            <img src={SearchIcon} alt='searchIcon' />
        </div>
        <input className='searchInput' placeholder='Collection,user or item..'/>
     </div>
     <div className='header-items'>
         <p>Drops</p>
         <p>Marketplace</p>
         <p>Create</p>
     </div>
     <div className='headerActions'>
        <div className='spiderContainer'>
             <FontAwesomeIcon icon={faSpider} size='2x'/>
        </div>
     </div>
     <div className='loginBtn'>GET IN</div>
  </div>
  )
};

export default Header;
