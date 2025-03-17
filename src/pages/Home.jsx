import { Box, Container } from "@mui/material";
import HeroCard from "../assets/components/Home/HeroCard";
import { HeroContent } from "../assets/constants";
import { pageContainer } from "../assets/constants/muiStyles";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import SignedHome from "../assets/components/Home/SignedHome";

function Home() {
  return (
    <Box>
      <Container sx={pageContainer}>
        <SignedOut>
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
        </SignedOut>
        <SignedIn>
          <SignedHome />
        </SignedIn>
      </Container>
    </Box>
  );
}

export default Home;
