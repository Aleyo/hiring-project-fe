import store from 'src/init/createStore';
import { setAuthData } from 'src/lib/helpers';
import { AuthApi } from './api';
import { AuthTypes } from './types';

import { User } from 'src/models/User';

export namespace AuthActions {
  export const login = (body: AuthApi.LoginBody): Promise<AuthApi.LoginResponse> => {
    return AuthApi.login(body)
      .then(res => {
        setAuthData(res.accessToken, res.userId);
        store.dispatch(setAuth(res.accessToken, res.userId));

        return res;
      });
  };

  export const logout = (): void => {
    store.dispatch(removeAuth());
  };

  export const signUp = (body: AuthApi.SignUpBody): Promise<void> => {
    return AuthApi.signUp(body);
  };

  export const setAuth = (token: string, userId: string): AuthTypes.SetAuthAction => {
    return {
      type: AuthTypes.SET_AUTH,
      token,
      userId,
    };
  };

  export const removeAuth = (): AuthTypes.RemoveAuthAction => {
    return {
      type: AuthTypes.REMOVE_AUTH,
    };
  };

  export const setUser = (user: User): AuthTypes.SetUserAction => {
    return {
      type: AuthTypes.SET_USER,
      user,
    };
  };
}
