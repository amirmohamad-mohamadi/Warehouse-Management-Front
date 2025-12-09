import { create } from "zustand";
import { tokenStorage } from "../../utils/tokenStorage";

type User = {
  id: string;
  username?: string;
  email?: string;
};

type AuthState = {
  user: User | null;
  refreshToken: string | null;
  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
};

// مقدار اولیه رو از localStorage بخون
const storedAuth = tokenStorage.get();
const parsedAuth = storedAuth ? JSON.parse(storedAuth) : null;

export const useAuthStore = create<AuthState>((set) => ({
  user: parsedAuth?.user ?? null,
  refreshToken: parsedAuth?.refreshToken ?? null,

  setAuth: (user, token) => {
    tokenStorage.set(JSON.stringify({ user, refreshToken: token }));
    set({ user, refreshToken: token });
  },

  clearAuth: () => {
    tokenStorage.clear();
    set({ user: null, refreshToken: null });
  },
}));
