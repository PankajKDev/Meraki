// Styled components in a separate export constants file (recommended)
export const formContainerStyles = {
  width: "100%",
  height: "100%",
  display: "flex",
  gap: "15px",
  alignItems: "center",
  flexDirection: "column",
};

export const textFieldStyles = {
  mt: "20px",
  maxWidth: "80%",
  height: "70px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "black" },
    "&:hover fieldset": { borderColor: "black" },
    "&.Mui-focused fieldset": { borderColor: "black" },
  },
};

export const selectStyles = {
  "& .MuiSelect-icon": { color: "black" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "black",
    borderWidth: 2,
  },
};

export const submitButtonStyles = {
  bgcolor: "black",
  color: "white",
  ":hover": {
    background: "white",
    color: "black",
  },
};

export const TextAreaStyles = {
  width: "80%",
  maxHeight: "120px",
  overflow: "auto",
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "black" },
    "&:hover fieldset": { borderColor: "black" },
    "&.Mui-focused fieldset": { borderColor: "black" },
  },
};

export const NoteSubmitButtonStyles = {
  bgcolor: "black",
  color: "white",
  mt: 2,
  alignSelf: "center",
  width: "fit-content",
  px: 4,
  py: 1,
  borderRadius: "8px",
  ":hover": {
    background: "white",
    color: "black",
  },
};
