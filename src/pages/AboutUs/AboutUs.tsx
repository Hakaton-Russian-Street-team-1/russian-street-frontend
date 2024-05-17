import React from 'react';
import './AboutUs.css';
import img from './images/ima.png';

export function AboutUs() {


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

  
    
  </section>)
}
