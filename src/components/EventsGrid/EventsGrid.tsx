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
import { getCity, getRegion } from '../../utils/RegionsApi/RegionsApi';
import { RegionType } from '../../types/RegionType';

export function EventsGrid() {

  const  test = [1,2,3,4,5,6,7,8,9,10,11,12];

  const [ events, setEvents ] = useState<EventType | null>(null);

  const [ disciplineId, setDisciplineId ] = useState<number[] | null>(null);
  const [ subDiscipline, setSubDiscipline ] = useState(null);
  const [ regionList, setRegionList ] = useState<string[] | null>(null)
  const [ cityList, setCityList ] = useState<string[] | null>(null)
  const [directions, setDirections] = useState<string[] | null>(null);

  useMemo(async() => {

    let desciplineRes = await getDescipline();
    const descipline = desciplineRes.map((item:any) => item.name);
    console.log(descipline)
    setDirections(descipline);

    let subDiscipline = await getSubDescipline();
    setSubDiscipline(subDiscipline);
    let idArray = desciplineRes.map((item:{id:number}) => item.id);
    setDisciplineId(idArray);


    let events = await getEvents();
    setEvents(events);

    let regionsRes = await getRegion();
    const regions = regionsRes.map((item:RegionType) => item.name);
    setRegionList(regions);
    
    let cityRes = await getCity();
    const cities = cityRes.map((item:RegionType) => item.name);
    setCityList(cities);

  }, [])

  return (
    <section className="events-grid">
      <div className="events-grid__menu">

        {/* Сортировка событий */}
        <Select defaultOption={'Выбрать регион'} options={regionList}/>
        <Select defaultOption={'Выбрать город'} options={cityList}/>
        <Select defaultOption={'Направление'} options={directions}/>
        <Select defaultOption={'Сначала популярные'} options={['Сначала новые']}/>

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
