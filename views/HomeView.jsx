import React from 'react';
import Head from 'next/head';
// Styles
import styles from './HomeView.module.scss';
// Components
import Card from '../components/common/Card';
import Clickable from '../components/common/Clickable';
// Common
import { SSR } from '../common/pages';

const HomeView = () => (
  <div className={styles.container}>
    <Head>
      <title>SSG</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Card />
    <Clickable
      routing
      href={{
        pathname: `/${SSR}`,
        query: {},
      }}
    >
      <div className={styles.ssr}>
        SSR Page
      </div>
    </Clickable>
  </div>
);

export default HomeView;
