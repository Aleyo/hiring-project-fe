import * as React from 'react';
import { useEffect, useCallback, useState } from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import i from 'i18next';

import { useSelector } from 'src/store';
import { getAuthData, logout } from 'src/lib/helpers';

import { Route } from 'src/components/Route';
import { NotFound } from 'src/components/NotFound';
import { Login } from 'src/containers/Login';
import { SignUp } from 'src/containers/SignUp';
import { Users } from 'src/containers/Users';

import { UsersActions } from 'src/store/user/actions';

export const App = () => {
  const auth = useSelector(s => s.auth);
  const [invalidToken, setInvalidToken] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const checkUser = useCallback(async () => {
    if (!getAuthData().userId || auth.user) { return; }

    try {
      setLoading(true);
      await UsersActions.getUser(getAuthData().userId);
    } catch (e) {
      setInvalidToken(true);

      if (e.status === 401) {
        logout();
        toast.error(i.t('errors.sessionExpired'));
      } else {
        toast.error(i.t('errors.unknown'));
      }
    } finally {
      setLoading(false);
    }
  }, [auth]);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  if (loading) {
    // TODO: change for SpinnerFullscreen
    return (<h2>Loading...</h2>);
  }

  if (getAuthData().token && !auth.userId && !invalidToken) {
    return (<h2>Loading...</h2>);
  }

  return (
    <Switch>
      <Route exact path={['/login', '/']} component={Login} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/users" component={Users} loginRequired />
      <Route component={NotFound} loginRequired={false} />
    </Switch>
  );
};
