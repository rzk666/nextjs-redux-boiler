import React from 'react';
// Styles
import styles from './EnvNotification.module.scss';
// Components
import { motion } from 'framer-motion';

const EnvNotification = ({ serverRendered, generatedAt }) => (
  <motion.div
    animate={{ y: [150, 0, 0, 0, 0, 0, 200] }}
    transition={{ duration: 4, ease: 'easeIn' }}
    className={styles.notification}
  >
    <h3>{`This page was generated on ${generatedAt}`}</h3>
    <p>{`And was rendered on the ${serverRendered ? 'Server' : 'Client'}`}</p>
  </motion.div>
);

export default EnvNotification;
