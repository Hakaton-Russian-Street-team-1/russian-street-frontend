import React, { useEffect, useState } from 'react';
import './CurrentLocation.css';
import { useLocation } from 'react-router-dom';

export function CurrentLocation() {

    const location = useLocation();
    
    const [ locationName, setLocationName ] = useState('');

    useEffect(() => {
        console.log(location.pathname);
    }, [location])

  return (<div className='current-location'>
   <p className='current-location__text'>{`Главная /`}</p>
  </div>)
}
