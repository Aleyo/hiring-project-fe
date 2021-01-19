import * as React from 'react';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import i from 'i18next';

import './Login.scss';

export const Login = () => {
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
              label={i.t('login.username')}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              label={i.t('login.password')}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button
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
