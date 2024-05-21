import React, { useEffect } from 'react';
import './Main.css';
import logo from './images/logo-08.png';
import { Button } from '../../UI/Button/Button';
import { Map } from '../../components/Map/Map';
import image394 from './images/image394.png';
import sponsor from './images/iconamoon_profile-circle-fill.svg';
import galery from './images/Gallery.png';
import frame1200 from './images/Frame1200.png';
import one from './images/11.png';
import two from './images/12.png';
import three from './images/21.png';
import four from './images/22.png';
import { partner1, partner2, partner3, partner4, partner5, partner6, partner7 } from './partners';
import { Link } from 'react-router-dom';
import { EventCard } from '../../components/EventCard/EventCard';



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
        
        <li className='main__events-list-item'>
          <p>Москва</p>
          <div>
            <p className='main__event-text'>Соревнования по скейтбордингу</p>
            <p className='main__event-text'>Сб. 4 ноября 2024г., 12:00</p>
            <p className='main__event-text'>Скейтпарк "Дом на колесах", (ул. Тухачевского 48Б)</p>
          </div>

          <div className='main__events-sponsors'>
              <img src={sponsor} className='main__events-sponsors-logo'/>
              <img src={sponsor} className='main__events-sponsors-logo'/>
          </div>
        </li>
       
        <li className='main__events-list-item'>
          <p>Москва</p>
          <div>
            <p className='main__event-text'>Соревнования по скейтбордингу</p>
            <p className='main__event-text'>Сб. 4 ноября 2024г., 12:00</p>
            <p className='main__event-text'>Скейтпарк "Дом на колесах", (ул. Тухачевского 48Б)</p>
          </div>

          <div className='main__events-sponsors'>
              <img src={sponsor} className='main__events-sponsors-logo'/>
              <img src={sponsor} className='main__events-sponsors-logo'/>
          </div>
        </li>
       
        <li className='main__events-list-item'>
          <p>Москва</p>
          <div>
            <p className='main__event-text'>Соревнования по скейтбордингу</p>
            <p className='main__event-text'>Сб. 4 ноября 2024г., 12:00</p>
            <p className='main__event-text'>Скейтпарк "Дом на колесах", (ул. Тухачевского 48Б)</p>
          </div>

          <div className='main__events-sponsors'>
              <img src={sponsor} className='main__events-sponsors-logo'/>
              <img src={sponsor} className='main__events-sponsors-logo'/>
          </div>
        </li>
        
        <li className='main__events-list-item'>
          <p>Москва</p>
          <div>
            <p className='main__event-text'>Соревнования по скейтбордингу</p>
            <p className='main__event-text'>Сб. 4 ноября 2024г., 12:00</p>
            <p className='main__event-text'>Скейтпарк "Дом на колесах", (ул. Тухачевского 48Б)</p>
          </div>

          <div className='main__events-sponsors'>
              <img src={sponsor} className='main__events-sponsors-logo'/>
              <img src={sponsor} className='main__events-sponsors-logo'/>
          </div>
        </li>
        
        <li className='main__events-list-item'>
          <p>Москва</p>
          <div>
            <p className='main__event-text'>Соревнования по скейтбордингу</p>
            <p className='main__event-text'>Сб. 4 ноября 2024г., 12:00</p>
            <p className='main__event-text'>Скейтпарк "Дом на колесах", (ул. Тухачевского 48Б)</p>
          </div>

          <div className='main__events-sponsors'>
              <img src={sponsor} className='main__events-sponsors-logo'/>
              <img src={sponsor} className='main__events-sponsors-logo'/>
          </div>
        </li>
      </ul>
      <img src={image394} className='main__events-image'/>
    </div>

    <Button>Участвовать</Button>

    <div className='main__gallery'/>

    <h3 className='main__title'>Направления</h3>

    <img src={frame1200} className='main__directions'/>

    <div className='main__about-us'>
        <div className='main__about-us-column'>
            <p className='main__about-us-title'>Кто мы</p>
            <p className='main__about-us-subtitle'>Миссия</p>
            <p className='main__about-us-text'>Создать условия для успешной реализации потенциала каждого ссвязанного с уличными дисциплинами и духовной профессиональный сфере</p>
            <p className='main__about-us-subtitle'>Цель</p>
            <p className='main__about-us-text'>Комплексное развитие уличной культуры и спорта. Популяризация уличных дисциплин. Создание положительного образа в информационном пространстве у дисциплин, которые считаются травмоопасными и агрессивными.</p>
            <Link to='/about-us' className='main__about-us-link'>Подробнее</Link>
        </div>

        <div className='main__about-us-galery'>
            <img src={one} className='main__about-us-galery-one'/>
            <img src={two} className='main__about-us-galery-two'/>
            <img src={three} className='main__about-us-galery-three'/>
            <img src={four} className='main__about-us-galery-four'/>
        </div>
    </div>

    <h3 className='main__title' style={{textAlign:'center', marginBottom:'0'}}>У нас понравится всем</h3>

    <div className='main__join'>
        <Button>Вступить</Button>
    </div>

    <h3 className='main__title'>Партнёры</h3>

    <div className='main__partners'>
      <img src={partner1}/>
      <img src={partner2}/>
      <img src={partner3}/>
      <img src={partner4}/>
      <img src={partner5}/>
      <img src={partner6}/>
      <img src={partner7}/>
    </div>

    <h3 className='main__title'>Блог</h3>

    <ul className='main__news list-style'>
      <EventCard id={1}/>
      <EventCard id={2}/>
      <EventCard id={3}/>
      <EventCard id={4}/>
    </ul>

    <h3 className='main__title'>Возникли вопросы?</h3>


  </main>)
}
