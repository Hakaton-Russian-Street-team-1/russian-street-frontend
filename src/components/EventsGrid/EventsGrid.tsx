import React, { useEffect, useMemo } from 'react';
import './EventsGrid.css';
import testImage from '../../images/TestPhoto.svg';
import { Select } from '../../UI/Select/Select';
import { EventCard } from '../EventCard/EventCard';
import { CheckBox } from '../../UI/CheckBox/CheckBox';
import { getEvents } from '../../utils/EventsApi/EventsApi';

export function EventsGrid() {

  const  test = [1,2,3,4,5,6,7,8,9,10,11,12];

  useMemo(async () => {
    // let res = await getEvents();
  }, [])

  return (
    <section className="events-grid">
      <div className="events-grid__menu">

        {/* Сортировка событий */}
        <Select options={['Выбрать регион']}/>
        <Select options={['Мероприятия']}/>
        <Select options={['Сначала популярные']}/>

      </div>

      <div className="events-grid__flex-container">

        <fieldset className="events-grid__sorting">
            <CheckBox id='platforms'>Площадки</CheckBox>
            <CheckBox id='platforms'>Уличные локации</CheckBox>
            <CheckBox id='platforms'>Крытые локации</CheckBox>
        </fieldset>

              {/* Основная сетка с событиями */}
        <ul className="events-grid__list list-style">
          {test.map(ivent => (
            <EventCard id={ivent} key={ivent}/>
          ))}
        </ul>

      </div>



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
