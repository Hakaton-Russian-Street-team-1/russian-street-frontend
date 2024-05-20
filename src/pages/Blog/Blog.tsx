import React from 'react';
import './Blog.css';

export function Blog() {
  return (
    <section className='blog'>
      <div className='blog__sity'>г. Кемерово</div>
      <div className='blog__title'>Как прошёл мастер-класс по граффити с детьми 7-10 лет</div>
      <div className='blog__date'>16.05.2024</div>
      <div className='blog__image'></div>
      <div className='blog__card'>
        <div className='blog__card1'>
          {/* Ваш контент для blog__card1 */}
        </div>
        <div className='blog__card1'>
          {/* Ваш контент для второй карточки */}
        </div>
        <div className='blog__card1'>
          {/* Ваш контент для третьей карточки */}
        </div>
      </div>
      <div className='blog__card1-title'>
        <p>Открытие скейтпарка в Кемерово</p>
      </div>
      <p className='blog__card1-subtitle'>15 июня, г. Кемерово</p>
    </section>
  );
}

