import { Grid2 as Grid } from "@mui/material";
import CreateCard from "./CreateCard";
import NoteCard from "./NoteCard";
import useNoteUtil from "../../utils/useNoteUtil";

function MappedNotes() {
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
          <NoteCard
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

export default MappedNotes;
