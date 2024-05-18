import React from 'react';
import { Slider } from '../../components/Slyder/Slider';
import './SkateboardEventPage.css';
import img from '../../images/cat.jpeg';

export function SkateboardEventPage() {
    
    return (
        <> 
        <Slider />
        <section className='skate-event'>
            <div className='skate-event__text-block skate-event__text-block--gray'>
                {generateGrayText(20)} {/* Текст "Кемерово" повторится 5 раз */}
            </div>
            <div className='skate-event__text-block skate-event__text-block--black'>
                {generateBlackText(10)} {/* Текст "В другом у тебя всё получится" повторится 3 раза */}
            </div>
        </section>
        
        <section className="template">
    <div className='template__text'>
        <p className='template__title'> Описание </p>
        <p className='template__description'>
            -Экстремальные состязания пройдут в обычном зачете для всех, а также выделена отдельно детская номинация;
            - Мастер-классы и показательные выступления от сборной России по скейтборду, Центра экстремального спорта «Спортэкс» г. Красноярск;
            - Крутые призы и подарки от партнеров.
        </p>
        <p className='template__time'> 
            И так, встречаемся: 
            4 ноября 2023 года; 
            12:00 часов; 
            Скейт-парк «Дом на колесах», 
            (ул. Тухачевского 48Б).
        </p>
        <p className='template__org'> Организаторы: Федерация скейтбординга Кузбасса и скейт-парк «Дом на колесах».</p>
        <p className='template__meet'> С собой берем свое транспортное средство, заряд энергии и хорошее настроение</p>
        <p className='template__question'> Задать вопрос организаторам: </p>
    </div>
    <div className='template__card'>
        <img src={img} className='template__image' alt="Description of the image" />
        <p className='template__card-subtitle'>Представитель Региона</p>
        <p className='template__card-description'>Алена Васильева </p>
        <p className='template__card-description'>mail: alyona@mail.ru</p>
        <p className='template__card-description'>8-923-567-789</p>
        <p className='template__card-office'>Офис: 16мкр, д.50, оф 216 пн-пт с 09.00-18.00</p>
    </div>
</section>

      </>
    );
}



function generateGrayText(repeatCount: number) {
    const text = 'Кемерово '.repeat(repeatCount);
    return (
        <span className='skate-event__text'>
            {text}
        </span>
    );
}

function generateBlackText(repeatCount: number) {
    const text = 'у тебя всё получится '.repeat(repeatCount);
    return (
        <span className='skate-event__text'>
            {text}
        </span>
    );
}
