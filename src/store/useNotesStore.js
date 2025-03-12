import { create } from "zustand";
import dayjs from "dayjs";
const useNoteStore = create((set) => ({
  NoteName: "",
  MoodRating: 2,
  Note: "",
  NoteDate: dayjs(),
  changeNoteName: (value) => set(() => ({ NoteName: value })),
  changeMoodRating: (value) => set(() => ({ MoodRating: value })),
  changeDate: (value) =>
    set(() => ({ NoteDate: value ? value : dayjs(value) })),
  changeNote: (value) => set(() => ({ Note: value })),
}));

export default useNoteStore;
