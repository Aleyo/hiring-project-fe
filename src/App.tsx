import * as React from 'react';
import { Switch } from 'react-router-dom';

import { Route } from 'src/components/Route';
import { NotFound } from 'src/components/NotFound';
import { Login } from 'src/containers/Login';
import { SignUp } from 'src/containers/SignUp';

export const App = () => {
  return (
    <Switch>
      <Route exact path={['/login', '/']} component={Login} loginRequired={false} />
      <Route exact path="/signUp" component={SignUp} loginRequired={false} />
      <Route component={NotFound} loginRequired={false} />
    </Switch>

  );
};
