const TOKEN_NAME = 'HP-token';
const USER_ID_NAME = 'HP-user';

export const getAuthData = (): { token: string, userId: string } => {
  return {
    token: localStorage.getItem(TOKEN_NAME),
    userId: localStorage.getItem(USER_ID_NAME),
  };
};

export const setAuthData = (token: string, userId: string) => {
  localStorage.setItem(TOKEN_NAME, token);
  localStorage.setItem(USER_ID_NAME, userId);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_NAME);
  localStorage.removeItem(USER_ID_NAME);
};

export interface ObjectToUrlProps {
    [key: string]: string[] | string | number[] | number;
}

export const objectToUrl = (obj: ObjectToUrlProps): string => {
  let outUrl = '?';

  Object.keys(obj).forEach(e => {
    if (obj[e]) {
      if (Array.isArray(obj[e]) && !(obj[e] as []).length) { return; }

      if (outUrl === '?') {
        if (Array.isArray(obj[e])) {
          outUrl +=
            `${e}=${(obj[e] as Array<string | number>)
              .map(i => encodeURIComponent(i))
              .join(',')}`;
        } else {
          outUrl += `${e}=${encodeURIComponent(String(obj[e]))}`;
        }
      } else {
        if (Array.isArray(obj[e])) {
          outUrl +=
            `&${e}=${(obj[e] as Array<string | number>)
              .map(i => encodeURIComponent(i))
              .join(',')}`;
        } else {
          outUrl += `&${e}=${encodeURIComponent(String(obj[e]))}`;
        }
      }
    }
  });

  return outUrl;
};
