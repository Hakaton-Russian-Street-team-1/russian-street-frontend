import React, { useEffect } from 'react';
import './Personalacc.css';
import profilePhoto from '../../images/profile.svg';
import CardEvent from '../../images/cardevent.png';
import { getToken } from '../../utils/token';

export const Personal: React.FC = () => {
    useEffect(() => {
        const token = getToken();
        if (token) {
            console.log('Токен авторизации:', token);
        } else {
            console.log('Токен не найден');
        }
    }, []);

    return (
        <div className='personal'>
            <div className='personal__sidebar'>
                <img src={profilePhoto} alt="profile" className="personal__profile-photo" />
                <p className="personal__sidebar-text">Иванов Иван Иванович</p>
                <a href="#my-events" className="personal__sidebar-link">Мои мероприятия</a>
                <a href="#event-history" className="personal__sidebar-link">История мероприятий</a>
                <a href="#settings" className="personal__sidebar-link">Настройки</a>
                <a href="#support" className="personal__sidebar-link">Служба поддержки</a>
            </div>
            <div className='personal__content'>
                <div className='personal__header'>
                    <h1>Мои мероприятия</h1>
                    <select className='personal__header-select'>
                        <option>Я участник</option>
                        <option>Я организатор</option>
                    </select>
                </div>
                <div className='personal__cards'>
                    <div className='personal__card'>
                        <img src={CardEvent} alt="event" />
                        <p className='personal__card-text'>Открытие скейпарка в Кемерово</p>
                        <p className='personal__card-text'>15 июня, г. Кемерово</p>
                    </div>
                    <div className='personal__card'>
                        <img src={CardEvent} alt="event" />
                        <p className='personal__card-text'>Открытие скейпарка в Кемерово</p>
                        <p className='personal__card-text'>15 июня, г. Кемерово</p>
                    </div>
                    <div className='personal__card'>
                        <img src={CardEvent} alt="event" />
                        <p className='personal__card-text'>Открытие скейпарка в Кемерово</p>
                        <p className='personal__card-text'>15 июня, г. Кемерово</p>
                    </div>
                </div>
                <div className='personal__buttons'>
                    <button className='personal__button-event'>Каталог мероприятий</button>
                    <button className='personal__button-create'>Создать</button>
                </div>
                <div className='personal__viewed-section'>
                    <h2 className='personal__viewed-title'>ВЫ СМОТРЕЛИ:</h2>
                    <div className='personal__viewed-cards'>
                        <div className='personal__card'>
                            <img src={CardEvent} alt="event" />
                            <p className='personal__card-text'>Открытие скейпарка в Кемерово</p>
                            <p className='personal__card-text'>15 июня, г. Кемерово</p>
                        </div>
                        <div className='personal__card'>
                            <img src={CardEvent} alt="event" />
                            <p className='personal__card-text'>Открытие скейпарка в Кемерово</p>
                            <p className='personal__card-text'>15 июня, г. Кемерово</p>
                        </div>
                        <div className='personal__card'>
                            <img src={CardEvent} alt="event" />
                            <p className='personal__card-text'>Открытие скейпарка в Кемерово</p>
                            <p className='personal__card-text'>15 июня, г. Кемерово</p>
                        </div>
                        <div className='personal__card'>
                            <img src={CardEvent} alt="event" />
                            <p className='personal__card-text'>Открытие скейпарка в Кемерово</p>
                            <p className='personal__card-text'>15 июня, г. Кемерово</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
