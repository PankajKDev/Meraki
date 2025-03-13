import { Container, Typography } from "@mui/material";

function Dashboard() {
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
      <Typography variant="h1">Notes</Typography>
    </Container>
  );
}

export default Dashboard;
