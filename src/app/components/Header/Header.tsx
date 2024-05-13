import React from 'react';
import './Header.css';
import { Menu } from '../Menu/Menu';
import logo from '../../../images/Logo.svg';
export function Header() {
  return (<header className='header'>
    <img src={logo}/>
    < Menu />
  </header>)
}
