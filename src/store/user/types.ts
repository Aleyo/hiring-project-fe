// import { Action } from 'src/store/action';
import { User } from 'src/models/User';

export namespace UserTypes {
  // export const SET_USER = 'auth/SET_USER';

  export interface AuthState {
    users?: User[];
  }
}
