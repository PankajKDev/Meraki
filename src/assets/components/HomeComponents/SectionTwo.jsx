function SectionTwo() {
  return (
    <div className=" w-[80%] h-full md:h-[475px] flex gap-7 flex-col md:flex-row ">
      <div className="h-full w-full md:w-1/2 sm:order-1 md:order-2  flex justify-end items-center">
        <img
          className="w-fit bg-amber-400  h-fit"
          src="/homeImages/growth.png"
          alt=""
        />
      </div>
      <div className="flex w-full flex-col md:w-1/2 order:1 sm:order-2 md:order-1 justify-center items-center`">
        <h1 className="font-[Karla] font-bold  text-xl   md:text-2xl text-center text-black">
          We are here to help
        </h1>
        <h2 className="font-[Karla] font-normal text-lg text-center md:text-2xl">
          Meraki is a Productivity tool to help you organize and focus
        </h2>
      </div>
    </div>
  );
}

export default SectionTwo;
