import LoginCard from "../assets/components/HomeComponents/LoginCard";
import SectionHome from "../assets/components/HomeComponents/SectionHome";
import { sectionData } from "../assets/constants";

function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="container mt-10 flex gap-10  flex-col items-center">
        {sectionData.map((item) => (
          <SectionHome
            key={item.id}
            Image={item.Image}
            Heading={item.Heading}
            SubHeading={item.SubHeading}
            id={item.id}
          />
        ))}
        <LoginCard />
      </div>
    </div>
  );
}

export default Home;
