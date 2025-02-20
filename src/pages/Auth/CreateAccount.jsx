import { SignUp } from "@clerk/clerk-react";
import { Container } from "@mui/material";

function CreateAccount() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <SignUp forceRedirectUrl="/" />
    </Container>
  );
}

export default CreateAccount;
