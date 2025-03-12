import { Card, CardContent, Grid2 as Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import NoteIcon from "./NoteIcon";
import ReadMoreModal from "./ReadMoreModal";
import PropTypes from "prop-types";

function MappableNote({
  moodRating,
  content,
  date,
  name,
  deleteNote,
  pinNote,
  isPinned,
}) {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <>
      <Grid size={{ xs: 10, sm: 8, md: 4 }}>
        <Card
          sx={{
            width: "100%",
            height: "300px",
            background: "linear-gradient(to bottom, #fefefe, #f8f9fa)",
          }}
        >
          <CardContent>
            <Typography variant="body1" sx={{ textAlign: "right" }}>
              Date : {dayjs().format("DD-MM-YYYY").toString()}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "24px",
              }}
            >
              {name}
            </Typography>
            <Typography
              onClick={handleOpen}
              variant="body1"
              sx={{
                marginTop: "10px",
                fontSize: "14px",
                display: "-webkit-box",
                height: "150px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 7, // Number of lines to display
                WebkitBoxOrient: "vertical",
                cursor: "pointer",
              }}
            >
              {/* i mean this typography */}
              {content}
            </Typography>
            <NoteIcon
              moodRating={moodRating}
              deleteNote={deleteNote}
              isPinned={isPinned}
              pinNote={pinNote}
            />
          </CardContent>
        </Card>
      </Grid>
      <ReadMoreModal
        open={open}
        handleOpen={handleOpen}
        date={date}
        content={content}
        moodRating={moodRating}
        name={name}
      />
    </>
  );
}

export default MappableNote;

MappableNote.propTypes = {
  moodRating: PropTypes.number,
  date: PropTypes.object,
  content: PropTypes.string,
  name: PropTypes.string,
  deleteNote: PropTypes.func,
  pinNote: PropTypes.func,
  isPinned: PropTypes.bool,
};
