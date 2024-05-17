import React from 'react';
import './Directions.css';
import dirImage from './images/Group16.svg';
import frame from './images/Frame819.svg';
import group18 from './images/Group18.svg';
import rectangle from './images/Rectangle60.svg';
import rectangleArt from './images/rectangle_art.svg';
import art from './images/Iskusstvo.svg';

export function Directions() {


  return (<section className='directions'>
    <img src={dirImage} className='directions__image'/>
    <img src={frame} className='directions__frame'/>
    
    <div className='direction-card'>
    <h3 className='direction-card__title'>Спорт</h3>
    <p className='direction-card__subtitle'>Текст про спорт</p>
    <img className='direction-card__slider'/>

    <div className='direction-card__group'>
      <img src={group18} className='direction-card__animation'/>
      <p className='direction-card__text'>А так же: Бмх стрит, бмх флэт, скут, стритбол, лонгбордиг, джимбар, фрибар, дрифт, драг, стант, панна, МТВ, агрессив верт, агрессив стрит, стритбординг, слэклан, триклайн, хайлайн </p>
    </div>

    </div>

    <div className='direction-card'>
    <h3 className='direction-card__title'>Музыка</h3>
    <p className='direction-card__subtitle'>Текст про музыку</p>

    <div className='direction-card__group'>
      <img src={group18} className='direction-card__animation'/>
      <p className='direction-card__text'>А так же: тёрнтеблизм, битмеёкинг, битбокс</p>
    </div>

    <img className='direction-card__slider'/>
    </div>
    
    <div className='direction-card'>
    <img src={rectangle} className='direction-card__animation'/>
   
      <div className='direction-card__group'>
        <h3 className='direction-card__title'>Танцы</h3>
        <p className='direction-card__subtitle'>Текст про танцы</p>
        <p className='direction-card__text'>А так же: дабстеп, электро, локинг, поппинг, хаус, фанк, р'n'б</p>
      </div>

    </div>

    <div className='direction-card'>
    <h3 className='direction-card__title'>Искусство</h3>
    <p className='direction-card__subtitle'>Текст про исскуство</p>

      <img src={rectangleArt} className='direction-card__animation'/>
    <div className='direction-card__group'>
      <img src={art} className='direction-card__animation'/>
      <p className='direction-card__text'>А так же:трафареты, скульптурные инсталляции</p>
    </div>
    </div>
    
  </section>)
}
