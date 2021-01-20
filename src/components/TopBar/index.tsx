import * as React from 'react';
import { useHistory } from 'react-router';
import i from 'i18next';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';

import './TopBar.scss';
import { useSelector } from 'src/store';

interface Props {
  isSignedIn?: boolean;
}

export const TopBar = ({ isSignedIn = false }: Props) => {
  const user = useSelector(s => s.auth?.user);
  const history = useHistory();

  return (
    <AppBar
      className="TopBar"
      position="static"
    >
      <Toolbar className="TopBar-toolbar">
        {
          isSignedIn
            ? (
              <>
                <Typography variant="h6">
                  {`${user.firstName} ${user.lastName}`}
                </Typography>
                <Button
                  className="TopBar-toolbar-logout"
                  onClick={() => history.push('/logout')}
                  color="inherit"
                >
                  {i.t('topBar.logout')}
                </Button>
              </>
            )
            : (
              <Button
                onClick={() => history.push('/login')}
                color="inherit"
              >
                {i.t('topBar.login')}
              </Button>
            )
        }
      </Toolbar>
    </AppBar>
  );
};
