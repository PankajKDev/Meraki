import { Delete, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import useTodoRead from "../../utils/useTodoRead";
import dayjs from "dayjs";

function LabelMapper({ AccordionName }) {
  function DateFilter(date) {
    if (AccordionName === "Today") {
      const status = dayjs(date.tdate.toDate()).isSame(dayjs(), "day");
      return status;
    } else if (AccordionName === "Later") {
      const status = dayjs(date.tdate.toDate()).isAfter(dayjs(), "day");
      return status;
    } else if (AccordionName === "Overdue") {
      const status = dayjs(date.tdate.toDate()).isBefore(dayjs(), "day");
      return status;
    }
  }

  function PriorityColor(priority) {
    if (priority === "priority 1") {
      return "#FF7043";
    } else if (priority === "priority 2") {
      return "#FFC107";
    } else {
      return "#4CAF50";
    }
  }
  const { data, todoComplete, deleteTodo } = useTodoRead();
  const filteredTasks = data.filter(DateFilter);
  return (
    <Accordion
      defaultExpanded
      elevation={0}
      sx={{
        width: "100%",
        marginTop: "10px",
        ":before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "24px",
          }}
        >
          {AccordionName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <Chip
            size="small"
            label={`${filteredTasks.length} pending tasks`}
            sx={{ backgroundColor: "#fff3bf", color: "#e67700" }}
          />
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            width: {
              xs: "100%",
              sm: "100%",
              md: "80%",
            },
            margin: "auto",
          }}
        >
          {/* Task 1 */}

          {filteredTasks.map((item) => (
            <Accordion
              key={item.id}
              elevation={0}
              sx={{
                fontFamily: "sans-serif",
                textShadow: "1px rgba(0, 0, 0, 0.5)",
                width: "100%",
                padding: "4px 12px",
                borderRadius: "4px",
                display: "inline-block",
                border: "1px solid black",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "90%",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    variant="div"
                    sx={{ display: "flex", alignItems: "center", gap: "15px" }}
                  >
                    <Checkbox
                      onChange={() => {
                        todoComplete(item.id);
                      }}
                      sx={{
                        p: 0,
                        mr: 2,
                        color: "#888",
                        "&.Mui-checked": {
                          color: "#2e7d32",
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      {item.tname}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        sm: "flex",
                        md: "flex",
                      },
                      gap: "10px",
                    }}
                  >
                    <Chip
                      size="small"
                      label={item.label}
                      sx={{
                        backgroundColor: "#FFFFFF",
                        color: "#000000",
                        border: "1px solid black",
                      }}
                    />
                    <Chip
                      size="small"
                      label={item.priority}
                      sx={{
                        backgroundColor: PriorityColor(item.priority),
                        color: "#ffffff",
                      }}
                    />
                  </Box>
                  <IconButton onClick={() => deleteTodo(item.id)}>
                    <Delete sx={{ fill: "#FF7043" }} />
                  </IconButton>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    display: {
                      xs: "flex",
                      sm: "none",
                      md: "none",
                    },
                    gap: "10px",
                  }}
                >
                  <Chip
                    size="small"
                    label={item.label}
                    sx={{
                      backgroundColor: "#FFFFFF",
                      color: "#000000",
                      border: "1px solid black",
                    }}
                  />
                  <Chip
                    size="small"
                    label={item.priority}
                    sx={{
                      backgroundColor: PriorityColor(item.priority),
                      color: "#ffffff",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "12px",
                    fontWeight: "bolder",
                    marginTop: "10px",
                  }}
                >
                  {dayjs(item.tdate.toDate()).format("DD MMM YYYY, hh:mm A")}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    marginTop: "12px",
                  }}
                >
                  {item.note}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default LabelMapper;
LabelMapper.propTypes = {
  AccordionName: PropTypes.string,
};
