import { Container, Typography } from "@mui/material";
import TaskCreator from "../assets/components/Tasks/TaskCreator";
import LabelMapper from "../assets/components/Tasks/LabelMapper";
import { pageContainer } from "../assets/constants/muiStyles";
import useTimedGreeting from "../assets/utils/useTimedGreeting";

function Tasks() {
  const { greeting } = useTimedGreeting();

  return (
    <Container maxWidth="lg" sx={pageContainer}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
        }}
      >
        Good {greeting} !
      </Typography>

      <TaskCreator />
      <LabelMapper AccordionName="Today" />
      <LabelMapper AccordionName="Later" />
      <LabelMapper AccordionName="Overdue" />
    </Container>
  );
}

export default Tasks;
