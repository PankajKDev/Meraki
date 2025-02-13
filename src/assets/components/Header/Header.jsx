import { Links } from "../../constants";

function Header() {
  return (
    <div className="w-full h-20  flex justify-center items-center bg-black ">
      <div className="container flex justify-between">
        <a
          className="font-[Karla] font-bold text-white italic text-3xl opacity-80"
          href=""
        >
          Meraki
        </a>
        <div className="invisible md:visible flex gap-10 items-center">
          {Links.map((item) => (
            <a
              className="Header-font text-white Header-font-hover"
              key={item.linkName}
              href={item.src}
            >
              {item.linkName}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
