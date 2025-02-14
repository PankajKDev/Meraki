import LoginCard from "../assets/components/HomeComponents/LoginCard";
import SectionOne from "../assets/components/HomeComponents/SectionOne";
import SectionTwo from "../assets/components/HomeComponents/SectionTwo";

function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="container mt-10 flex gap-10  flex-col items-center">
        <SectionOne />
        <SectionTwo />
        <LoginCard />
      </div>
    </div>
  );
}

export default Home;
