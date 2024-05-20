import React from "react";
import { CheckBoxProps } from "./CheckBoxProps";
import './CheckBox.css';

export function CheckBox({ id, children }: CheckBoxProps) {


    return (
        <label htmlFor="checkBoxId" className="checkBoxLabel">
        {children}
        <input
          id={id}
          type="checkbox"
          className="checkbox"
        />
        <span className="checkbox__pseudo-item"></span>
      </label>
    );
}