import React from 'react';
// Redux
import wrapper from '../redux/store/reduxWrapper';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/models/users/usersActions';
// HOCs
import page from '../hocs/page';
// Utils
import NodeService from '../utils/NodeService';
// Common
import { SSR } from '../common/pages';
// Components
import SSRPageController from '../controllers/SSRPageController';
import SSRPageView from '../views/SSRPageView';

const SSRPage = (props) => (
  <SSRPageController View={SSRPageView} {...props} />
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

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(page(SSRPage, SSR));
