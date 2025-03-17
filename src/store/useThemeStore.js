import { create } from "zustand";

const useThemeStore = create((set) => ({
  isDarkMode: false,
  changeMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useThemeStore;
