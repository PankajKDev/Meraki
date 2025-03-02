import { create } from "zustand";

const usePomodoroStore = create((set) => ({
  Focus: 25,
  ShortBreak: 5,
  LongBreak: 15,
  changePomodoro: (value) => set(() => ({ Focus: Number(value) })),
  changeShortBreak: (value) => set(() => ({ ShortBreak: Number(value) })),
  changeLongBreak: (value) => set(() => ({ LongBreak: Number(value) })),
}));

export default usePomodoroStore;
