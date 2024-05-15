import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import accLogo from '../../../images/iconamoon_profile-circle-fill.svg';

export function Menu() {

  return (<nav className='menu'>
    <Link to='/' className='menu__link'>Главная</Link>
    <Link to='/' className='menu__link'>О нас</Link>
    <Link to='/events' className='menu__link'>Мероприятия</Link>
    <Link to='/' className='menu__link'>Направления</Link>
    <Link to='/' className='menu__link'>Блог</Link>
    <Link to='/' className='menu__link'>Контакты</Link>
    <Link to='/' className='menu__link menu__link_acc-logo'></Link>
  </nav>)
}
