import axios, { type AxiosInstance } from 'axios';

/**
 * api: central Axios instance.
 *
 * Business logic:
 * - Attaches token (if present) to each request so backend can authenticate.
 * - Handles global 401: clears auth and logs out user to avoid inconsistent state.
 *
 */

export const api: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers ?? {};
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      // on 401 clear local auth and dispatch logout for predicatable app state.
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    return Promise.reject(error);
  }
);
