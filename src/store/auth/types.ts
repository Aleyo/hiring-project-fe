import { Action } from 'src/store/action';

export namespace AuthTypes {
  export const REMOVE_AUTH = 'auth/REMOVE_AUTH';
  export const SET_AUTH = 'auth/SET_AUTH';

  export interface AuthState {
    token?: string;
  }

  export interface RemoveAuthAction extends Action {}

  export interface SetAuthAction extends Action {
    token: string;
  }
}
