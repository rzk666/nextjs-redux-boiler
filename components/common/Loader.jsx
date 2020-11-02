import React from 'react';
// Styles
import styles from './Loader.module.scss';
// Libs
import classnames from 'classnames';

const Loader = ({ size = 'medium' }) => (
  <img
    className={classnames(styles.loader, styles[size])}
    src="/assets/icons/rings.svg"
    alt="Loader"
  />
);

export default Loader;
