function LoginCard() {
  return (
    <div className=" w-[80%] h-auto md:h-[475px] flex gap-7 flex-col md:flex-row ">
      <div
        className="h-full w-full md:w-1/2 order-1 
        flex justify-end items-center"
      >
        <img
          loading="lazy"
          className="w-fit bg-amber-400  h-fit"
          src="/homeImages/rogue.png"
          alt=""
        />
      </div>
      <div
        className="flex w-full flex-col md:w-1/2 order-2 
  justify-center items-center"
      >
        <h1 className="font-[Karla] font-bold  text-xl   md:text-2xl text-center text-black">
          What are you waiting for? Let’s start your journey
        </h1>
        <div className="flex gap-5 mt-5 ">
          <button className="w-24 h-10 rounded-lg bg-black text-center font-[Karla] text-white hover:bg-white hover:text-black border">
            Sign-In
          </button>
          <button className="w-24 h-10 rounded-lg bg-white text-center font-[Karla] text-black hover:bg-black hover:text-white border">
            Sign-Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
