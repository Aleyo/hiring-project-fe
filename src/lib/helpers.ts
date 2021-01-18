export const getToken = (): string => {
  return localStorage.getItem('token');
};

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const logout = () => {
  localStorage.removeItem('token');
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
