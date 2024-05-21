import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from '../components/Components';
import { AboutUs, Contacts, Directions, Events, Blog, Main, Event, NotFoundPage } from '../pages/pages';

function App() {
  return (
    <div className='page'>
      <Header />
      <div className='content'>
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/events' element={<Events />} />
          <Route path='/directions' element={<Directions />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/events/:id' element={<Event />} />
          <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
