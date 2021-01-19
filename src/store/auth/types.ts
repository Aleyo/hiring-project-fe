import { Action } from 'src/store/action';
import { User } from 'src/models/User';

export namespace AuthTypes {
  export const REMOVE_AUTH = 'auth/REMOVE_AUTH';
  export const SET_AUTH = 'auth/SET_AUTH';
  export const SET_USER = 'auth/SET_USER';

  export interface AuthState {
    token?: string;
    userId?: string;
    user?: User;
  }

  export interface RemoveAuthAction extends Action {}

  export interface SetAuthAction extends Action {
    token: string;
    userId: string;
  }

  export interface SetUserAction extends Action {
    user: User;
  }
}
