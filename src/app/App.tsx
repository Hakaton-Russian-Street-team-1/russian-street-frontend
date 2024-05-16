import React from 'react';
import './App.css';
import  { Header, Footer, Main, Events } from '../components/Components';
import { Routes, Route } from 'react-router-dom';
import { SkateboardEventPage } from '../pages/Skateboardevent/Skateboardevent';
import { Slyder } from '../components/Slyder/Slyder';
import { Directions } from '../pages/Directions/Directions';

function App() {
  return (
  <div className='page'>
    <Header />

    <div className='content'>

    <Routes>
      <Route
      path='/'
      Component={Main}
      />

      <Route
      path='/events'
      Component={Events}
      />

      <Route 
      path='/directions'
      Component={Directions}
      />


    </Routes>
    </div>
    <Footer />
  </div>
  )
}

export default App
