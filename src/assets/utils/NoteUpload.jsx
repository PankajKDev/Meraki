import { Button } from "@mui/material";

import useNoteStore from "../../store/useNotesStore";
import PropTypes from "prop-types";
import { useUser } from "@clerk/clerk-react";
import {
  addDoc,
  collection,
  doc,
  increment,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../libs/firebase";
import { NoteSubmitButtonStyles } from "../constants/muiStyles";
function NoteUpload({ handleOpen, handleClose }) {
  const {
    NoteName,
    Note,
    NoteDate,
    changeNoteName,
    changeNote,
    MoodRating,
    changeMoodRating,
  } = useNoteStore();

  const { user } = useUser();
  const NoteData = {
    user: user.id,
    note_name: NoteName,
    note_content: Note,
    note_date: Timestamp.fromDate(NoteDate.toDate()),
    mood_rating: MoodRating,
    pinned: false,
  };
  function inputReset() {
    changeNoteName("");
    changeNote("");
    changeMoodRating(2);
  }
  function validation() {
    if (NoteName === "") {
      handleClose();
      return false;
    }
    return true;
  }
  async function NoteUpload() {
    if (!validation()) {
      return;
    }
    const NoteRef = collection(db, "Notes");
    const UserRef = doc(db, "Users", user.id);
    await addDoc(NoteRef, { ...NoteData });
    await updateDoc(UserRef, {
      notesCreated: increment(1),
    });
    inputReset();
    handleOpen();
  }
  return (
    <>
      <Button
        onClick={NoteUpload}
        variant="contained"
        color="primary"
        sx={NoteSubmitButtonStyles}
      >
        Submit
      </Button>
    </>
  );
}

export default NoteUpload;
NoteUpload.propTypes = {
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
};
