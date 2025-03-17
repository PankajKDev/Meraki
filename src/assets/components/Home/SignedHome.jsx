import { Typography } from "@mui/material";
import dayjs from "dayjs";
import HomeGrid from "./HomeGrid";
import useUserData from "../../utils/useUserData";

function SignedHome() {
  const { userData } = useUserData();
  return (
    <>
      <Typography sx={{ marginTop: "32px" }} variant="h1">
        Home
      </Typography>
      <Typography variant="body1">
        Account created at{" "}
        {dayjs(userData.createdAt?.toDate())?.format("DD-MM-YYYY").toString()}
      </Typography>
      <HomeGrid userData={userData} />
    </>
  );
}

export default SignedHome;
