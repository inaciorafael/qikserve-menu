import React from "react";
import Icon from "../Icon";

import { ButtonProps } from "./Button.types";

const Button = ({ variant = "solid", className = '', ...props }: ButtonProps) => {
  if (variant === "icon") {
    return (
      <button disabled={props.disabled} className={`icon-button ${className}`} onClick={props.onClick}>
        {props.icon}
      </button>
    );
  }

  return (
    <button
      className="solid-button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {Array.isArray(props.title)
        ? props.title.map((text, index) => (
            <React.Fragment key={text}>
              {text}
              {props.title && index < props.title.length - 1 ? (
                <Icon.Dot className="text-[0.5rem]" />
              ) : null}
            </React.Fragment>
          ))
        : props.title}
    </button>
  );
};

export default Button;
