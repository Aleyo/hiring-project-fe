import * as React from 'react';
import { useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import i from 'i18next';

import { useSelector } from 'src/store';
import { logout, getAuthData } from 'src/lib/helpers';

import { AuthActions } from 'src/store/auth/actions';

export const Logout = () => {
  const history = useHistory();
  const auth = useSelector(s => s.auth);

  useEffect(() => {
    AuthActions.logout();
    logout();
    toast.success(i.t('logout.success'));
  }, []);

  useEffect(() => {
    if (!auth.userId && !auth.token && !getAuthData().token) {
      history.replace('/login');
    }
  }, [auth, history]);

  return <LinearProgress />;
};
