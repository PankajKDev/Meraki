import { Box, Container } from "@mui/material";
import HeroCard from "../assets/components/Home/HeroCard";
import { HeroContent } from "../assets/constants";
import { pageContainer } from "../assets/constants/muiStyles";

function Home() {
  return (
    <Box>
      <Container sx={pageContainer}>
        {HeroContent.map((item) => (
          <HeroCard
            key={item.id}
            orderImg={item.orderImg}
            orderText={item.orderText}
            imgUrl={item.imgUrl}
            heading={item.heading}
            subHeading={item.subHeading}
          />
        ))}
      </Container>
    </Box>
  );
}

export default Home;
