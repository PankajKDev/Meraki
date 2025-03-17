import { Box, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";

function HeroCard({ orderImg, orderText, imgUrl, heading, subHeading }) {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
        },
      }}
    >
      <Box
        src={imgUrl}
        component="img"
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "50%",
            md: "50%",
          },

          display: "block",
          order: {
            sm: 1,
            md: orderImg,
          },
        }}
      />

      <Box
        sx={{
          order: {
            sm: 2,
            md: orderText,
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
            },
          },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2rem",
            },
            textWrap: {
              sm: "wrap",
              md: "wrap",
              lg: "nowrap",
            },
            textAlign: { xs: "center", sm: "center", md: "left" },
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
            fontSize: "15px",
            fontWeight: "400",
          }}
        >
          {subHeading}
        </Typography>
      </Box>
    </Container>
  );
}

export default HeroCard;
HeroCard.propTypes = {
  orderImg: PropTypes.number,
  orderText: PropTypes.number,
  imgUrl: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};
