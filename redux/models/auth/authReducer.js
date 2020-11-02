// Next SSR hydrate
import { HYDRATE } from 'next-redux-wrapper';
// Initial state
import { INITIAL_STATE } from '../../../common/app-const';

const auth = (state = INITIAL_STATE.auth, action) => {
  const { payload } = action;
  switch (action.type) {
    case HYDRATE:
      return {
        ...payload.auth,
      };
    default: {
      return state;
    }
  }
};

export default auth;
