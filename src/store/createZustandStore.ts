import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { StateCreator, StoreApi, UseBoundStore } from "zustand";

export function createZustandStore<T>(
  initializer: StateCreator<T, [["zustand/devtools", never]], []>,
  name: string
): UseBoundStore<StoreApi<T>> {
  if (process.env.NODE_ENV === "development") {
    return create<T>()(devtools(initializer, { name }));
  }

  // NOTE: In production, the initializer should run without devtools.
  const plainInitializer: StateCreator<T, [], []> = initializer as StateCreator<
    T,
    [],
    []
  >;
  return create<T>()(plainInitializer);
}
