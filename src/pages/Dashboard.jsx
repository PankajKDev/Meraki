import { Container, Typography } from "@mui/material";
import { pageContainer } from "../assets/constants/muiStyles";
import useTodoUtil from "../assets/utils/useTodoUtil";

function Dashboard() {
  const { data } = useTodoUtil();
  console.log(data);
  return (
    <Container maxWidth="lg" sx={pageContainer}>
      <Typography variant="h1">User Dashboard</Typography>
    </Container>
  );
}

export default Dashboard;
