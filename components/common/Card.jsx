import React from 'react';
// Styles
import styles from './Card.module.scss';

const Card = () => (
  <div className={styles.card}>
    <p>
      nextjs boiler
    </p>
    <h2>
      This is a boiler plate using nextjs v10.0 /w redux & thunk
    </h2>
  </div>
);

export default Card;
