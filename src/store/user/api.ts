import { config } from 'src/config';
import { request } from 'src/lib/request';

import { User } from 'src/models/User';

export namespace UserApi {
  export type GetUserResponse = User;

  export const getUser = (userId: string): Promise<GetUserResponse> => {
    return request<GetUserResponse>(`${config.api}/users/${userId}`);
  };

  export type PostUserResponse = User;

  export interface PostUserBody {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }

  export const postUser = (body: PostUserBody): Promise<PostUserResponse> => {
    return request<PostUserResponse, PostUserBody>(
      `${config.api}/users`,
      'post',
      { ...body },
    );
  };

  export const deleteUser = (userId: string): Promise<void> => {
    return request(
      `${config.api}/users/${userId}`,
      'delete',
    );
  };

  export type GetUsersResponse = User[];

  export const getUsers = (): Promise<GetUsersResponse> => {
    return request<GetUsersResponse>(`${config.api}/users`);
  };
}
