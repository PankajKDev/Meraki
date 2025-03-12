import { Grid2 as Grid } from "@mui/material";
import CreateCard from "./CreateCard";
import MappableNote from "./MappableNote";
import useNoteUtil from "../../utils/useNoteUtil";

function NotesMapper() {
  const { data, deleteNote, pinNote } = useNoteUtil();
  const sortedData = data.sort((a, b) => b.pinned - a.pinned);
  return (
    <>
      <Grid
        sx={{ width: "100%", placeContent: "center", marginTop: "40px" }}
        container
        spacing={5}
      >
        <CreateCard />
        {sortedData.map((item) => (
          <MappableNote
            key={item.id}
            id={item.id}
            moodRating={item.mood_rating}
            content={item.note_content}
            date={item.note_date}
            isPinned={item.pinned}
            name={item.note_name}
            pinNote={() => pinNote(item.id, item.pinned)}
            deleteNote={() => deleteNote(item.id)}
          />
        ))}
      </Grid>
    </>
  );
}

export default NotesMapper;
