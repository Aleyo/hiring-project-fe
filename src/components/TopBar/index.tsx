import * as React from 'react';
import i from 'i18next';
import { Button, AppBar, Toolbar } from '@material-ui/core';

import './TopBar.scss';

export const TopBar = () => {
  return (
    <AppBar
      className="TopBar"
      position="static"
    >
      <Toolbar className="TopBar-toolbar">
        <Button color="inherit">{i.t('topBar.login')}</Button>
      </Toolbar>
    </AppBar>
  );
};
