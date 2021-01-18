// import store from 'src/init/createStore';
// import { setToken } from 'src/lib/helpers';
// import { AuthApi } from './api';
import { AuthTypes } from './types';

export namespace AuthActions {
  // export const login = (body: AuthApi.LoginBody): Promise<AuthApi.LoginResponse> => {
  //   return AuthApi.login(body)
  //     .then(res => {
  //       setToken(res.token);
  //       store.dispatch(setAuth(res));

  //       return res;
  //     });
  // };

  export const setAuth = (token: string): AuthTypes.SetAuthAction => {
    return {
      type: AuthTypes.SET_AUTH,
      token,
    };
  };
}
