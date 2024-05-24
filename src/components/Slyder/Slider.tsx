import React, { useState, useEffect, useRef } from 'react';
import './Slyder.css';
import image1 from '../../images/cat.jpeg';
import image2 from '../../images/taylor-swift-in-blue-wallpaper-1920x600_57.jpg';
import image3 from '../../images/Taylor.jpeg';

const slides = [
    {
        image: image1,
        city: 'г. Кемерово',
        title: 'Соревнования по скейтбордингу'
    },
    {
        image: image2,
        city: 'г. Москва',
        title: 'Концерт Тейлор Свифт'
    },
    {
        image: image3,
        city: 'г. Санкт-Петербург',
        title: 'Выставка современного искусства'
    }
];

export function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const delay = 3000;
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const sliderContentRef = useRef<HTMLDivElement | null>(null);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(nextSlide, delay);

        return () => {
            resetTimeout();
        };
    }, [currentSlide]);

    useEffect(() => {
        if (sliderContentRef.current) {
            sliderContentRef.current.style.transform = `translateX(-${currentSlide * 100}vw)`;
        }
    }, [currentSlide]);

    return (
        <div className="my-slider-container">
            <div className="my-slider-content" ref={sliderContentRef}>
                {slides.map((slide, index) => (
                    <div key={index} className="my-slider-event-slide">
                        <img
                            className="my-slide-image"
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                        />
                        <div className="my-slider-event-overlay"></div>
                        <div className="my-slider-event-content">
                            <p className='my-slider-event-city'>{slide.city}</p>
                            <h1 className='my-slider-event-title'>{slide.title}</h1>
                            <button className="my-slider-event-button">Участвовать</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
