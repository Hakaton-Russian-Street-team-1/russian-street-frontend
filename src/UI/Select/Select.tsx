import React from 'react';
import './Select.css';
import testImage from '../../images/TestPhoto.svg';
import { SelectProps } from './SelectProps';

export function Select({ defaultOption, options, whiteTheme }: SelectProps) {

  return (
    <select className={`select ${whiteTheme && 'select_type_white'}`}>
       <option>{defaultOption}</option>
        { options && options.map((option, index) => <option key={index}>{option}</option>) }
    </select>
  )
}