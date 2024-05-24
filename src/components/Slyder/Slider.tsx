import React, { useState, useEffect, useRef } from 'react';
import './Slyder.css';
import image1 from '../../images/cat.jpeg';
import image2 from '../../images/taylor-swift-in-blue-wallpaper-1920x600_57.jpg';
import image3 from '../../images/Taylor.jpeg';

export function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [image1, image2, image3];
    const delay = 3000;
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const sliderContentRef = useRef<HTMLDivElement | null>(null);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
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
    <div className="slider-container">
        <div className="slider-content" ref={sliderContentRef}>
            {images.map((image, index) => (
                <img
                    key={index}
                    className="slide-image"
                    src={image}
                    alt={`Slide ${index + 1}`}
                />
            ))}
        </div>
    </div>
    );
}
