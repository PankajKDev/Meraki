import { AddCircle } from "@mui/icons-material";
import { Card, CardContent, Grid2 as Grid, Typography } from "@mui/material";
import CreateCardInput from "./CreateCardInput";
import { useState } from "react";

function CreateCard() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <>
      <Grid size={{ xs: 10, sm: 8, md: 4 }}>
        <Card
          sx={{
            height: "300px",

            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            cursor: "pointer",
            alignItems: "center",
            gap: "20px",
            transition: "transform 0.2s ease-in-out, box-shadow 0.2s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 12px rgba(128,0,128,0.3)",
            },
          }}
        >
          <CardContent onClick={handleOpen}>
            <AddCircle sx={{ fontSize: "100px" }} />
            <Typography variant="body1" sx={{ fontSize: "20px" }}>
              Add note
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <CreateCardInput handleOpen={handleOpen} open={open} />
    </>
  );
}

export default CreateCard;
