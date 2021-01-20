import store from 'src/init/createStore';
import { getAuthData } from 'src/lib/helpers';

import { AuthActions } from 'src/store/auth/actions';
import { UserApi } from './api';
import { UserTypes } from './types';

import { User } from 'src/models/User';

export namespace UsersActions {
  export const getUser = (userId: string): Promise<UserApi.GetUserResponse> => {
    return UserApi.getUser(userId)
      .then(res => {
        if (getAuthData().userId === userId) {
          const { token, userId } = getAuthData();

          store.dispatch(AuthActions.setUser(res));
          store.dispatch(AuthActions.setAuth(token, userId));
        }

        return res;
      });
  };

  export const postUser = (body: UserApi.PostUserBody): Promise<UserApi.PostUserResponse> => {
    return UserApi.postUser(body)
      .then(res => {
        store.dispatch(addUser(res));

        return res;
      });
  };

  export const getUsers = (): Promise<UserApi.GetUsersResponse> => {
    return UserApi.getUsers()
      .then(res => {
        store.dispatch(setUsers(res));

        return res;
      });
  };

  export const removeUser = (userId: string): Promise<void> => {
    return UserApi.deleteUser(userId)
      .then(res => {
        store.dispatch(deleteUser(userId));

        return res;
      });
  };

  export const setUsers = (userList: User[]): UserTypes.SetUsersAction => {
    return {
      type: UserTypes.SET_USERS,
      userList,
    };
  };

  export const addUser = (user: User): UserTypes.AddUserAction => {
    return {
      type: UserTypes.ADD_USER,
      user,
    };
  };

  export const deleteUser = (userId: string): UserTypes.DeleteUserAction => {
    return {
      type: UserTypes.DELETE_USER,
      userId,
    };
  };
}
