export const setAuthInfo = (info = {}) => (dispatch) => {
  dispatch({
    type: 'SET_AUTH_INFO',
    payload: info,
  });
};

export const resetContent = () => (dispatch) => {
  localStorage.clear();
  dispatch({
    type: 'LOGOUT',
  });
};

export const changeDarkMode = (value) => (dispatch) => {
  dispatch({
    type: 'SET_DARK_MODE',
    payload: value,
  });
};
