import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { SigninPage } from './pages/SigninPage';
import { SignupPage } from './pages/SignupPage';
import { TasksPage } from './pages/TasksPage';

export const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact={true} component={TasksPage} />
      <Route path="/signin" exact={true} component={SigninPage} />
      <Route path="/signup" exact={true} component={SignupPage} />
    </Router>
  );
};
