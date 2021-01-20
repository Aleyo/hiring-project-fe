import { Action } from 'src/store/action';
import { User } from 'src/models/User';

export namespace UserTypes {
  export const SET_USERS = 'auth/SET_USERS';
  export const ADD_USER = 'auth/ADD_USER';
  export const DELETE_USER = 'auth/DELETE_USER';

  export interface AuthState {
    userList?: User[];
  }

  export interface SetUsersAction extends Action {
    userList: User[];
  }

  export interface AddUserAction extends Action {
    user: User;
  }

  export interface DeleteUserAction extends Action {
    userId: string;
  }
}
