import { config } from 'src/config';

import { request } from 'src/lib/request';

export namespace AuthApi {
  export interface LoginResponse {
    accessToken: string;
    userId: string;
  }

  export interface LoginBody {
    email: string;
    password: string;
  }

  export const login = (body: LoginBody): Promise<LoginResponse> => {
    return request<LoginResponse, LoginBody>(
      `${config.api}/login`,
      'post',
      { ...body },
    );
  };

  export interface SignUpBody {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }

  export const signUp = (body: SignUpBody): Promise<void> => {
    return request<null, SignUpBody>(
      `${config.api}/signUp`,
      'post',
      {
        ...body,
      },
    );
  };
}
