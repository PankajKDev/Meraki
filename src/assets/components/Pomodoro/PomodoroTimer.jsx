import { PauseCircleFilled, PlayCircleFilled } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useTimer } from "react-timer-hook";
import DrawerSettings from "./Drawer";
import usePomodoroStore from "../../../store/usePomodoroStore";
import { useCallback, useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { db } from "../../../libs/firebase";
import { doc, increment, updateDoc } from "firebase/firestore";

const MODES = {
  FOCUS: "Focus",
  SHORT: "Short",
  LONG: "Long",
};

function PomodoroTimer() {
  const { user, isSignedIn } = useUser();
  const { Focus, ShortBreak, LongBreak } = usePomodoroStore();
  const [mode, setMode] = useState(MODES.FOCUS);
  const getDuration = useCallback(() => {
    switch (mode) {
      case MODES.FOCUS:
        return Focus;
      case MODES.SHORT:
        return ShortBreak;
      case MODES.LONG:
        return LongBreak;
      default:
        return Focus;
    }
  }, [mode, Focus, ShortBreak, LongBreak]);

  //create expiry

  const createExpiryTime = useCallback(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + getDuration() * 60);
    return time;
  }, [getDuration]);

  //Timer
  const { seconds, minutes, isRunning, pause, resume, restart, hours } =
    useTimer({
      expiryTimestamp: createExpiryTime(),
      onExpire: () => handlerTimerComplete(),
      autoStart: false,
    });

  //change handler
  useEffect(() => {
    restart(createExpiryTime(), false);
  }, [mode, restart, ShortBreak, LongBreak, Focus, createExpiryTime]);

  async function handlerTimerComplete() {
    if (isSignedIn && mode === "Focus") {
      const UserRef = doc(db, "Users", user.id);
      await updateDoc(UserRef, {
        pomodoro: increment(1),
      });
      console.log("Successfully added");
    } else {
      return null;
    }
  }
  const formatTime = (time) => time.toString().padStart(2, "0");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginTop: "40px",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => setMode("Focus")}
          sx={{
            background: "black",
            color: "white",
            border: "1px solid black",
            ":hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          Focus
        </Button>
        <Button
          onClick={() => setMode("Short")}
          sx={{
            background: "black",
            color: "white",
            border: "1px solid black",
            ":hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          Short Timer
        </Button>
        <Button
          onClick={() => setMode("Long")}
          sx={{
            background: "black",
            color: "white",
            border: "1px solid black",
            ":hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          Long Timer
        </Button>
      </Box>

      <Typography
        sx={{
          marginTop: "10px",
          fontSize: { xs: "60px", sm: "90px", md: "150px" },
          fontWeight: "bolder",
        }}
        component="h1"
      >
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <IconButton onClick={isRunning ? pause : resume}>
          {isRunning ? (
            <PauseCircleFilled sx={{ fill: "black", fontSize: "60px" }} />
          ) : (
            <PlayCircleFilled sx={{ fill: "black", fontSize: "60px" }} />
          )}
        </IconButton>

        <DrawerSettings />
      </Box>
    </>
  );
}

export default PomodoroTimer;
