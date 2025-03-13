import { Delete, EmojiEmotions, MoodBad, Star } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { mood } from "../../constants";
import PropTypes from "prop-types";

function NoteIcon({ moodRating, deleteNote, pinNote, isPinned }) {
  return (
    <Box
      sx={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {moodRating < 2 ? (
          <>
            <MoodBad sx={{ color: "purple" }} />
            <Typography sx={{ color: "purple" }}>{mood[moodRating]}</Typography>
          </>
        ) : (
          <>
            <EmojiEmotions sx={{ color: "orange" }} />
            <Typography sx={{ color: "orange" }}>{mood[moodRating]}</Typography>
          </>
        )}
      </Box>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Tooltip title={isPinned ? "unpin note" : "pin note"}>
          <IconButton
            onClick={pinNote}
            sx={{
              background: isPinned ? "green" : "white",
              border: "1px solid",
              color: isPinned ? "white" : "green",
              ":hover": {
                color: "inherit",
              },
            }}
          >
            <Star />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Note">
          <IconButton
            onClick={deleteNote}
            sx={{
              border: "1px solid red",
              background: "red",
              color: "white",
              ":hover": {
                color: "red",
                background: "white",
              },
            }}
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default NoteIcon;
NoteIcon.propTypes = {
  moodRating: PropTypes.number,
  deleteNote: PropTypes.func,
  pinNote: PropTypes.func,
  isPinned: PropTypes.bool,
};
