import { Add, ControlPoint } from "@mui/icons-material";
import { Paper, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import InputTask from "./InputTask";
function TaskCreator() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <>
      <Paper
        elevation={5}
        onClick={handleOpen}
        sx={{
          width: "100%",
          marginTop: "40px",
          minHeight: "50px",
          display: "flex",
          alignItems: "center",
          borderRadius: "10px",
          gap: "10px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          padding: "8px 16px",
        }}
      >
        <ControlPoint
          sx={{
            fill: "white",
            background: "purple",
            borderRadius: "50px",
            fontSize: "24px",
            marginLeft: "10px",
          }}
        />
        <Typography variant="body1">Add Task</Typography>
      </Paper>
      <InputTask handleOpen={handleOpen} open={open} theme={theme} />
      <Paper
        onClick={handleOpen}
        elevation={5}
        sx={{
          position: "fixed",
          bottom: {
            xs: 40,
            sm: 70,
            md: 70,
          },
          right: 40,
          width: "50px",
          height: "50px",
          borderRadius: "30px",
          background: "purple",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          cursor: "pointer",
          transition: (theme) =>
            theme.transitions.create(["background-color", "transform"], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut,
            }),
          ":hover": {
            backgroundColor: "#AEC6CF",
            transform: "scale(1.1)",
            color: "#333333",
          },
        }}
      >
        <Add />
      </Paper>
    </>
  );
}

export default TaskCreator;
