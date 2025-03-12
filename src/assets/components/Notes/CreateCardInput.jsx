import { Box, Modal, Typography, TextField, Rating } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { mood } from "../../constants";
import { Mood } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import useNoteStore from "../../../store/useNotesStore";
import NoteUpload from "../../utils/NoteUpload";
import SnackbarAlert from "../Reusable/SnackbarAlert";

function CreateCardInput({ handleOpen, open }) {
  const [hover, setHover] = useState(-1);
  const {
    NoteName,
    Note,
    NoteDate,
    changeDate,
    changeNoteName,
    changeNote,
    MoodRating,
    changeMoodRating,
  } = useNoteStore();
  const [alertOpen, setAlertOpen] = useState(false);
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${mood[value]}`;
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(!alertOpen);
  };

  return (
    <>
      <Modal open={open} onClose={handleOpen} sx={{ zIndex: 999 }}>
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
            autoComplete="off"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Note Name Input */}
            <TextField
              label="Note Name"
              variant="outlined"
              fullWidth
              value={NoteName}
              onChange={(e) => changeNoteName(e.target.value)}
            />

            {/* Note  Input */}
            <TextField
              label="Note"
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
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography sx={{ fontWeight: "600" }} variant="body1">
                Today&apos;s Mood:
              </Typography>
              <Rating
                icon={<Mood sx={{ color: "purple" }} />}
                name="hover-feedback"
                value={MoodRating}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  changeMoodRating(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <Mood style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {MoodRating !== null && (
                <Typography sx={{ ml: 2, color: "purple" }}>
                  {mood[hover !== -1 ? hover : MoodRating]}
                </Typography>
              )}
            </Box>

            {/* Submit Button */}
            <NoteUpload handleOpen={handleOpen} handleClose={handleClose} />
          </Box>
        </Box>
      </Modal>
      <SnackbarAlert
        open={alertOpen}
        handleClose={handleClose}
        severity="error"
        message="Note Name is mandatory"
      />
    </>
  );
}

export default CreateCardInput;

CreateCardInput.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
