import { create } from "zustand";

const useThemeStore = create((set) => ({
  isDarkMode: true,
  changeMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useThemeStore;
