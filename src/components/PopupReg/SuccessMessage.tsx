import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessMessage.css';
import ClosePopupBtn from '../../images/closepopupbtn.svg';
import { Popuplogin } from '../PopupLogin/Popuplogin';

interface SuccessMessageProps {
  onLoginClick: () => void;
  onHomeClick: () => void;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ onLoginClick, onHomeClick }) => {
  const navigate = useNavigate();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(true);

  const handleLoginClick = () => {
    setIsLoginPopupOpen(true);
    setIsMessageVisible(false);
    onLoginClick(); // Close the registration popup
  };

  const handleHomeClick = () => {
    setIsMessageVisible(false);
    navigate('/');
    onHomeClick(); // Close the registration popup
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
    setIsMessageVisible(true);
  };

  const closeMessagePopup = () => {
    setIsMessageVisible(false);
    onHomeClick(); // Close the registration popup
  };

  return (
    <>
      {isMessageVisible && (
        <div className={`SuccessMessage__overlay ${isMessageVisible ? 'SuccessMessage__overlay_active' : ''}`}>
          <div className="SuccessMessage">
            <h2>Спасибо! Мы получили ваши данные и уже начали обработку :)</h2>
            <p>После модерации вашей заявки на вашу почту придёт письмо с логином и паролем</p>
            <div className="SuccessMessage__buttons">
              <button onClick={handleLoginClick} className="SuccessMessage__button">ВОЙТИ</button>
              <button onClick={handleHomeClick} className="SuccessMessage__button">НА ГЛАВНУЮ</button>
            </div>
            <p className="SuccessMessage__support">Если вы не получили письмо свяжитесь со службой поддержки support@mail.ru.</p>
            <button onClick={closeMessagePopup} className="SuccessMessage__close-button">
              <img src={ClosePopupBtn} alt='Close' />
            </button>
          </div>
        </div>
      )}
      <Popuplogin isOpen={isLoginPopupOpen} closePopup={closeLoginPopup} />
    </>
  );
};