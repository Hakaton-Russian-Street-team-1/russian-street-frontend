import React from 'react';
import './AboutUs.css';
import img from './images/ima.png';
import rectangle60 from './images/Rectangle60.svg';
import frame885 from './images/Frame885.svg'
import image309 from './images/image309.svg';
import innumber from './images/innumbers.svg';
import partner from './images/partner.svg';
import { Select } from '../../UI/Select/Select';
import { EventCard } from '../../components/EventCard/EventCard';

export function AboutUs() {

  const  test = [1,2,3,4];

  return (<section className='about-us'>

    <div className='about-us__join'>

        <div className='about-us__column'>
          <p className='about-us__column-title'>Стань частью улиц</p>
          <button className='about-us__join-button'>Участвовать</button>
        </div>

        <div className='about-us__column'>
        <img src={img} className='about-us__image'/>
        </div>

    </div>

    <p className='about-us__text'>МЫ Родились из уличных дисциплин. Каждый, кто начинал тренироваться на улице, находил себе новые знакомства, дружбу, окружение, которое помогало развивать свои сильные стороны.
Эта история про пацанов и девчонок, которые воспринимают улицу как свой дом и находят там смысл жизни.</p>

    <div className='about-us__values'>
      <img src={rectangle60}/>
      <div className='about-us__values-column'>
        <img src={frame885} />
        <p className='about-us__values-text'>Наша миссия создать условия для успешной реализации потенциала каждого ссвязанного с уличными дисциплинами и духовной профессиональный сфере.</p>
      </div>
    </div>

    <h3 className='about-us__title'>Команда</h3>

    <div className='about-us__team'>

      <ul className='about-us__members-list list-style'>
          <li className='about-us__member'>Дмитрий Иванов</li>
          <li className='about-us__member'>Дмитрий Иванов</li>
          <li className='about-us__member'>Дмитрий Иванов</li>
          <li className='about-us__member'>Дмитрий Иванов</li>
          <li className='about-us__member'>Дмитрий Иванов</li>
          <li className='about-us__member'>Дмитрий Иванов</li>
      </ul>

      <div className='about-us__about-columns'>
        <div className='about-us__about-column'>
          <Select options={['Федеральная', 'Региональная']} whiteTheme={true}/>
          <p className='about-us__member-name'>Валентин Работенко</p>
          <p className='about-us__about-member'>Руководитель регионального отделения ОООУКС «Улицы России» Белгородской области
          Специалист по работе с молодежью центра добровольчества Белгородского ГАУ</p>
        </div>
        <img src={image309} className='about-us__member-photo'/>
      </div>

    </div>

    <img src={innumber}/>

    <div className='partners'>

      <div className='partners__table'>
          <div className='partners__column'>
            <h6 className='partners__title'>Генеральные партнёры</h6>

            <div className='partners__partner'>
              <img src={partner} className='partners__partner-image'/>
              <div className='partners__about-partner'>
                <div className='partners__textarea'>
                  <p className='partners__about-partner-text'>Фонд президентских грантов является единым оператором государственной поддержки некоммерческих неправительственных организаций в Российской Федерации с 3 апреля 2017 года</p>
                  <p className='partners__about-partner-text'>Совместные проекты: скейдборд соревнования “МЫ”, конкурс паркура “ДОСКА” </p>
                </div>
              </div>
            </div>
            

            <div className='partners__partner'>
              <img src={partner} className='partners__partner-image'/>
              <div className='partners__about-partner'>
                <div className='partners__textarea'>
                  <p className='partners__about-partner-text'>Фонд президентских грантов является единым оператором государственной поддержки некоммерческих неправительственных организаций в Российской Федерации с 3 апреля 2017 года</p>
                  <p className='partners__about-partner-text'>Совместные проекты: скейдборд соревнования “МЫ”, конкурс паркура “ДОСКА” </p>
                </div>
              </div>
            </div>

          </div>

          <div className='partners__column'>
            <h6 className='partners__title'>Стратегические партнёры</h6>

            <div className='partners__partner'>
              <img src={partner} className='partners__partner-image'/>
              <div className='partners__about-partner'>
                <div className='partners__textarea'>
                  <p className='partners__about-partner-text'>Фонд президентских грантов является единым оператором государственной поддержки некоммерческих неправительственных организаций в Российской Федерации с 3 апреля 2017 года</p>
                  <p className='partners__about-partner-text'>Совместные проекты: скейдборд соревнования “МЫ”, конкурс паркура “ДОСКА” </p>
                </div>
              </div>
            </div>


            <div className='partners__partner'>
              <img src={partner} className='partners__partner-image'/>
              <div className='partners__about-partner'>
                <div className='partners__textarea'>
                  <p className='partners__about-partner-text'>Фонд президентских грантов является единым оператором государственной поддержки некоммерческих неправительственных организаций в Российской Федерации с 3 апреля 2017 года</p>
                  <p className='partners__about-partner-text'>Совместные проекты: скейдборд соревнования “МЫ”, конкурс паркура “ДОСКА” </p>
                </div>
              </div>
            </div>

          </div>
      </div>

      <div className='partners__table'>
        <div className='partners__column'>
          <h6 className='partners__title'>Организационные партнёры</h6>
          <div className='partners__partner'>
              <img src={partner} className='partners__partner-image'/>
              <div className='partners__about-partner'>
                <div className='partners__textarea'>
                  <p className='partners__about-partner-text'>Фонд президентских грантов является единым оператором государственной поддержки некоммерческих неправительственных организаций в Российской Федерации с 3 апреля 2017 года</p>
                  <p className='partners__about-partner-text'>Совместные проекты: скейдборд соревнования “МЫ”, конкурс паркура “ДОСКА” </p>
                </div>
              </div>
            </div>
        </div>

        <div className='partners__column'>
          <h6 className='partners__title' style={{color:'white'}}>Организационные партнёры</h6>
          <div className='partners__partner'>
              <img src={partner} className='partners__partner-image'/>
              <div className='partners__about-partner'>
                <div className='partners__textarea'>
                  <p className='partners__about-partner-text'>Фонд президентских грантов является единым оператором государственной поддержки некоммерческих неправительственных организаций в Российской Федерации с 3 апреля 2017 года</p>
                  <p className='partners__about-partner-text'>Совместные проекты: скейдборд соревнования “МЫ”, конкурс паркура “ДОСКА” </p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className='partners__table'>
        <div className='partners__column'>
          <h6 className='partners__title'>Региональные партнёры</h6>
          <div className='partners__partner'>
              <img src={partner} className='partners__partner-image'/>
              <div className='partners__about-partner'>
                <div className='partners__textarea'>
                  <p className='partners__about-partner-text'>Фонд президентских грантов является единым оператором государственной поддержки некоммерческих неправительственных организаций в Российской Федерации с 3 апреля 2017 года</p>
                  <p className='partners__about-partner-text'>Совместные проекты: скейдборд соревнования “МЫ”, конкурс паркура “ДОСКА” </p>
                </div>
              </div>
            </div>
            <div className='partners__partner'>
              <img src={partner} className='partners__partner-image'/>
              <div className='partners__about-partner'>
                <div className='partners__textarea'>
                  <p className='partners__about-partner-text'>Фонд президентских грантов является единым оператором государственной поддержки некоммерческих неправительственных организаций в Российской Федерации с 3 апреля 2017 года</p>
                  <p className='partners__about-partner-text'>Совместные проекты: скейдборд соревнования “МЫ”, конкурс паркура “ДОСКА” </p>
                </div>
              </div>
            </div>
        </div>

        <div className='partners__column'>
          <h6 className='partners__title'  style={{color:'white'}}>Региональные партнёры</h6>
          <div className='partners__partner'>
              <img src={partner} className='partners__partner-image'/>
              <div className='partners__about-partner'>
                <div className='partners__textarea'>
                  <p className='partners__about-partner-text'>Фонд президентских грантов является единым оператором государственной поддержки некоммерческих неправительственных организаций в Российской Федерации с 3 апреля 2017 года</p>
                  <p className='partners__about-partner-text'>Совместные проекты: скейдборд соревнования “МЫ”, конкурс паркура “ДОСКА” </p>
                </div>
              </div>
            </div>
            <div className='partners__partner'>
              <img src={partner} className='partners__partner-image'/>
              <div className='partners__about-partner'>
                <div className='partners__textarea'>
                  <p className='partners__about-partner-text'>Фонд президентских грантов является единым оператором государственной поддержки некоммерческих неправительственных организаций в Российской Федерации с 3 апреля 2017 года</p>
                  <p className='partners__about-partner-text'>Совместные проекты: скейдборд соревнования “МЫ”, конкурс паркура “ДОСКА” </p>
                </div>
              </div>
            </div>
        </div>
      </div>


      <h3 className='about-us__title'>Новости</h3>

      <div className='about-us__news-list list-style'>
      {test.map(card => <EventCard id = {card} key={card}/>)}
      </div>

    </div>
    
  </section>)
}
