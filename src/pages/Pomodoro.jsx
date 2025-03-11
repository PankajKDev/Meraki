import { Box, Container, Typography } from "@mui/material";

import PomodoroTimer from "../assets/components/Pomodoro/PomodoroTimer";
import HeroCard from "../assets/components/Home/HeroCard";
import { PomodoroPageContent } from "../assets/constants";

function Pomodoro() {
  return (
    <Box>
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
    </Box>
  );
}

export default Pomodoro;
