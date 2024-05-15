import React, { useState, useEffect } from 'react';
import './Header.css';
import { Menu } from '../Menu/Menu';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../images/Logo.svg';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export function Header() {

  const [ screenWidth,setScreenWidth ] = useState(window.innerWidth);
  const [ openMenu, setOpenMenu ] = useState(false);
  const location = useLocation();

  function toggleOpenMenu() {
    if(screenWidth <= 768) {
      setOpenMenu(!openMenu);
      if(!openMenu){
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    }
  }

  useEffect(() => {
    const handleResize = (event:any) => {
      setScreenWidth(event.target.innerWidth);
      if(screenWidth > 768) {
        setOpenMenu(false);
        document.body.classList.remove('no-scroll');
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [screenWidth])

  return (<header className='header'>
    <img className='header__logo' src={logo}/>
    { screenWidth > 768 ? <Menu /> : <MobileMenu isOpen={openMenu} toggleOpenMenu={toggleOpenMenu} />}
  </header>)
}
