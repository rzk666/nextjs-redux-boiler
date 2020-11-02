import React from 'react';
import Head from 'next/head';
// Redux
import wrapper from '../redux/store/reduxWrapper';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/models/users/usersActions';
// HOCs
import page from '../hocs/page';
// Styles
import styles from '../styles/SSRPage.module.scss';
// Components
import Card from '../components/common/Card';
import Clickable from '../components/common/Clickable';
// Utils
import NodeService from '../utils/NodeService';
// Common
import { SSR } from '../common/pages';

const SSRPage = () => (
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

// This is an example of making a page run an api call via redux
// inside a component's getXXXXProps
export const getServerSideProps = wrapper.getServerSideProps(async ({
  store, req, res, ...ctx
}) => {
  const { users } = store.getState();
  if (!users.data.length) {
    await store.dispatch(fetchUsers());
  }
  return {
    props: {
      generatedAt: 'Request',
      serverRendered: NodeService.isServer(),
    },
  };
});

export default connect()(page(SSRPage, SSR));
