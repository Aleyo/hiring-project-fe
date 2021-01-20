import { Action } from 'src/store/action';
import { UserTypes } from './types';

const initialState: UserTypes.AuthState = {
};

export function userReducer(
  state = initialState,
  action: Action,
): UserTypes.AuthState {
  switch (action.type) {
    case UserTypes.SET_USERS: {
      const userList = (action as UserTypes.SetUsersAction).userList;

      return {
        ...state,
        userList,
      };
    }
    case UserTypes.ADD_USER: {
      const user = (action as UserTypes.AddUserAction).user;

      return {
        ...state,
        userList: [
          user,
          ...state.userList,
        ],
      };
    }
    case UserTypes.DELETE_USER: {
      const userId = (action as UserTypes.DeleteUserAction).userId;

      const newUserList = state.userList.filter(i => i.id !== userId);

      return {
        ...state,
        userList: [ ... newUserList ],
      };
    }
    default:
      return state;
  }
}
