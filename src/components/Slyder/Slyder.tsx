import React, { useState, useEffect } from 'react';
import './Slyder.css';
import test from '../../assets/Skateboard.jpeg';
import test2 from '../../assets/TaylorSwift.webp';
import test3 from '../../assets/tabletennis.jpeg';

export function Slyder() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [test, test2, test3];
    const delay = 3000; // Задержка между слайдами в миллисекундах

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, delay);

        return () => clearInterval(intervalId);
    }, [currentSlide]);

    return (
        <div className="slyder-container">
            <div className="slider-container">
                <button className="prev-button" onClick={prevSlide}>{'<'}</button>
                <img className="slide-image" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                <button className="next-button" onClick={nextSlide}>{'>'}</button>
            </div>
        </div>
    );
}
