import { create } from "zustand";
import { tokenStorage } from "../../utils/tokenStorage";

interface AuthState {
  refreshToken: string | null;
  setRefreshToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  refreshToken: tokenStorage.get(),
  setRefreshToken: (token) => {
    tokenStorage.set(token);
    set({ refreshToken: token });
  },
  clearToken: () => {
    tokenStorage.clear();
    set({ refreshToken: null });
  },
}));
