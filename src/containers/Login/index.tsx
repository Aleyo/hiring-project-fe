import * as React from 'react';
import { useState, useCallback } from 'react';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import i from 'i18next';

import './Login.scss';
import { useSelector } from 'src/store';

import { AuthActions } from 'src/store/auth/actions';

export const Login = () => {
  const history = useHistory();
  const token = useSelector(s => s.auth.token);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = useCallback(async e => {
    e.preventDefault();

    try {
      await AuthActions.login({
        email,
        password,
      });
      toast.success(i.t('login.success'));
      history.push('/users');
    } catch (e) {
      if (e.status === 400) {
        toast.error(i.t('login.badFormat'));
        // TODO: api returning 500 on invalid email, fix api later
      } else if (e.status === 401 || e.status === 500) {
        toast.error(i.t('login.invalidCredentials'));
      } else {
        toast.error(i.t('errors.unknown'));
      }
    }
  }, [
    history,
    email,
    password,
  ]);

  if (token) {
    return <Redirect to="/users" />;
  }

  return (
    <>
      <Typography variant="h2">{i.t('login.heading')}</Typography>
      <form noValidate autoComplete="off">
        <Grid
          className="grid-auth"
          direction="column"
          spacing={4}
          container
        >
          <Grid item>
            <TextField
              value={email}
              onChange={e => setEmail(e.target.value)}
              label={i.t('login.username')}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              value={password}
              onChange={e => setPassword(e.target.value)}
              label={i.t('login.password')}
              type="password"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button
              onClick={handleSubmit}
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
            >
              {i.t('login.signIn')}
            </Button>
          </Grid>
        </Grid>
        <p className="Login-signup-text">
          {i.t('login.dontHaveAccount')}
          <Link to="/signup">
            {i.t('login.createAccount')}
          </Link>
        </p>
      </form>
    </>
  );
};
