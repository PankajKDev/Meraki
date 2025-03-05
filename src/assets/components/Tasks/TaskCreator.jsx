import { Add, ControlPoint } from "@mui/icons-material";
import { Box, Paper, Typography, useTheme } from "@mui/material";
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
        elevation={3}
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
            background: "black",
            borderRadius: "50px",
            fontSize: "20px",
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
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Add sx={{ color: "white" }} />
      </Paper>
    </>
  );
}

export default TaskCreator;
