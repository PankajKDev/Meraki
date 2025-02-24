import { ListItem, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";

function TextInput({ value, label, onChangeValue }) {
  return (
    <>
      <ListItem sx={{ width: "400px" }}>
        <TextField
          sx={{ width: "60%" }}
          value={value}
          id="outlined-number"
          onChange={(e) => onChangeValue(e.target.value)}
          label={label}
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
            input: {
              min: 1,
              max: 90,
            },
            htmlInput: {
              min: 1,
              max: 90,
            },
          }}
        />
        <Typography variant="h6" sx={{ marginLeft: "10px", fontSize: "15px" }}>
          minutes
        </Typography>
      </ListItem>
    </>
  );
}

export default TextInput;

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  onChangeValue: PropTypes.func,
};
