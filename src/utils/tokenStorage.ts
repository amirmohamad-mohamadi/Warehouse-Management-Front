const AUTH_DATA_KEY = "authData";

export const tokenStorage = {
  get: () => localStorage.getItem(AUTH_DATA_KEY),
  set: (token: string) => localStorage.setItem(AUTH_DATA_KEY, token),
  clear: () => localStorage.removeItem(AUTH_DATA_KEY),
};
