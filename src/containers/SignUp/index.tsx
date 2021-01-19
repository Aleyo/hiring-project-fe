import * as React from 'react';
import { useState, useCallback } from 'react';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import i from 'i18next';

import { useSelector } from 'src/store';

import { AuthActions } from 'src/store/auth/actions';

export const SignUp = () => {
  const history = useHistory();
  const token = useSelector(s => s.auth.token);

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = useCallback(async e => {
    e.preventDefault();

    try {
      await AuthActions.signUp({
        firstName,
        lastName,
        email,
        password,
      });
      toast.success(i.t('signUp.success'));
      history.push('/login');
    } catch (e) {
      if (e.status === 400) {
        toast.error(i.t('signUp.badFormat'));
      } else {
        toast.error(i.t('errors.unknown'));
      }
    }
  }, [
    history,
    firstName,
    lastName,
    email,
    password,
  ]);

  if (token) {
    return <Redirect to="/users" />;
  }

  return (
    <>
      <Typography variant="h2">{i.t('signUp.heading')}</Typography>
      <form noValidate autoComplete="off">
        <Grid
          className="grid-auth"
          direction="column"
          spacing={4}
          container
        >
          <Grid item>
            <TextField
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              label={i.t('signUp.firstName')}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              label={i.t('signUp.lastName')}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
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
              variant="outlined"
              type="password"
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
      </form>
    </>
  );
};
