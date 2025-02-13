import PropTypes from "prop-types";

function SectionHome({ id, Heading, SubHeading, Image }) {
  return (
    <div className=" w-[80%] h-full md:h-[475px] flex gap-7 flex-col md:flex-row ">
      <div
        className={`h-full w-full md:w-1/2 order-1 md:${
          id % 2 == 1 ? "order-1" : "order-2"
        }  flex justify-end items-center`}
      >
        <img className="w-fit bg-amber-400  h-fit" src={Image} alt="" />
      </div>
      <div
        className={`flex w-full flex-col md:w-1/2 order-2  md:${
          id % 2 == 1 ? "order-2" : "order-1"
        }    justify-center items-center`}
      >
        <h1 className="font-[Karla] font-bold  text-xl   md:text-2xl text-center text-black">
          {Heading}
        </h1>
        <h2 className="font-[Karla] font-normal text-lg text-center md:text-2xl">
          {SubHeading}
        </h2>
      </div>
    </div>
  );
}

export default SectionHome;

SectionHome.propTypes = {
  Heading: PropTypes.string,
  SubHeading: PropTypes.string,
  Image: PropTypes.string,
  id: PropTypes.number,
};
