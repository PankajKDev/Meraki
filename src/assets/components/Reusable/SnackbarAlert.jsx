import { Snackbar, Alert } from "@mui/material";
import PropTypes from "prop-types";

const SnackbarAlert = ({ open, handleClose, message, severity }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={1500}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ fontFamily: "Noto Sans" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

SnackbarAlert.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(["success", "error", "warning", "info"]).isRequired,
};

export default SnackbarAlert;
