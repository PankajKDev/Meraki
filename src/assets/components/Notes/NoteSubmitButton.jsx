import { Button } from "@mui/material";
import { NoteSubmitButtonStyles } from "../../constants/muiStyles";

function NoteSubmitButton() {
  return (
    <Button variant="contained" color="primary" sx={NoteSubmitButtonStyles}>
      Submit
    </Button>
  );
}

export default NoteSubmitButton;
