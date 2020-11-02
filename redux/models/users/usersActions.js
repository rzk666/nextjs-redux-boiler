// Types
import {
  USERS_IS_LOADING,
  USERS_HAS_ERROR,
  USERS_GET_DATA,
} from './usersTypes';
// API
import { API, api } from '../../api';
// Additional Imports
import config from '../../../common/config';

export const fetchUsers = () => (api({
  type: API,
  payload: {
    url: {
      base: config.api.url,
      endpoint: 'users',
    },
    method: 'get',
    success: (data) => usersGetData(data),
    failure: (data) => usersHasError(data),
    loader: (data) => usersIsLoading(data),
  },
}));

export const usersIsLoading = (isLoading) => ({
  type: USERS_IS_LOADING,
  isLoading,
});

export const usersGetData = (data) => ({
  type: USERS_GET_DATA,
  data,
});

export const usersHasError = (data) => ({
  type: USERS_HAS_ERROR,
  data,
});
