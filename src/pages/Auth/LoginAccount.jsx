import { SignUp } from "@clerk/clerk-react";
import { Container } from "@mui/material";

function LoginAccount() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <SignUp />
    </Container>
  );
}

export default LoginAccount;
