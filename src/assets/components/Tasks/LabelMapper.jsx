import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Chip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import useTodoRead from "../../utils/useTodoRead";
import dayjs from "dayjs";

function LabelMapper({ AccordionName }) {
  function DateFilter(date) {
    const status = dayjs(date.tdate.toDate()).isSame(dayjs(), "day");
    if (AccordionName === "Today") {
      return status;
    } else if (AccordionName === "Later") {
      return !status;
    }
  }
  const { data, todoDeleter } = useTodoRead();
  const filteredTasks = data.filter(DateFilter);
  return (
    <Accordion
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
        <Typography>{AccordionName}</Typography>
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
              elevation={1}
              sx={{
                fontFamily: "sans-serif",
                textShadow: "1px rgba(0, 0, 0, 0.5)",
                width: "100%",
                border: "1px solid black",
                padding: "4px 12px",
                borderRadius: "4px",
                display: "inline-block",
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
                        todoDeleter(item.id);
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
                    <Typography>{item.tname}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <Chip
                      size="small"
                      label={item.label}
                      sx={{ backgroundColor: "#FF7043", color: "#ffffff" }}
                    />
                    <Chip
                      size="small"
                      label={item.category}
                      sx={{ backgroundColor: "#FF7043", color: "#ffffff" }}
                    />
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>{item.note}</AccordionDetails>
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
