import { Link } from "react-scroll";
const TalkButton = () => {
  return (
    <>
      <Link
        to="contact"
        className="text-black cursor-pointer border-gray-700  hover:bg-slate-700 hover:border-none bg-white border  hover:text-white hover:shadow-2xl p-3 rounded-xl   font-semibold my-3 "
      >
        Let's Talk
      </Link>
    </>
  );
};

export default TalkButton;
