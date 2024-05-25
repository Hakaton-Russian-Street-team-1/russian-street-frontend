import React, { useEffect, useMemo, useState } from 'react';
import './EventsGrid.css';
import testImage from '../../images/TestPhoto.svg';
import { Select } from '../../UI/Select/Select';
import { EventCard } from '../EventCard/EventCard';
import { CheckBox } from '../../UI/CheckBox/CheckBox';
import { createEvent, getEvents } from '../../utils/EventsApi/EventsApi';
import rectangle75 from './images/Rectangle75.svg';
import { EventType } from '../../types/EventType';
import { CheckBoxPlusMinus } from '../../UI/CheckBoxPlusMinus/CheckBoxPlusMinus';
import { getCategory, getDescipline, getDesciplineById, getSubDescipline, getSubDesciplineById } from '../../utils/categoryApi/categoryApi';
import { CheckboxFieldset } from '../CheckboxFieldset/CheckboxFieldset';

export function EventsGrid() {

  const  test = [1,2,3,4,5,6,7,8,9,10,11,12];

  const [ events, setEvents ] = useState<EventType | null>(null);

  const [ disciplineId, setDisciplineId ] = useState<number[] | null>(null);
  const [ subDiscipline, setSubDiscipline ] = useState(null);

  useMemo(async () => {
    let res = await getEvents();
    setEvents(res);
    // console.log(res);
  }, [])

  useMemo(async() => {
    // let res = await getCategory()
    let res = await getDescipline();
    // let res = await getDesciplineById(1);
    let res2 = await getSubDescipline();
    setSubDiscipline(res2);
    // let res = await getSubDesciplineById(1);
    let idArray = res.map((item:{id:number}) => item.id);

    setDisciplineId(idArray);

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

            { disciplineId && disciplineId.map(id => <CheckboxFieldset disciplineId={id} subDiscipline={subDiscipline} key={id}/>)
            }
        </div>
        
              {/* Основная сетка с событиями */}
        <ul className="events-grid__list list-style">
          {/* @ts-ignore */}
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
