import * as React from 'react';
import { useHistory } from 'react-router';
import i from 'i18next';
import { Button, AppBar, Toolbar } from '@material-ui/core';

import './TopBar.scss';

export const TopBar = () => {
  const history = useHistory();

  return (
    <AppBar
      className="TopBar"
      position="static"
    >
      <Toolbar className="TopBar-toolbar">
        <Button
          onClick={() => history.push('/login')}
          color="inherit"
        >
          {i.t('topBar.login')}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
