// TODO: Button com 4 variantes: Base, add, remove, close
import React from "react";
import Icon from "../Icon";

type ButtonProps = {
  title: string | string[];
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className="bg-primary w-full px-3 py-2 flex flex-row items-center justify-center gap-2 rounded-full text-white"
      onClick={props.onClick}
    >
      {Array.isArray(props.title)
        ? props.title.map((text, index) => (
            <React.Fragment key={text}>
              {text}
              {index < props.title.length - 1 && <Icon.Dot className="text-[0.5rem]" />}
            </React.Fragment>
          ))
        : props.title}
    </button>
  );
};

export default Button;
