import { config } from 'src/config';
import { request } from 'src/lib/request';

import { User } from 'src/models/User';

export namespace UserApi {
  export type GetUserResponse = User;

  export const getUser = (userId: string): Promise<GetUserResponse> => {
    return request<GetUserResponse>(`${config.api}/users/${userId}`);
  };
}
