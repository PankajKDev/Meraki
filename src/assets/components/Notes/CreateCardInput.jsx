import { Box, Modal, Typography, TextField, Rating } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { mood } from "../../constants";
import { Mood } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import useNoteStore from "../../../store/useNotesStore";
import NoteSubmitButton from "./NoteSubmitButton";

function CreateCardInput({ handleOpen, open }) {
  const [rating, setRating] = useState(2);
  const [hover, setHover] = useState(-1);
  const {
    NoteName,
    Note,
    NoteDate,
    changeDate,
    changeNoteName,
    changeNote,
    errors,
  } = useNoteStore();

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${mood[value]}`;
  }

  return (
    <Modal open={open} onClose={handleOpen}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: 400, sm: 400, md: 600 },
          bgcolor: "background.default",
          boxShadow: "12px #000000",
          p: 4,
          borderRadius: "12px",
        }}
      >
        <Typography variant="h1" sx={{ textAlign: "center", mb: 2 }}>
          Create Note
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Note Name Input */}
          <TextField
            error={!!errors.NoteName}
            helperText={errors.NoteName}
            label="Note Name"
            variant="outlined"
            fullWidth
            value={NoteName}
            onChange={(e) => changeNoteName(e.target.value)}
          />

          {/* Note  Input */}
          <TextField
            label="Note Content"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={Note}
            onChange={(e) => changeNote(e.target.value)}
          />
          {/* Date Input */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: "100%" }}
              onChange={(newValue) => changeDate(newValue)}
              value={NoteDate}
              inputFormat="DD-MM-YYYY"
              minDate={dayjs(new Date())}
              maxDate={dayjs(new Date()).add(1, "year")}
              label="Note date"
            />
          </LocalizationProvider>
          {/* Rating Input */}
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography variant="body1">Rating:</Typography>
            <Rating
              icon={<Mood />}
              name="hover-feedback"
              value={rating}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<Mood style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {rating !== null && (
              <Box sx={{ ml: 2 }}>{mood[hover !== -1 ? hover : rating]}</Box>
            )}
          </Box>

          {/* Submit Button */}
          <NoteSubmitButton />
        </Box>
      </Box>
    </Modal>
  );
}

export default CreateCardInput;

CreateCardInput.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
