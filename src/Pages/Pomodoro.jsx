import Button from "../assets/components/Pomodoro/Button";
import TimerButton from "../assets/components/Pomodoro/TimerButton";

function Pomodoro() {
  return (
    <div className="w-full h-full flex justify-center ">
      <div className="container   mt-20 flex gap-10  flex-col  items-center">
        <div className="w-full md:w-1/2 h-full  flex gap-10 flex-col justify-start items-center text-center">
          <h1 className="text-4xl font-[Karla] font-extrabold">Pomodoro</h1>
          <div className="flex gap-10">
            <Button buttonName="Focus" />
            <Button buttonName="Short Break" />
            <Button buttonName="Long Break" />
          </div>
          <h1 className="text-9xl">25:58</h1>
          <div className="w-full gap-10 flex justify-center  ">
            <TimerButton imgUrl="/play.svg" />
            <TimerButton imgUrl="/Reset.svg" />
          </div>
        </div>

        <div>
          <div className="w-full ">
            <img src="/pomodoro/pomodoro2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
