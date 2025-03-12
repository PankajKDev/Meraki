import { create } from "zustand";
import dayjs from "dayjs";
const useNoteStore = create((set) => ({
  NoteName: "",
  MoodRating: 2,
  Note: "",
  NoteDate: dayjs(),
  errors: {},
  changeNoteName: (value) => set(() => ({ NoteName: value })),
  changeMoodRating: (value) => set(() => ({ MoodRating: value })),
  changeDate: (value) =>
    set(() => ({ NoteDate: value ? value : dayjs(value) })),
  changeNote: (value) => set(() => ({ Note: value })),
  validate: () => {
    set((state) => {
      const errors = {};
      if (!state.NoteName) {
        errors.NoteName = "Note name is required";
      }
      return { errors };
    });
  },
}));

export default useNoteStore;
