import React from 'react';
import styles from './Find.module.css';

import 'swiper/css';
import 'swiper/css/navigation';

const Card = ({ image, make }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt='/' />
      <p>{make}</p>
    </div>
  );
};

export default Card;
