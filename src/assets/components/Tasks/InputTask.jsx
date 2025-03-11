import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import useTaskStore from "../../../store/useTaskStore";
//adapters
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import {
  formContainerStyles,
  selectStyles,
  TextAreaStyles,
  textFieldStyles,
} from "../../constants/muiStyles";
import { LABELS, PRIORITY_NAMES } from "../../constants";
import TodoUpload from "../../utils/TodoUpload";
import { Close } from "@mui/icons-material";
import PropTypes from "prop-types";
function InputTask({ handleOpen, open, theme }) {
  const {
    TodoName,
    Priority,
    TaskDate,
    Label,
    Note,
    changeTaskName,
    changePriority,
    changeDate,
    changeLabel,
    changeNote,
    errors,
  } = useTaskStore();

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "200px",
        overflowY: "auto",
      },
    },
  };

  return (
    <>
      <Modal open={open} onClose={handleOpen} sx={{ zIndex: 999 }}>
        <Container
          sx={{
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            variant="div"
            sx={{
              width: { xs: "90%", sm: "50%", md: "50%" },
              height: "fit-content",
              background: "white",
              paddingBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                width: "full",
                display: "flex",
                justifyContent: "space-between",
                bgcolor: "black",
                padding: "15px",
                borderRadius: "10px 10px 0px 0px",
                fontFamily: theme.typography.body1,
                color: "white",
              }}
            >
              Add Tasks
              <Close onClick={handleOpen} sx={{ cursor: "pointer" }} />
            </Box>
            <Box component="div" sx={formContainerStyles}>
              <TextField
                fullWidth
                error={!!errors.TodoName}
                helperText={errors.TodoName}
                onChange={(e) => changeTaskName(e.target.value)}
                value={TodoName}
                label="Todo Name"
                name="name"
                sx={textFieldStyles}
              />
              <FormControl fullWidth sx={{ maxWidth: "80%" }}>
                <InputLabel>Priority</InputLabel>
                <Select
                  onChange={(e) => changePriority(e.target.value)}
                  value={Priority}
                  defaultValue="priority 1"
                  name="Priority"
                  label="Priority"
                  sx={selectStyles}
                >
                  {PRIORITY_NAMES.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box
                sx={{
                  display: "flex",
                  width: "80%",
                  justifyContent: "space-between",
                }}
              >
                {/* Date */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{ width: "50%" }}
                    onChange={(newValue) => changeDate(newValue)}
                    value={TaskDate}
                    inputFormat="DD-MM-YYYY"
                    minDate={dayjs(new Date())}
                    maxDate={dayjs(new Date()).add(1, "year")}
                    label="Task date"
                  />
                </LocalizationProvider>
                <FormControl sx={{ width: "40%" }}>
                  <InputLabel>Labels</InputLabel>
                  <Select
                    value={Label}
                    defaultValue="work"
                    MenuProps={MenuProps}
                    onChange={(e) => changeLabel(e.target.value)}
                    name="Labels"
                    label="Labels"
                    sx={{ selectStyles }}
                  >
                    {LABELS.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <TextField
                value={Note}
                onChange={(e) => changeNote(e.target.value)}
                multiline
                rows={3}
                variant="outlined"
                placeholder="Type your note here..."
                sx={TextAreaStyles}
              />
              <TodoUpload handleOpen={handleOpen} />
            </Box>
          </Box>
        </Container>
      </Modal>
    </>
  );
}

export default InputTask;
InputTask.propTypes = {
  handleOpen: PropTypes.func,
  open: PropTypes.bool,
  theme: PropTypes.object,
};
