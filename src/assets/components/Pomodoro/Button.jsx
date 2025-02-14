import PropTypes from "prop-types";

function Button({ buttonName }) {
  return (
    <button className="bg-black  text-sm text-white  w-28 h-8 rounded-md">
      {buttonName}
    </button>
  );
}

export default Button;
Button.propTypes = {
  buttonName: PropTypes.string,
};
