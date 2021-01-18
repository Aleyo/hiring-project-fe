// import { config } from 'src/config';

export namespace AuthApi {
  export interface LoginResponse {
    token: string;
  }

  export interface LoginBody {
    email: string;
    password: string;
  }

  // export const login = (body: LoginBody): Promise<LoginResponse> => {
  //   return request<LoginResponse, LoginBody>(
  //     `${config.api}/login/`,
  //     'post',
  //     {
  //       ...body,
  //       tokenType: 'web',
  //     },
  //   );
  // };
}
