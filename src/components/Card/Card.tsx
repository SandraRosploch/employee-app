import React from 'react';
import './Card.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Card = ({ children, className }: Props) => {
  return (
    <div className={`card ${className}`}>{children}</div>
  )
}

export default Card