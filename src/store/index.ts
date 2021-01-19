import { combineReducers } from 'redux';
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
} from 'react-redux';

import { authReducer } from 'src/store/auth/reducer';
import { userReducer } from 'src/store/user/reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = useReduxDispatch;
