import { Container, Typography } from "@mui/material";
import TaskCreator from "../assets/components/Tasks/TaskCreator";
import LabelMapper from "../assets/components/Tasks/LabelMapper";

function Tasks() {
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
            fontSize: "48px",
            marginTop: "40px",
          }}
        >
          Tasks
        </Typography>
        <TaskCreator />
        <LabelMapper AccordionName="Today" />
        <LabelMapper AccordionName="Later" />
      </Container>
    </>
  );
}

export default Tasks;
