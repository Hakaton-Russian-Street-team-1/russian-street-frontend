import React from 'react';
import './EventsGrid.css';
import testImage from '../../images/TestPhoto.svg';
import { Select } from '../../UI/Select/Select';

export function EventsGrid() {

  const  test = [1,2,3,4,5,6,7,8,9,10,11,12];

  return (
    <section className="events-grid">
      <div className="events-grid__menu">

        {/* Сортировка событий */}

        <Select options={['Выбрать город']}/>
        <Select options={['События']}/>

      </div>

      {/* Основная сетка с событиями */}
      <ul className="events-grid__list list-style">
        {test.map(ivent => (
          <li key={ivent} className="events-grid__ivent">
            <img src={testImage} className="events-grid__image" />
            <p className="events-grid__title">Открытие скейтпарка в Кемерово</p>
            <p className="events-grid__subtitle">15 июня, г. Кемерово</p>
          </li>
        ))}
      </ul>

      {/* Сетка событий с блоком анимации   */}
      <ul className="events-grid__list_type_animaton list-style">

        <li className="events-grid__ivent">
            <img src={testImage} className="events-grid__image" />
            <p className="events-grid__title">Открытие скейтпарка в Кемерово</p>
            <p className="events-grid__subtitle">15 июня, г. Кемерово</p>
        </li>

        <li className="events-grid__ivent_type_animation">

        </li>

        <li className="events-grid__ivent">
            <img src={testImage} className="events-grid__image" />
            <p className="events-grid__title">Открытие скейтпарка в Кемерово</p>
            <p className="events-grid__subtitle">15 июня, г. Кемерово</p>
        </li>
      </ul>

      {/* Карточка события в виде альбома */}
      <div className="events-grid__ivent events-grid__ivent_type_album">
            <img src={testImage} className="events-grid__image" />
            {/* Тут будет фоновая фотография а пока просто чёрный div */}
            <div className="events-grid__background-image"/>
            <p className="events-grid__title">Открытие скейтпарка в Кемерово</p>
            <p className="events-grid__subtitle">15 июня, г. Кемерово</p>
      </div>


    </section>
  )
}
