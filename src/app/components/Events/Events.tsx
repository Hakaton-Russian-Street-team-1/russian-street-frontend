import React from 'react';
import './Events.css';
import { EventsCalendar } from '../EventsCalendar/EventsCalendar';

export function Events() {
  return (<section className='events'>
    <EventsCalendar />
  </section>)
}
