"use client";
import { IoReorderThree } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Crimson_Pro } from "next/font/google";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: "400",
});

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "SERVICES", link: "services" },
  
    { name: "SKILLS", link: "skills" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT", link: "contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky
          ? "bg-slate-900  text-white "
          : "bg-white md:bg-slate-950 md:text-white text-black"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4
            className={`${crimson.className} text-4xl border-b-2 border-white rounded-xl px-2 font-bold`}
          >
            
          A Z   <span className="text-cyan-400 font-medium"> H </span> A R
          </h4>
        </div>
        <div
          className={`${
            sticky ? "md:bg-white/0 bg-white  text-white  " : "bg-white"
          } text-black md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
             <li key={i} className="px-1 mx-6 cursor-pointer border-b-2  border-b-transparent transition-all duration-500 ease-linear hover:border-cyan-500">
             <Link to={menu.link} delay={0} smooth={true} duration={50}>
               {menu.name}
             </Link>
           </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-white" : ""
          } text-3xl md:hidden m-5`}
        >
          <IoReorderThree size={40} />
        </div>
        <div
          className={`md:hidden text-white w-full absolute  h-screen px-7 py-2 font-medium bg-slate-900 top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center font-semibold h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 text-center  hover:text-cyan-600">
                <Link
                  to={menu.link}
                  delay={0}
                  onClick={() => setOpen(false)}
                  smooth={true}
                  duration={100}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
