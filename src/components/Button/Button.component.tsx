import React from "react";
import Icon from "../Icon";

import { ButtonProps } from "./Button.types";

const Button = ({ variant = "solid", className = '', ...props }: ButtonProps) => {
  if (variant === "icon") {
    return (
      <button disabled={props.disabled} className={`icon-button ${className}`}>
        {props.icon}
      </button>
    );
  }

  return (
    <button
      className="bg-primary w-full px-3 py-2 flex flex-row items-center justify-center gap-2 rounded-full text-white"
      onClick={props.onClick}
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
