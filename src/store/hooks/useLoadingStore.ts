import { createZustandStore } from "../createZustandStore";

type LoadingState = {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
};

export const useLoadingStore = createZustandStore<LoadingState>(
  (set) => ({
    isLoading: false,
    setLoading: (loading) => set({ isLoading: loading }),
  }),
  "LoadingStore"
);
