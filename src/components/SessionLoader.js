import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetContent } from '../Action/Auth';
import { useHistory } from 'react-router-dom';
export default function SessionLoader() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      dispatch(resetContent());
      history.push('/login');
    }, 5000);
    // eslint-disable-next-line
  }, []);
  return (
    <div className='d-flex justify-content-center align-item-center h-100vh'>
      <h1>Your Session is Expired, You will be logout in 5 secs </h1>
    </div>
  );
}
