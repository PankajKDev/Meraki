import { useUser } from "@clerk/clerk-react";
import useTaskStore from "../../store/useTaskStore";
import { db } from "../../libs/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { Button } from "@mui/material";
import { submitButtonStyles } from "../constants/muiStyles";
import PropTypes from "prop-types";
import { useState } from "react";
import SnackbarAlert from "../components/Reusable/SnackbarAlert";

function TodoUpload({ handleOpen }) {
  const {
    TodoName,
    Priority,
    TaskDate,
    Label,
    Note,
    changeTaskName,
    changeNote,
  } = useTaskStore();
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
  function validation() {
    if (TodoName === "") {
      setOpen(true);
      return false;
    }
    return true;
  }
  async function TaskUpload() {
    if (!validation()) {
      return;
    }
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
      <SnackbarAlert
        open={open}
        handleClose={handleClose}
        severity="error"
        message="Note Name is mandatory"
      />
    </>
  );
}

export default TodoUpload;
TodoUpload.propTypes = {
  handleOpen: PropTypes.func,
};
