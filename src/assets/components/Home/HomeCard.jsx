import {
  Box,
  Card,
  CardContent,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const HomeCard = ({ imgUrl, text }) => {
  return (
    <Grid size={{ xs: 10, sm: 8, md: 4 }}>
      <Card sx={{ height: "300px" }}>
        <CardContent>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              style={{ height: "80px", width: "80px" }}
              src={imgUrl}
              alt=""
            />
            <Typography sx={{ fontSize: "24px" }} variant="body1">
              {text}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HomeCard;

HomeCard.propTypes = {
  imgUrl: PropTypes.string,
  text: PropTypes.string,
};
