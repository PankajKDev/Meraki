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
        <Tooltip title="Pin Note">
          <IconButton
            onClick={pinNote}
            sx={{
              border: "1px solid #000",
              background: isPinned ? "purple" : "white",
              color: isPinned ? "white" : "purple",
              ":hover": {
                color: "purple",
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
              border: "1px solid purple",
              background: "purple",
              color: "white",
              ":hover": {
                color: "purple",
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
