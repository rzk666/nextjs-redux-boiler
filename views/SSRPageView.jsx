import React from 'react';
import Head from 'next/head';
// Styles
import styles from './SSRPageView.module.scss';
// Components
import Card from '../components/common/Card';
import Clickable from '../components/common/Clickable';
import Loader from '../components/common/Loader';

const SSRPageView = ({ users }) => (
  <div className={styles.container}>
    <Head>
      <title>SSG</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Card />
    <Clickable
      routing
      href={{
        pathname: '/',
        query: {},
      }}
    >
      <div className={styles.home}>
        Home Page
      </div>
    </Clickable>
  </div>
);

export default SSRPageView;
