import { Action } from 'src/store/action';
import { UserTypes } from './types';

const initialState: UserTypes.AuthState = {
};

export function userReducer(
  state = initialState,
  action: Action,
): UserTypes.AuthState {
  switch (action.type) {
    default:
      return state;
  }
}
