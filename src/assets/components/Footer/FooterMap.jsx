import PropTypes from "prop-types";

function FooterMap({ component, content }) {
  return (
    <div className="flex text-sm justify-start flex-col items-start ">
      <h2 className="text-lg text-left underline  text-gray-800">
        {component}
      </h2>
      {content.map((item) => (
        <a className="cursor-pointer" key={item.linkName}>
          {item.linkName}
        </a>
      ))}
    </div>
  );
}

export default FooterMap;

FooterMap.propTypes = {
  component: PropTypes.string,
  content: PropTypes.array,
};
