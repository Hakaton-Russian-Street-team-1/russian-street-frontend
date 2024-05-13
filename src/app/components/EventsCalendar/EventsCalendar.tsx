import React from 'react';
import './EventsCalendar.css';
import { UseCalendar } from '../../hooks/UseCalendar';
import { ArrowButton } from '../../../UI/ArrowButton/ArrowButton';

export function EventsCalendar() {

    const { currentDate, setcurrentDate, prevDays, setPrevDays, nextDays, setNextDays, days, prevDaysClick, nextDaysClick } = UseCalendar();


  return (<section className='events-calendar'>
    <h3 className='events-calendar__title'>Календарь мероприятий Июнь, 2024</h3>
   
    <ul className='events-calendar__date-list list-style'>

        <ArrowButton direction='left' changeDate={prevDaysClick}/>

        {days.map(day => ( <li key={day} className='events-calendar__day'>
            {day}
        </li>
        ))}

        <ArrowButton direction='right' changeDate={nextDaysClick}/>
    </ul>
  </section>)
}
