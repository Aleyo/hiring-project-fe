import { objectToUrl, getAuthData } from 'src/lib/helpers';

export const request =  async <T, B = undefined> (
  url: string,
  method = 'get',
  body: B | undefined = undefined,
  headers = {},
): Promise<T> => {
  const token = getAuthData().token;
  const tarUrl = method === 'get' && typeof body === 'object'
    ? url + objectToUrl(body as {})
    : url;

  return fetch(tarUrl, {
    method: method.toUpperCase(),
    body: typeof body === 'object' && method !== 'get' ? JSON.stringify(body) : undefined,
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : undefined,
      ...headers,
    },
  }).then(async response => {
    const reject = (errors: string[]) => {
      return Promise.reject({
        status: response.status,
        errors,
      });
    };

    if (response.status === 400) {
      return reject(['Bad request']);
    } else if (response.status === 401) {
      return reject(['Unauthorized']);
    } if (response.status === 403) {
      return reject(['Forbidden']);
    } else if (response.status === 404) {
      return reject(['Requested URL does not exist']);
    } else if (response.status === 500) {
      return reject(['Internal server error']);
    } else if (response.status === 504) {
      return reject(['Request timed out']);
    }

    try {
      let data;

      if (response.status !== 204) {
        data = await response.json();
      }

      if (response.ok) {
        return data;
      }

      return reject(data[Object.keys(data)[0]]);
    } catch (e) {
      return reject(['Unknown error.']);
    }
  }).catch(err => {
    if (err.errors.length && typeof err.errors[0] === 'string') {
      return Promise.reject({
        status: err.status ? err.status : undefined,
        errors: typeof err.errors === 'string' ? [err.errors] : err.errors,
      });
    }

    return Promise.reject({ errors: ['Network error'] });
  });
};
