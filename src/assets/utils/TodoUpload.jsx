import { useUser } from "@clerk/clerk-react";
import useTaskStore from "../../store/useTaskStore";
import { db } from "../../libs/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { Button } from "@mui/material";
import { submitButtonStyles } from "../constants/muiStyles";
import PropTypes from "prop-types";

function TodoUpload({ handleOpen }) {
  const {
    TodoName,
    Priority,
    TaskDate,
    Label,
    Note,
    validate,
    changeTaskName,
    changeNote,
  } = useTaskStore();
  const { user, isSignedIn } = useUser();
  if (!isSignedIn) {
    throw new Error("User not signed in");
  }
  const todoData = {
    user: user.id,
    tname: TodoName,
    priority: Priority,
    tdate: Timestamp.fromDate(TaskDate.toDate()),
    label: Label,
    note: Note,
    completed: false,
  };
  function inputReset() {
    changeTaskName("");
    changeNote("");
  }
  async function TaskUpload() {
    await validate();
    const TodoRef = collection(db, "Todos");
    await addDoc(TodoRef, { ...todoData });
    inputReset();
    handleOpen();
  }
  return (
    <>
      <Button onClick={TaskUpload} sx={submitButtonStyles} variant="outlined">
        Submit
      </Button>
    </>
  );
}

export default TodoUpload;
TodoUpload.propTypes = {
  handleOpen: PropTypes.func,
};
