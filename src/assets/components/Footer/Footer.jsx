import { Links, SiteMap } from "../../constants";
import FooterMap from "./FooterMap";

function Footer() {
  return (
    <>
      <div className="w-full h-64  flex  bg-black mt-20 justify-center items-center">
        <div className="container mt-10 flex ">
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="font-[Karla]   font-bold text-white italic text-3xl opacity-80">
              Meraki
            </h1>
            <h2 className="font-[Karla]   font-bold text-white sm:text-sm  md:text-md opacity-80">
              More than just a productivity tool
            </h2>
          </div>

          <div className="w-1/2  h-full invisible md:visible flex gap-20 text-white ">
            <FooterMap component="SiteMap" content={Links} />
            <FooterMap component="Misc" content={SiteMap} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
