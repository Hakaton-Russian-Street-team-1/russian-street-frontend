import React from 'react';
import './Events.css';
import { EventsCalendar } from '../../components/EventsCalendar/EventsCalendar';

export function Events() {
  return (<section className='events'>
    <EventsCalendar />
  </section>)
}
