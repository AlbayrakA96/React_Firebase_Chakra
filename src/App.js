import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import LoginForm from './components/auth/LoginForm';
import ConfirmForm from './components/auth/ConfirmForm'
import PrivateRoute from './components/route/PrivateRoute'

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <PrivateRoute path='/'></PrivateRoute>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/confirm">
            <ConfirmForm/>
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
