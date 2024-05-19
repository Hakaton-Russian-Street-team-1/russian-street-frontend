import React from "react";
import testImage from '../../images/TestPhoto.svg';
import { EventCardProps } from "./EventCardProps";
import './EventCard.css';

export function EventCard({ id } : EventCardProps) {

    return (
          <li className="event-card__ivent">
            <img src={testImage} className="events-card__image" />
            <p className="event-card__title">Открытие скейтпарка в Кемерово</p>
            <p className="event-card__subtitle">15 июня, г. Кемерово</p>
          </li>
    )
}
