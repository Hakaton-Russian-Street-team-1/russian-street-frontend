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
import neyro from './images/neyro.svg';
import ytlogo from './images/ytlogo.svg';
import { partner1, partner2, partner3, partner4, partner5, partner6, partner7 } from './partners';
import { Link } from 'react-router-dom';
import { EventCard } from '../../components/EventCard/EventCard';
import { CheckBox } from '../../UI/CheckBox/CheckBox';



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

    <div className='main__neyro'></div>

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
            <p className='main__about-us-text'>Создать условия для успешной реализации потенциала каждого ссвязанного с уличными дисциплинами и духовной профессиональный сфере</p>
            <p className='main__about-us-subtitle'>Цель</p>
            <p className='main__about-us-text'>Комплексное развитие уличной культуры и спорта. Популяризация уличных дисциплин. Создание положительного образа в информационном пространстве у дисциплин, которые считаются травмоопасными и агрессивными.</p>
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

    <div className='main__application'>

      <div>
        <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aba31cfe28fe4a1d9077cb197a0dabea6ad54e5cc9ea6b9c9484e23d10e21346c&amp;source=constructor"
        width="490px"
        height="500"
        frameBorder="0"
        style={{ border: 0 }} // добавляем стиль без рамки, чтобы убрать рамку вокруг iframe
        allowFullScreen // если хотите разрешить полноэкранный режим
        aria-hidden="false"
        tabIndex={0}></iframe>
        <p>Офис в Москве: Малая Московская,11, д 5/4</p>
        <p>ПН-ПТ с 09:00-18:00</p>
        <p>8-800-550-5050</p>
        <p>info@streetrussia.ru</p>
        <Link to="#"><img src={ytlogo} /></Link>
        <Link to="#"><img src={ytlogo} /></Link>
      </div>
      <div className='main__application-form'>
        <p className='main__application-form-title'>Оставьте заявку</p>
        <p className='main__application-form-input-name'>Имя*</p>
        <input placeholder='Имя' className='main__application-form-input'></input>
        <div className='main__application-form-container'>
          <label>
            <p className='main__application-form-input-name'>Телефон*</p>
            <input placeholder='Телефон' type='tel' id="phone" name="phone" className='main__application-form-input' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input>
          </label>
          
          <label>
            <p className='main__application-form-input-name'>Почта</p>
            <input placeholder='Почта' type='email' className='main__application-form-input'></input>
          </label>
          
        </div>

        <p className='main__application-form-input-name'>Сообщение</p>
        <textarea  placeholder='Напишите сообщение' className='main__application-form-input'></textarea>

        <div className='main__application-form-checkboxes'>
         <CheckBox id={'agreement-with-rights'}>Я согласен с правами о обязанностями ОООУКС "Улицы России"</CheckBox>
         <CheckBox id={'agreement-with-personal-info'}>Я согласен на обработку персональных данных</CheckBox>
        </div>

        <Button>Участвовать</Button>
      </div>

      
    </div>

  </main>)
}
