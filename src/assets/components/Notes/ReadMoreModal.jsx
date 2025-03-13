import { Box, Modal, Typography } from "@mui/material";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { mood } from "../../constants";

function ReadMoreModal({ open, handleOpen, date, content, moodRating, name }) {
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
        <Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              gap: "20px",
            }}
            id="modal-modal-title"
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Noto Sans",
                  fontWeight: "500",
                  fontSize: "32px",
                }}
              >
                {name}
              </Typography>
              <Typography sx={{ fontFamily: "Noto Sans", fontSize: "16px" }}>
                {dayjs(date.toDate()).format("DD MMM YYYY")}
              </Typography>
            </Box>
            <Typography sx={{ color: "orange" }}>
              Mood: {mood[moodRating]}
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            mt: 2,
            height: 400,
            overflowY: "auto",
          }}
        >
          {content}
        </Typography>
      </Box>
    </Modal>
  );
}

export default ReadMoreModal;

ReadMoreModal.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func,
  date: PropTypes.string,
  content: PropTypes.string,
  name: PropTypes.string,
  moodRating: PropTypes.string,
};
