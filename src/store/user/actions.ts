import store from 'src/init/createStore';
import { getAuthData } from 'src/lib/helpers';
import { AuthActions } from 'src/store/auth/actions';
import { UserApi } from './api';
// import { UserTypes } from './types';

export namespace UsersActions {
  export const getUser = (userId: string): Promise<UserApi.GetUserResponse> => {
    return UserApi.getUser(userId)
      .then(res => {
        if (getAuthData().userId === userId) {
          const { token, userId } = getAuthData();

          store.dispatch(AuthActions.setUser(res));
          store.dispatch(AuthActions.setAuth(token, userId));
        }

        return res;
      });
  };
}
