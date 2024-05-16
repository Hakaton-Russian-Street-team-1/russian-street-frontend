import React from 'react';
import './App.css';
import { Header, Footer, Main, Events } from '../components/Components';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SkateboardEventPage } from '../pages/Skateboardevent/Skateboardevent';
import { SliderIfApplicable } from '../components/Slyder/Slider'; // Импортируем SliderIfApplicable
import { Directions } from '../pages/Directions/Directions';

function App() {
  return (
    <div className='page'>
      <Header />
      <SliderIfApplicable />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/events' element={<Events />} />
          <Route path='/directions' element={<Directions />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
