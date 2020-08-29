import Auth from './Auth';

import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  Auth,
});

// export default (state, action) =>
//   rootReducer(action.type === 'LOGOUT' ? undefined : state, action);

export default {
  rootReducer,
};
