import React from "react";
import { ButtonProps } from "./ButtonProps";
import './Button.css';

export function Button({ children }: ButtonProps) {

    return (
        <button className="button">
            {children}
      </button>
    );
}