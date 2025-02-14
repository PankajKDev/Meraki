function SectionOne() {
  return (
    <div className=" w-[80%] h-full md:h-[475px] flex gap-7 flex-col md:flex-row ">
      <div className="h-full w-full md:w-1/2 order-1  flex justify-end items-center">
        <img
          className="w-fit bg-amber-400  h-fit"
          src="/homeImages/reflecting.png"
          alt=""
        />
      </div>
      <div className="flex w-full flex-col md:w-1/2 order-2 justify-center items-center`">
        <h1 className="font-[Karla] font-bold  text-xl   md:text-2xl text-center text-black">
          82% adults lack effective system for Time Management
        </h1>
        <h2 className="font-[Karla] font-normal text-lg text-center md:text-2xl">
          This can be solved with better time organization and a better plan
        </h2>
      </div>
    </div>
  );
}

export default SectionOne;
