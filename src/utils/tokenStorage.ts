const REFRESH_TOKEN_KEY = "refreshToken";

export const tokenStorage = {
  get: () => localStorage.getItem(REFRESH_TOKEN_KEY),
  set: (token: string) => localStorage.setItem(REFRESH_TOKEN_KEY, token),
  clear: () => localStorage.removeItem(REFRESH_TOKEN_KEY),
};
