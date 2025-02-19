import { Box, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";

function HeroCard({ orderImg, orderText, imgUrl, heading, subHeading }) {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        marginTop: "20px",
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
            sm: "100%",
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
          variant="h2"
          component="h1"
          sx={{
            fontSize: {
              xs: "1.5rem", // Font size for extra small screens
              sm: "2rem", // Font size for small screens
              md: "2rem", // Font size for medium screens
            },
            textWrap: {
              sm: "wrap",
              md: "wrap",
              lg: "nowrap",
            },
            textAlign: "left",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            textAlign: {
              sm: "center",
              md: "left",
            },
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
