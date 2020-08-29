import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SessionLoader from '../components/SessionLoader';
import decode from 'jwt-decode';
export default function CheckSession({ children }) {
  const { userToken } = useSelector((state) => state.rootReducer.Auth);
  const { exp } = decode(userToken);
  const [showLoader, setShowLoader] = useState(false);
  console.log(exp);
  let date = Date.now();
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, exp * 1000 - date);
    //eslint-disable-next-line
  }, []);

  return <>{showLoader ? <SessionLoader /> : children}</>;
}