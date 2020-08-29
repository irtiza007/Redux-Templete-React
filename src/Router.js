import React from 'react';
import './App.css';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoutes from './hoc/ProtectedRoutes';
import { ToastContainer } from './components/toast';
import CheckSession from './hoc/CheckSession';

export default function Router() {
  return (
    <div className='h-100vh bg-dark text-light'>
      <ToastContainer />
      <Switch>
        <Route exact path='/login' component={Login} />
        <CheckSession>
          <ProtectedRoutes>
            <Route exact path='/' component={Dashboard} />
          </ProtectedRoutes>
        </CheckSession>
      </Switch>
    </div>
  );
}
