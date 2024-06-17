import React from "react";
import './button.scss';
import classNames from "classnames";
import { LinkProps } from "react-router-dom";


type ButtonProps = {
  label?: string | JSX.Element,
  hideLabel?: boolean,
  icon?: string,
  variant?: 'primary' | 'secondary' | 'danger',
  width?: 'content' | 'fill',
  height?: 'small' | 'medium' | 'large',
  onClick?: () => void,
  disabled?: boolean,
  type?: 'submit' | 'button' | 'reset',
  className?: string;
  children?: JSX.Element | JSX.Element[],
}
const Button: React.FC<ButtonProps> = ({
  label,
  hideLabel = false,
  icon,
  variant = 'primary',
  width = 'content',
  height = 'small',
  onClick,
  disabled = false,
  type = 'button',
  children,

}) => {
  const baseClass = "button"
  const buttonClasses = classNames(
    baseClass, `button--${variant}`, {
    "button--content": width === "content",
    "button--fill": width === "fill",

    "button--small": height === "small",
    "button--medium": height === "medium",
    "button--large": height === "large",
    "button--disabled": disabled,
  }
  )
  return <button className={buttonClasses} onClick={onClick} disabled={disabled} type={type} >
    {/* {icon && <img src={icon}></img>} */}
    {!hideLabel ? label : ''}
    {children}
  </button>;
};

export default Button;
