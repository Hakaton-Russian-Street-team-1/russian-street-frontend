import React, { useEffect, useMemo, useState } from 'react';
import './EventsGrid.css';
import testImage from '../../images/TestPhoto.svg';
import { Select } from '../../UI/Select/Select';
import { EventCard } from '../EventCard/EventCard';
import { CheckBox } from '../../UI/CheckBox/CheckBox';
import { createEvent, getEvents } from '../../utils/EventsApi/EventsApi';
import rectangle75 from './images/Rectangle75.svg';
import { EventType } from '../../types/EventType';

export function EventsGrid() {

  const  test = [1,2,3,4,5,6,7,8,9,10,11,12];

  const [ events, setEvents ] = useState<EventType | null>(null);

  useMemo(async () => {
    let res = await getEvents();
    setEvents(res);
    console.log(res);
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

        <div className="events-grid__sorting">

            <div className='region-representative'>
              <img src={rectangle75}/>
              <div className='region-representative__textarea'>
                <p className='region-representative__text'>Представитель Региона</p>
                <p className='region-representative__text'>Алена Васильева</p>
                <p className='region-representative__text'>mail: alyona@mail.ru</p>
                <p className='region-representative__text'>8-923-567-789</p>
                <p className='region-representative__text'>Офис: 16мкр, д.50, оф 216 пн-пт с 09.00-18.00</p>
              </div>
            </div>

            <fieldset className="events-grid__sorting-item">
            <CheckBox id='platforms'>Площадки</CheckBox>
            <CheckBox id='street-location'>Уличные локации</CheckBox>
            <CheckBox id='indoor location'>Крытые локации</CheckBox>
            </fieldset>

            <fieldset className="events-grid__sorting-item">
            <CheckBox id='events'>Мероприятия</CheckBox>
            <CheckBox id='competitions'>Соревнования</CheckBox>
            <CheckBox id='training'>Тренировки</CheckBox>
            <CheckBox id='master-classes'>Мастер классы</CheckBox>
            </fieldset>

            <fieldset className="events-grid__sorting-item">
            <CheckBox id='music'>Музыка</CheckBox>
            <CheckBox id='rap'>Рэп</CheckBox>
            <CheckBox id='MC-ing'>Эмсиинг</CheckBox>
            <CheckBox id='DJ-ing'>Диджеинг</CheckBox>
            </fieldset>

            <fieldset className="events-grid__sorting-item">
            <CheckBox id='sport'>Спорт</CheckBox>
            <CheckBox id='parkur'>Паркур</CheckBox>
            <CheckBox id='workout'>Воркаут</CheckBox>
            <CheckBox id='freerun'>Фриран</CheckBox>
            </fieldset>

            
            <fieldset className="events-grid__sorting-item">
            <CheckBox id='dance'>Танцы</CheckBox>
            <CheckBox id='hip-hop'>Хип-хоп</CheckBox>
            <CheckBox id='braking'>Брейкинг</CheckBox>
            <CheckBox id='toprock'>Топрок</CheckBox>
            </fieldset>

            <fieldset className="events-grid__sorting-item">
            <CheckBox id='arp'>Искусство</CheckBox>
            <CheckBox id='graffiti'>Граффити</CheckBox>
            <CheckBox id='posters'>Постеры</CheckBox>
            <CheckBox id='calligraphy'>Каллиграфия</CheckBox>
            </fieldset>

        </div>
        
              {/* Основная сетка с событиями */}
        <ul className="events-grid__list list-style">
          { events?.map((event: EventType , index:number) => (
            <EventCard id={event.id} key={event.id} title={event.title} 
            files={event.files} start_datetime={event.start_datetime}
            location={event.location}
            />
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

    </section>
  )
}
