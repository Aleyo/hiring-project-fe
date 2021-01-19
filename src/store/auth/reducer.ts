import { Action } from 'src/store/action';
import { AuthTypes } from './types';

const initialState: AuthTypes.AuthState = {
};

export function authReducer(
  state = initialState,
  action: Action,
): AuthTypes.AuthState {
  switch (action.type) {
    case AuthTypes.REMOVE_AUTH:
      return { };
    case AuthTypes.SET_AUTH: {
      const auth = (action as AuthTypes.SetAuthAction);

      return {
        ...state,
        token: auth.token,
        userId: auth.userId,
      };
    }
    case AuthTypes.SET_USER: {
      const user = (action as AuthTypes.SetUserAction).user;

      return {
        ...state,
        user,
      };
    }
    default:
      return state;
  }
}
