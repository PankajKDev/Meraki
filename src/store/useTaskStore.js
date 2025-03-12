import { create } from "zustand";
import dayjs from "dayjs";
const useTaskStore = create((set) => ({
  TodoName: "",
  Priority: "priority 1",
  TaskDate: dayjs(),
  Label: "work",
  Note: "",
  changeTaskName: (value) => set(() => ({ TodoName: value })),
  changePriority: (value) => set(() => ({ Priority: value })),
  changeDate: (value) =>
    set(() => ({ TaskDate: value ? value : dayjs(value) })),
  changeLabel: (value) => set(() => ({ Label: value })),
  changeNote: (value) => set(() => ({ Note: value })),
}));

export default useTaskStore;
