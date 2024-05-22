import React from 'react';
import './Blog.css';
import Blogmain from '../../images/Blogmain.png';
import Blogman from '../../images/BlogMan.png';
import BlogSkatebig from '../../images/BlogSkatebig.png';
import Blogskatesmall from '../../images/Blogskatesmall.png';
import blogskatemedium from '../../images/skatemedium.png';


export function Blog() {
  return (
    <section className="blog">
      <div className="blog__city">г. Кемерово</div>
      <div className="blog__title">Как прошёл мастер-класс по граффити с детьми 7-10 лет</div>
      <div className="blog__date">16.05.2024</div>
      <div className="blog__image">
        <img src={Blogmain} alt="Graffiti workshop" />
      </div>

      <div className="blog__card">
        <div className="blog__card-item blog__card1--large">
          <div className="blog__card1">
            <img src={BlogSkatebig} alt="Skatepark opening" className="blog__image-content" />
          </div>
          <div className="blog__card1-title">
            <p>Открытие скейтпарка в Кемерово</p>
          </div>
          <p className="blog__card1-subtitle">15 июня, г. Кемерово</p>
        </div>
        <div className="blog__card-item blog__card1--small">
          <div className="blog__card1">
            <img src={Blogskatesmall} alt="Skatepark opening" className="blog__image-content" />
          </div>
          <div className="blog__card1-title">
            <p>Открытие скейтпарка в Кемерово</p>
          </div>
          <p className="blog__card1-subtitle">15 июня, г. Кемерово</p>
        </div>
        <div className="blog__card-item blog__card1--small">
          <div className="blog__card1">
            <img src={Blogskatesmall} alt="Skatepark opening" className="blog__image-content" />
          </div>
          <div className="blog__card1-title">
            <p>Открытие скейтпарка в Кемерово</p>
          </div>
          <p className="blog__card1-subtitle">15 июня, г. Кемерово</p>
        </div>
      </div>

      <div className="blog__card">
        <div className="blog__card-item blog__card2--large">
          <div className="blog__card2">
            <img src={Blogman} alt="Card 2 image 1" className="blog__image-content" />
          </div>
        </div>
        <div className="blog__card-item blog__card2--medium">
          <div className="blog__card2">
            <img src={blogskatemedium}  alt="Card 2 image 2" className="blog__image-content" />
          </div>
          <div className="blog__card2-title">
            <p>Событие в Кемерово</p>
          </div>
          <p className="blog__card2-subtitle">20 июня, г. Кемерово</p>
        </div>
        <div className="blog__card-item blog__card2--medium">
          <div className="blog__card2">
            <img src={blogskatemedium}  alt="Card 2 image 3" className="blog__image-content" />
          </div>
          <div className="blog__card2-title">
            <p>Событие в Кемерово</p>
          </div>
          <p className="blog__card2-subtitle">20 июня, г. Кемерово</p>
        </div>
      </div>
      <div className="blog__card">
        <div className="blog__card-item blog__card1--large">
          <div className="blog__card1">
            <img src={BlogSkatebig} alt="Skatepark opening" className="blog__image-content" />
          </div>
          <div className="blog__card1-title">
            <p>Открытие скейтпарка в Кемерово</p>
          </div>
          <p className="blog__card1-subtitle">15 июня, г. Кемерово</p>
        </div>
        <div className="blog__card-item blog__card1--small">
          <div className="blog__card1">
            <img src={Blogskatesmall} alt="Skatepark opening" className="blog__image-content" />
          </div>
          <div className="blog__card1-title">
            <p>Открытие скейтпарка в Кемерово</p>
          </div>
          <p className="blog__card1-subtitle">15 июня, г. Кемерово</p>
        </div>
        <div className="blog__card-item blog__card1--small">
          <div className="blog__card1">
            <img src={Blogskatesmall}  alt="Skatepark opening" className="blog__image-content" />
          </div>
          <div className="blog__card1-title">
            <p>Открытие скейтпарка в Кемерово</p>
          </div>
          <p className="blog__card1-subtitle">15 июня, г. Кемерово</p>
        </div>
      </div>

    </section>
  );
}