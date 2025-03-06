import { Box, Container, Typography } from "@mui/material";

import PomodoroTimer from "../assets/components/Pomodoro/PomodoroTimer";
import HeroCard from "../assets/components/Home/HeroCard";
import { PomodoroPageContent } from "../assets/constants";

function Pomodoro() {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: "32px",
            marginTop: "40px",
            fontWeight: "400",
          }}
        >
          POMODORO
        </Typography>

        <PomodoroTimer />
        <Box
          sx={{
            width: "100%",
          }}
        >
          <HeroCard {...PomodoroPageContent} />
        </Box>
      </Container>
    </>
  );
}

export default Pomodoro;
