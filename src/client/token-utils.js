import Cookies from 'js-cookie';


const AUTH_TOKEN_KEY = 'adminToken';

export const setAuthToken = (token) => {
  Cookies.set(AUTH_TOKEN_KEY, token);
};

export const getAuthToken = () => {
  return Cookies.get(AUTH_TOKEN_KEY);
};

export const removeAuthToken = () => {
  Cookies.remove(AUTH_TOKEN_KEY);
};

export function checkHasAuthToken() {
  const token = Cookies.get(AUTH_TOKEN_KEY);
  if (!token) return false;
  return true;
}