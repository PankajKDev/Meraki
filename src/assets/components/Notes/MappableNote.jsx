import { Card, CardContent, Grid2 as Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import NoteIcon from "./NoteIcon";
import ReadMoreModal from "./ReadMoreModal";

function MappableNote() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <>
      <Grid size={{ xs: 10, sm: 8, md: 4 }}>
        <Card
          sx={{
            width: "100%",
            height: "300px",
            background: "linear-gradient(to bottom, #fefefe, #f8f9fa)",
          }}
        >
          <CardContent>
            <Typography variant="body1" sx={{ textAlign: "right" }}>
              Date : {dayjs().format("DD-MM-YYYY").toString()}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "24px",
              }}
            >
              Eat food
            </Typography>
            <Typography
              onClick={handleOpen}
              variant="body1"
              sx={{
                marginTop: "10px",
                fontSize: "14px",
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 7, // Number of lines to display
                WebkitBoxOrient: "vertical",
                cursor: "pointer",
              }}
            >
              {/* i mean this typography */}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis culpa voluptates quisquam necessitatibus enim aliquam
              magnam vitae sint. Asperiores quo assumenda alias repellat, neque
              tempore reiciendis consectetur, amet quam ab ad corporis eius vel
              consequuntur rem! Sed laudantium doloremque voluptatum inventore
              qui commodi nihil recusandae eveniet consequuntur saepe! Dolorem
              consectetur accusamus in dicta ea, quidem commodi pariatur, nemo
              non quia quisquam architecto harum sunt!
            </Typography>
            <NoteIcon />
          </CardContent>
        </Card>
      </Grid>
      <ReadMoreModal open={open} handleOpen={handleOpen} />
    </>
  );
}

export default MappableNote;
