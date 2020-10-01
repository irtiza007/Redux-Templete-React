import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CustomTextField from '../components/CustomTextField';
import CustomButton from '../components/CustomButton';
import { setAuthInfo } from '../Action/Auth';
import { createNotification } from '../components/Toast';
import api from '../apiCalls/api';
import { useDispatch, useSelector } from 'react-redux';
import DarkMode from '../components/DarkMode';

export default function Login() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { userToken, isAuthenticated } = useSelector((state) => state.Auth);
  useEffect(() => {
    if (userToken && isAuthenticated) {
      history.push('/');
    }
    return () => {
      console.log('USER IS ALREADY LOGGED IN');
    };
    // eslint-disable-next-line
  }, [isAuthenticated]);

  const authenticate = (e) => {
    e.preventDefault();
    if (email.length <= 3 || password.length <= 3 || error || loading) {
      setError(true);
    } else {
      setLoading(true);
      api
        .login({ email, password })
        .then((res) => {
          if (res.data.status === 'error') {
            createNotification('error', res.data.message, 'Status');
          } else {
            dispatch(setAuthInfo(res.data));
            createNotification('success', 'Login Successfully');
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          createNotification(
            'error',
            err.data?.message ?? 'Something went wrong please try again later'
          );
        });
    }
  };
  return (
    <>
      <div className='container col-sm-12 d-flex justify-content-center align-items-center h-100vh'>
        <div className='col-sm-6 shadow'>
          <div className='p-5'>
            <div className='d-flex w-100 justify-content-between'>
              <h1>Log In</h1>
              <DarkMode />
            </div>

            <form autoComplete={false} onSubmit={authenticate}>
              <fieldset>
                <CustomTextField
                  title={'Email'}
                  value={email}
                  autoComplete={false}
                  type='email'
                  error={(email.length > 1 && email.length <= 3) || error}
                  message={'Please enter valid email'}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(false);
                  }}
                />
                <CustomTextField
                  password={password}
                  error={(password.length > 1 && password.length <= 3) || error}
                  message={'Please enter valid password'}
                  title={'Password'}
                  type={'password'}
                  autoComplete={false}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                />
                <CustomButton
                  title={'Login'}
                  type='submit'
                  loading={loading}
                  disabled={loading}
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
