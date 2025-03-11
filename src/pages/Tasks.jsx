import { Container, Typography } from "@mui/material";
import TaskCreator from "../assets/components/Tasks/TaskCreator";
import LabelMapper from "../assets/components/Tasks/LabelMapper";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

function Tasks() {
  const { user } = useUser();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = dayjs().hour();
    let greetingText = "Hello";

    if (currentHour >= 5 && currentHour < 12) {
      greetingText = "Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingText = "Afternoon";
    } else if (currentHour >= 18 && currentHour <= 24) {
      greetingText = "Evening";
    } else {
      greetingText = "Night";
    }

    setGreeting(greetingText);
  }, []);

  return (
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
        variant="body1"
        sx={{
          textAlign: "center",
          fontSize: "48px",
          marginTop: "40px",
          color: "#121212",
        }}
      >
        Good {greeting} {user.fullName}!
      </Typography>
      <TaskCreator />
      <LabelMapper AccordionName="Today" />
      <LabelMapper AccordionName="Later" />
      <LabelMapper AccordionName="Overdue" />
    </Container>
  );
}

export default Tasks;
