import React from 'react';
import { connect } from 'react-redux';
import wrapper from '../redux/store/reduxWrapper';
// Redux Actions
import { fetchUsers } from '../redux/models/users/usersActions';
// HOCs
import page from '../hocs/page';
// Utils
import NodeService from '../utils/NodeService';
// Common
import { HOME } from '../common/pages';
// Components
import HomeView from '../views/HomeView';
import HomeController from '../controllers/HomeController';

const Home = (props) => (
  <HomeController View={HomeView} {...props} />
);

export const getServerSideProps = wrapper.getServerSideProps(async ({
  store, req, res, ...ctx
}) => {
  const { users } = store.getState();
  if (!users.data.length) {
    await store.dispatch(fetchUsers());
  }
  return {
    props: {
      generatedAt: 'BUILD TIME',
      serverRendered: NodeService.isServer(),
    },
  };
});

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers),
});

export default connect(mapStateToProps, mapDispatchToProps)(page(Home, HOME));
