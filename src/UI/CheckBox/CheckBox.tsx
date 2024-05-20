import React from "react";
import { CheckBoxProps } from "./CheckBoxProps";
import './CheckBox.css';

export function CheckBox({ id, children }: CheckBoxProps) {


    return (
        <label htmlFor={id} className="checkBoxLabel">
        {children}

        {/* <input
          id={id}
          type="checkbox"
          className="checkbox"
        />
        <span className="checkbox__pseudo-item checkbox__pseudo-item_type_checkbox"></span> */}

        <input type='checkbox' name='extra-option' id={id} className='form__item form__item_el_extra-options'value='bold-heading'/>
        <span className='form__pseudo-item form__pseudo-item_type_checkbox'></span>
      </label>
    );
}