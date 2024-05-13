import React from 'react';
import './App.css';
import  { Header, Footer, Main, Events } from './components/Components';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (<div className='page'>
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



    </Routes>
      
    </div>
    <Footer />
  </div>)
}

export default App
