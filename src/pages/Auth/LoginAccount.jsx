import { SignIn } from "@clerk/clerk-react";
import { Container } from "@mui/material";

function LoginAccount() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <SignIn forceRedirectUrl="/" />
      </Container>
    </>
  );
}

export default LoginAccount;
