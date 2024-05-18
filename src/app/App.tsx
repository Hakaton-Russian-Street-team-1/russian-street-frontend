import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer, SliderIfApplicable } from '../components/Components';
import { AboutUs, Contacts, Directions, Events, Blog, Main } from '../pages/pages';

function App() {
  return (
    <div className='page'>
      <Header />
      {/* <SliderIfApplicable /> */}
      <div className='content'>
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/events' element={<Events />} />
          <Route path='/directions' element={<Directions />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contacts' element={<Contacts />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
