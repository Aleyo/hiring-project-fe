import { Action } from 'src/store/action';
import { AuthTypes } from './types';

const initialState: AuthTypes.AuthState = {
  token: undefined,
};

export function authReducer(
  state = initialState,
  action: Action,
): AuthTypes.AuthState {
  switch (action.type) {
    case AuthTypes.REMOVE_AUTH:
      return { };
    case AuthTypes.SET_AUTH: {
      const token = (action as AuthTypes.SetAuthAction).token;

      return {
        ...state,
        token,
      };
    }
    default:
      return state;
  }
}
