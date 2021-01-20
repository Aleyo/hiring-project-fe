import * as React from 'react';
import { useState, useCallback } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import { toast } from 'react-toastify';
import i from 'i18next';

import './CreateUser.scss';

import { UsersActions } from 'src/store/user/actions';

export const CreateUser = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleClearForm = useCallback(() => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }, []);

  const handleSubmit = useCallback(async e => {
    e.preventDefault();

    try {
      await UsersActions.postUser({
        firstName,
        lastName,
        email,
        password,
      });
      handleClearForm();
      toast.success(i.t('createUser.success'));
    } catch (e) {
      if (e.status === 400) {
        toast.error(i.t('createUser.badFormat'));
      } else {
        toast.error(i.t('errors.unknown'));
      }
    }
  }, [
    firstName,
    lastName,
    email,
    password,
    handleClearForm,
  ]);

  return (
    <form noValidate autoComplete="off">
      <Grid
        spacing={3}
        container
      >
        <Grid item md={4} xs={12}>
          <TextField
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            label={i.t('signUp.firstName')}
            InputLabelProps={{ shrink: true }}
            variant="filled"
            required
            fullWidth
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            label={i.t('signUp.lastName')}
            InputLabelProps={{ shrink: true }}
            variant="filled"
            required
            fullWidth
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            value={email}
            onChange={e => setEmail(e.target.value)}
            label={i.t('login.username')}
            InputLabelProps={{ shrink: true }}
            variant="filled"
            required
            fullWidth
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            value={password}
            onChange={e => setPassword(e.target.value)}
            label={i.t('login.password')}
            InputLabelProps={{ shrink: true }}
            type="password"
            variant="filled"
            required
            fullWidth
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <Button
            onClick={handleSubmit}
            type="submit"
            color="primary"
            variant="contained"
            disabled={
              !firstName ||
              !lastName ||
              !email ||
              !password
            }
            fullWidth
          >
            {i.t('createUser.submit')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
