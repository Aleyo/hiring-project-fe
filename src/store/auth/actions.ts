import store from 'src/init/createStore';
import { setAuthData } from 'src/lib/helpers';
import { AuthApi } from './api';
import { AuthTypes } from './types';

export namespace AuthActions {
  export const login = (body: AuthApi.LoginBody): Promise<AuthApi.LoginResponse> => {
    return AuthApi.login(body)
      .then(res => {
        setAuthData(res.accessToken, res.userId);
        store.dispatch(setAuth(res.accessToken, res.userId));

        return res;
      });
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
}
