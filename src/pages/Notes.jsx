import { Container, Typography } from "@mui/material";
import NotesMapper from "../assets/components/Notes/NotesMapper";

function Notes() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1">Notes</Typography>
      <NotesMapper />
    </Container>
  );
}

export default Notes;
