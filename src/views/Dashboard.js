import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from '../components/CustomButton';
import { resetContent } from '../Action/Auth';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
  const {
    user: { name, email },
  } = useSelector((state) => state.rootReducer.Auth);
  useEffect(() => {}, []);
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    dispatch(resetContent());
    history.push('/login');
  };
  return (
    <div className='d-flex flex-column h-100vh justify-content-center align-items-center'>
      <h1>Hello {name}</h1>
      <h3>Your email : {email}</h3>
      <CustomButton title='Logout' onClick={logout} />
    </div>
  );
}
