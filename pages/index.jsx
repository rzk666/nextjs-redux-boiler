import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import wrapper from '../redux/store/reduxWrapper';
// Redux Actions
import { fetchUsers } from '../redux/models/users/usersActions';
// HOCs
import page from '../hocs/page';
// Styles
import styles from '../styles/Home.module.scss';
// Components
import Card from '../components/common/Card';
import Clickable from '../components/common/Clickable';
// Utils
import NodeService from '../utils/NodeService';
// Common
import { HOME, SSR } from '../common/pages';

const Home = () => (
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

export const getStaticProps = wrapper.getStaticProps(async ({
  store, req, res, ...ctx
}) => ({
  props: {
    generatedAt: 'BUILD TIME',
    serverRendered: NodeService.isServer(),
  },
}));

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers),
});

export default connect(mapStateToProps, mapDispatchToProps)(page(Home, HOME));
