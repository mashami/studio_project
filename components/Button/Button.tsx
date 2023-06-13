import React from "react";
import classNames from "classnames";
import style from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ text, onClick }: ButtonProps) => {
  const clickHandler = () => {
    if (onClick) {
      return onClick();
    }
  };

  const buttonClasses = classNames(style.button);

  return (
    <button className={buttonClasses} onClick={clickHandler}>
      <span>{text}</span>
    </button>
  );
};
export default Button;
