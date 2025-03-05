import { Box } from "@mui/material";

function ImageCard() {
  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          sm: "flex",
          md: "block",
        },
        flexDirection: "column",
      }}
    >
      <img src="/cube.png" alt="" />
    </Box>
  );
}

export default ImageCard;
