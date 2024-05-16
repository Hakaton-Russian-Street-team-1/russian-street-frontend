import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import accLogo from '../../../images/iconamoon_profile-circle-fill.svg';
import { menuProps } from './MenuProps';

export function Menu({toggleOpenMenu}: menuProps) {

  return (<nav className='menu'>
    <Link to='/' className='menu__link' onClick={toggleOpenMenu}>Главная</Link>
    <Link to='/' className='menu__link' onClick={toggleOpenMenu}>О нас</Link>
    <Link to='/events' className='menu__link' onClick={toggleOpenMenu}>Мероприятия</Link>
    <Link to='/directions' className='menu__link' onClick={toggleOpenMenu}>Направления</Link>
    <Link to='/' className='menu__link' onClick={toggleOpenMenu}>Блог</Link>
    <Link to='/' className='menu__link' onClick={toggleOpenMenu}>Контакты</Link>
    <Link to='/' className='menu__link menu__link_acc-logo' onClick={toggleOpenMenu}></Link>
  </nav>)
}