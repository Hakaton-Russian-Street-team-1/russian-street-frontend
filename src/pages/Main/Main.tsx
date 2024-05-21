import React, { useEffect } from 'react';
import './Main.css';
import logo from './images/logo-08.png';
import { Button } from '../../UI/Button/Button';
import { Map } from '../../components/Map/Map';
import image394 from './images/image394.png';

export function Main() {

  function generateGrayText(repeatCount: number) {
    const text = 'Кемерово '.repeat(repeatCount);
    return <span className="skate-event__text">{text}</span>;
  }

  function generateBlackText(repeatCount: number) {
    const text = 'у тебя всё получится '.repeat(repeatCount);
    return <span className="skate-event__text">{text}</span>;
  }


  return (<main className='main'>

    <div className='main__participate'>
        <div className='main__participate-container'>
          <img src={logo}/>
          <p className='main__participate-text'>Общероссийская общественная организация уличной культуры и спорта</p>
          <Button>Участвовать</Button>
        </div>
    </div>

    <div className="skate-event">
        <div className="skate-event__text-block skate-event__text-block--gray">{generateGrayText(20)}</div>
        <div className="skate-event__text-block skate-event__text-block--black">{generateBlackText(10)}</div>
    </div>

    <Map />

    <h3 className='main__title'>Мероприятия</h3>

    <div className='main__events'>
      <ul className='main__events-list list-style'>
        <li className='main__events-list-item'>Мероприятие</li>
        <li className='main__events-list-item'>Мероприятие</li>
        <li className='main__events-list-item'>Мероприятие</li>
        <li className='main__events-list-item'>Мероприятие</li>
        <li className='main__events-list-item'>Мероприятие</li>
        <li className='main__events-list-item'>Мероприятие</li>
      </ul>
      <img src={image394} className='main__events-image'/>
    </div>

  </main>)
}
