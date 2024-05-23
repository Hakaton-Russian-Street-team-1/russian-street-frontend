import React from 'react';
import './Footer.css';
import FooterLogo from '../../images/footer__logo.png';
import TelegramIcon from '../../images/telegram-icon.png'; // Замените на правильные пути к вашим иконкам
import BoltIcon from '../../images/bolt-icon.png';
import PayPalIcon from '../../images/paypal-icon.png';
import YouTubeIcon from '../../images/youtube-icon.png';
import WhatsAppIcon from '../../images/whatsapp-icon.png';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <div className='footer__logo-container'>
          <img src={FooterLogo} alt='Footer Logo' />
        </div>
        <div className='footer__logo-text-container'>
          <p className='footer__logo-text'>
            Общероссийская общественная организация <br/>
            уличной культуры и спорта «Улицы России»
          </p>
          <div className='footer__logo-ogrn'>
            <p>ОГРН: 1217700519101</p>
            <p>ИНН: 2636219592</p>
          </div>
        </div>
      </div>
      <div className='footer__content'>
        <div className='footer__column footer__column-left'>
          <a href='#'>Мероприятия</a>
          <a href='#'>О нас</a>
          <a href='#'>Направления</a>
          <a href='#'>Блог</a>
          <a href='#'>Контакты</a>
        </div>
        <div className='footer__column footer__column-center'>
          <div className='support-button'>Поддержать нас</div>
          <div className='icons'>
            <img src={TelegramIcon} alt='Telegram' />
            <img src={BoltIcon} alt='Bolt' />
            <img src={PayPalIcon} alt='PayPal' />
          </div>
          <p>Служба поддержки support@mail.ru</p>
          <p>© 2021 - 2024 «Улицы России»</p>
        </div>
        <div className='footer__column footer__column-right'>
          <p>Мы в социальных сетях</p>
          <div className='social-icons'>
            <img src={YouTubeIcon} alt='YouTube' />
            <img src={TelegramIcon} alt='Telegram' />
            <img src={WhatsAppIcon} alt='WhatsApp' />
          </div>
        </div>
      </div>
    </footer>
  );
}
