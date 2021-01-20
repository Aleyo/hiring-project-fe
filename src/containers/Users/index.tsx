import * as React from 'react';
import { Typography } from '@material-ui/core';
import i from 'i18next';

import { CreateUser } from 'src/components/CreateUser';
import { UsersTable } from 'src/components/UsersTable';

export const Users = () => {
  return (
    <>
      <Typography variant="h2">{i.t('users.heading')}</Typography>
      <CreateUser />
      <UsersTable />
    </>
  );
};
