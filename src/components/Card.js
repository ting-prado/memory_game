import { useState } from 'react';
import '../styles/Card.css';

const Card = (props) => {
  const { name, imgSrc } = props;
  return (
    <div className="Card">
      <img src={imgSrc} alt={name.toLowerCase()} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
