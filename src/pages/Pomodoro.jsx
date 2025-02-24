import { Container, Typography } from "@mui/material";

import PomodoroTimer from "../assets/components/Pomodoro/PomodoroTimer";

function Pomodoro() {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          sx={{ textAlign: "center", fontSize: "48px", marginTop: "40px" }}
        >
          Pomodoro
        </Typography>

        <PomodoroTimer />
      </Container>
    </>
  );
}

export default Pomodoro;
