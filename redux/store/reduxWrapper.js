import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { INITIAL_STATE } from '../../common/app-const';
import rootReducer from '../root-reducer';
import api from '../middlewares/api';
import { createWrapper } from 'next-redux-wrapper';

/**
 * Determine which Redux store to provide based on the
 * Environment Type of Node.js
 * @return {object}    Redux store
 */

const middlewares = [
  thunk,
  api,
];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

// noinspection JSCheckFunctionSignatures
const makeStore = (ctx) => createStore(
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(...middlewares),
);
const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV !== 'production' });

export default wrapper;
