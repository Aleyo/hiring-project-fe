import * as React from 'react';
import { useCallback, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/HighlightOff';
import { toast } from 'react-toastify';
import i from 'i18next';

import './UsersTable.scss';
import { useSelector } from 'src/store';

import { UsersActions } from 'src/store/user/actions';

export const UsersTable = () => {
  const users = useSelector(s => s.users.userList);
  const userId = useSelector(s => s.auth.userId);

  const handleUserDelete = useCallback(async (userId: string) => {
    if (confirm(i.t('usersTable.confirmDelete'))) {
      try {
        await UsersActions.removeUser(userId);
        toast.success(i.t('usersTable.deleteSuccess'));
      } catch (e) {
        toast.error(i.t('errors.unknown'));
      }
    }
  }, []);

  const loadUsers = useCallback(async () => {
    try {
      await UsersActions.getUsers();
    } catch (e) {
      toast.error(i.t('errors.unknown'));
    }
  }, []);

  useEffect(() => {
    if (!users) {
      loadUsers();
    }
  }, [users, loadUsers]);

  return (
    <TableContainer
      className="UsersTable"
      component={Paper}
    >
      <Table>
        <TableHead className="UsersTable-head">
          <TableRow>
            <TableCell>{i.t('login.username')}</TableCell>
            <TableCell>{i.t('signUp.firstName')}</TableCell>
            <TableCell>{i.t('signUp.lastName')}</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {
            !users
              ? (
                <TableRow>
                  <TableCell colSpan={4}>
                    <LinearProgress />
                  </TableCell>
                </TableRow>
              )
              : users?.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>
                    {
                      userId !== user.id &&
                        <DeleteIcon
                          style={{
                            cursor: 'pointer',
                            color: red[500],
                          }}
                          onClick={() => handleUserDelete(user.id)}
                        />
                    }
                  </TableCell>
                </TableRow>
              ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};
