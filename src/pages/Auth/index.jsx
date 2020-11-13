import React from 'react';
import { LoginForm, RegisterForm } from 'modules';
import { Route } from 'react-router-dom';

import './Auth.scss';

const Auth = () => {
  return (
    <div className="auth">
      <Route exact path={['/', '/login']} component={LoginForm} />
      <Route path="/register" component={RegisterForm} exact />
    </div>
  );
};

export default Auth;
