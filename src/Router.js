import React from 'react';
import './App.css';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoutes from './hoc/ProtectedRoutes';
import { ToastContainer } from './components/Toast';
import CheckSession from './hoc/CheckSession';
import { useSelector } from 'react-redux';
export default function Router() {
  const { darkMode } = useSelector((state) => state.Auth);
  return (
    <div className={`h-100vh ${darkMode ? 'bg-dark text-light' : ''}`}>
      <ToastContainer />
      <Switch>
        <Route exact path='/login' component={Login} />
        <ProtectedRoutes>
          <CheckSession>
            <Route exact path='/' component={Dashboard} />
          </CheckSession>
        </ProtectedRoutes>
      </Switch>
    </div>
  );
}
