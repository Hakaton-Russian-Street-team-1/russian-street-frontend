import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import Blogmain from '../../images/Blogmain.png';
import Blogman from '../../images/BlogMan.png';
import BlogSkatebig from '../../images/BlogSkatebig.png';
import Blogskatesmall from '../../images/Blogskatesmall.png';
import blogskatemedium from '../../images/skatemedium.png';

interface NewsItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  size: 'large' | 'medium' | 'small';
}

export function Blog() {
  const [showNews, setShowNews] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: 1,
      title: 'Открытие скейтпарка в Кемерово',
      subtitle: '15 июня, г. Кемерово',
      date: '2024-06-15',
      image: BlogSkatebig,
      size: 'large'
    },
    {
      id: 2,
      title: 'Мастер-класс по граффити',
      subtitle: '16 мая, г. Кемерово',
      date: '2024-05-16',
      image: Blogskatesmall,
      size: 'small'
    },
    {
      id: 3,
      title: 'Событие в Кемерово',
      subtitle: '20 июня, г. Кемерово',
      date: '2024-06-20',
      image: blogskatemedium,
      size: 'small'
    },
    {
      id: 4,
      title: 'Открытие скейтпарка в Кемерово',
      subtitle: '15 июня, г. Кемерово',
      date: '2024-06-15',
      image: Blogman,
      size: 'large'
    },
    {
      id: 5,
      title: 'Мастер-класс по граффити',
      subtitle: '16 мая, г. Кемерово',
      date: '2024-05-16',
      image: blogskatemedium,
      size: 'medium'
    },
    {
      id: 6,
      title: 'Событие в Кемерово',
      subtitle: '20 июня, г. Кемерово',
      date: '2024-06-20',
      image: blogskatemedium,
      size: 'medium'
    },
    {
      id: 7,
      title: 'Открытие скейтпарка в Кемерово',
      subtitle: '15 июня, г. Кемерово',
      date: '2024-06-15',
      image: BlogSkatebig,
      size: 'large'
    },
    {
      id: 8,
      title: 'Мастер-класс по граффити',
      subtitle: '16 мая, г. Кемерово',
      date: '2024-05-16',
      image: Blogskatesmall,
      size: 'small'
    },
    {
      id: 9,
      title: 'Событие в Кемерово',
      subtitle: '20 июня, г. Кемерово',
      date: '2024-06-20',
      image: Blogskatesmall,
      size: 'small'
    }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNews(true);
    }, 5000); // Покажет новости через 5 секунд

    // Закомментированный код для получения данных с бэка
    /*
    const fetchNews = async () => {
      try {
        const response = await fetch('YOUR_BACKEND_API_URL'); // Замените на ваш URL API
        const data = await response.json();
        setNews(data);
        setShowNews(true);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
    */

    return () => clearTimeout(timer);
  }, []);

  const renderNewsRow = (newsItems: NewsItem[]) => (
    <div className="blog__card">
      {newsItems.map((item: NewsItem) => (
        <Link to={`/blog/${item.id}`} key={item.id} className={`blog__card-item blog__card1--${item.size}`}>
          <div className="blog__card1">
            <img src={item.image} alt={item.title} className="blog__image-content" />
          </div>
          <div className="blog__card1-title">
            <p>{item.title}</p>
          </div>
          <p className="blog__card1-subtitle">{item.subtitle}</p>
        </Link>
      ))}
    </div>
  );

  const renderNews = () => {
    const rows = [];
    for (let i = 0; i < news.length; i += 3) {
      rows.push(renderNewsRow(news.slice(i, i + 3)));
    }
    return rows;
  };

  return (
    <section className="blog">
      {!showNews && (
        <div className="blog__no-news-container">
          <div className="blog__no-news">
            Пока у нас нет <br /> новостей:(
          </div>
          <div className="blog__no-news-subtitle">
            Они обязательно скоро появятся, а пока вы можете вернуться на{' '}
            <Link to="/" className="blog__no-news-link">главную страницу</Link>.
          </div>
        </div>
      )}
      {showNews && (
        <>
          <div className="blog__city">г. Кемерово</div>
          <div className="blog__title">Как прошёл мастер-класс по граффити с детьми 7-10 лет</div>
          <div className="blog__date">16.05.2024</div>
          <div className="blog__image">
            <img src={Blogmain} alt="Graffiti workshop" />
          </div>

          {renderNews()}
        </>
      )}
    </section>
  );
}
