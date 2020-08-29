import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ProtectedRoutes = ({ children }) => {
  const { userToken, isAuthenticated } = useSelector(
    (state) => state.rootReducer.Auth
  );
  const history = useHistory();
  useEffect(() => {
    if (userToken && isAuthenticated) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
      history.push('/login');
    }
  }, [history]);
  return <>{children}</>;
};

export default ProtectedRoutes;
