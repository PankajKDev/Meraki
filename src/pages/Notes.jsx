import { Container, Typography } from "@mui/material";
import NotesMapper from "../assets/components/Notes/NotesMapper";
import { pageContainer } from "../assets/constants/muiStyles";

function Notes() {
  return (
    <Container maxWidth="lg" sx={pageContainer}>
      <Typography variant="h1">Notes</Typography>
      <NotesMapper />
    </Container>
  );
}

export default Notes;
