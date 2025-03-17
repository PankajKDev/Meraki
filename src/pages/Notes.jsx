import { Container, Typography } from "@mui/material";
import MappedNotes from "../assets/components/Notes/MappedNotes";
import { pageContainer } from "../assets/constants/muiStyles";

function Notes() {
  return (
    <Container maxWidth="lg" sx={pageContainer}>
      <Typography variant="h1">Notes</Typography>
      <MappedNotes />
    </Container>
  );
}

export default Notes;
