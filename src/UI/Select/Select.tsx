import React, { useEffect } from 'react';
import './Select.css';
import testImage from '../../images/TestPhoto.svg';
import { SelectProps } from './SelectProps';
import { useAppDispatch } from '../../store/hooks';
import { filterByRegion } from '../../store/Events/EventsSlice';
import { getRegionById } from '../../utils/RegionsApi/RegionsApi';

export function Select({ defaultOption, options, whiteTheme, onChange }: SelectProps) {

  const dispatch = useAppDispatch();

  async function changeOption(event:any) {
    // let res = await getRegionById(event.target.value);

    dispatch(filterByRegion(event.target.value));
  }

  return (
    <select className={`select ${whiteTheme && 'select_type_white'}`} onChange={(test) =>changeOption(test)}>
       <option >{defaultOption}</option>
        { options && options.map((option, index) => <option key={index} value={index + 1}>{option}</option>) }
    </select>
  )
}