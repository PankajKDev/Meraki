import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import PropTypes from "prop-types";

function ModeIcon({ isDarkMode, changeMode }) {
  return (
    <Tooltip
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <IconButton onClick={changeMode}>
        {isDarkMode ? (
          <LightModeRounded sx={{ color: "yellow" }} />
        ) : (
          <DarkModeRounded sx={{ color: "orange" }} />
        )}
      </IconButton>
    </Tooltip>
  );
}

export default ModeIcon;
ModeIcon.propTypes = {
  title: PropTypes.string,
  isDarkMode: PropTypes.bool,
  changeMode: PropTypes.func,
};
