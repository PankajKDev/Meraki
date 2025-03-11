import { Grid2 as Grid } from "@mui/material";
import CreateCard from "./CreateCard";
import MappableNote from "./MappableNote";

function NotesMapper() {
  return (
    <Grid
      sx={{ width: "100%", placeContent: "center", marginTop: "40px" }}
      container
      spacing={5}
    >
      <CreateCard />
      <MappableNote />
      <MappableNote />
      <MappableNote />
      <MappableNote />
      <MappableNote />
    </Grid>
  );
}

export default NotesMapper;
