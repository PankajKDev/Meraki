import PropTypes from "prop-types";
function TimerButton({ imgUrl }) {
  return (
    <div className="rounded-2xl h-24 flex justify-center items-center bg-black w-2/5 sm:2/4 md:1/5">
      <img className="w-16 h-16" src={imgUrl} alt="" />
    </div>
  );
}

export default TimerButton;

TimerButton.propTypes = {
  imgUrl: PropTypes.string,
};
