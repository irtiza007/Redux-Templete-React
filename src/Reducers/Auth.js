import produce from 'immer';
const initialstate = {
  userToken: '',
  user: {},
  isAuthenticated: false,
  darkMode: true,
};

const LoginReducer = produce((state = initialstate, action) => {
  switch (action.type) {
    case 'SET_AUTH_INFO': {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.userToken = action.payload.auth.access_token;
      return state;
    }
    case 'LOGOUT': {
      return initialstate;
    }
    case 'SET_DARK_MODE': {
      state.darkMode = action.payload;
      return state;
    }

    default:
      return state;
  }
});

export default LoginReducer;
