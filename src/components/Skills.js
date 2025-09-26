"use client";
import HTML from "../../public/skills/html.png";
import CSS from "../../public/skills/css.png";
import JS from "../../public/skills/javascript.png";
import TailwindCSS from "../../public/skills/tailwind.png";
import Bootstrap from "../../public/skills/bootstrap5.png";
import Reactjs from "../../public/skills/react.png";
import Router from "../../public/skills/router.png";
import Redux from "../../public/skills/redux.png";
import Github from "../../public/skills//github.png";
import Firebase from "../../public/skills/firebase.png";
import wordpress from "../../public/skills/wordpress.png";
import canva from "../../public/skills/canva.png";
import framer from "../../public/skills/framer.png";
import Formik from "../../public/skills/formik.png";
import yup from "../../public/skills/yup.png";
import node from "../../public/skills/node.png";
import express from "../../public/skills/express.png";

import next from "../../public/skills/next.png";
import mongodb from "../../public/skills/mongodb.png";
import vercel from "../../public/skills/vercel.png";
import bcyrpt from "../../public/skills/bcyrpt.png";
import auth from "../../public/skills/auth.png";

import Image from "next/image";

import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      logo: HTML,
      level: "HTML 5",
      count: 1,
      shadow: " shadow-orange-500",
    },
    {
      logo: CSS,
      level: "CSS",
      count: 2,
      shadow: " shadow-blue-500",
    },
    {
      logo: JS,
      level: "JavaScript",
      count: 3,
      shadow: " shadow-yellow-500",
    },
    {
      logo: TailwindCSS,
      level: "Tailwind CSS",
      count: 4,
      shadow: " shadow-sky-400",
    },
    {
      logo: Bootstrap,
      level: "BootStrap",
      count: 5,
      shadow: " shadow-purple-600",
    },
    {
      logo: Reactjs,
      level: "React JS",
      count: 6,
      shadow: " shadow-blue-400",
    },
    {
      logo: node,
      level: "Node JS",
      count: 6,
      shadow: " shadow-green-400",
    },
    {
      logo: express,
      level: "Express JS",
      count: 6,
      shadow: " shadow-gray-400",
    },

    {
      logo: mongodb,
      level: "MongoDB",
      count: 8,
      shadow: " shadow-green-500",
    },
    {
      logo: bcyrpt,
      level: "Hashing",
      count: 19,
      shadow: " shadow-gray-500",
    },
    {
      logo: auth,
      level: "Authentication",
      count: 20,
      shadow: " shadow-gray-400",
    },

    {
      logo: next,
      level: "Next JS ",
      count: 7,
      shadow: " shadow-gray-700",
    },

    {
      logo: Router,
      level: "React Router",
      count: 9,
      shadow: " shadow-red-700",
    },

    {
      logo: Redux,
      level: "ReduxToolkit",
      count: 10,
      shadow: " shadow-purple-700",
    },

    {
      logo: Formik,
      level: "Formik",
      count: 11,
      shadow: " shadow-blue-600",
    },
    {
      logo: yup,
      level: "Yup Validtion",
      count: 12,
      shadow: " shadow-red-500",
    },
    {
      logo: framer,
      level: "Framer Motion",
      count: 13,
      shadow: " shadow-fuchsia-500",
    },

    {
      logo: Github,
      level: "Github",
      count: 14,
      shadow: " shadow-black",
    },
    {
      logo: Firebase,
      level: "Firebase",
      count: 15,
      shadow: " shadow-yellow-500",
    },
    {
      logo: vercel,
      level: "Vercel",
      count: 16,
      shadow: " shadow-gray-500",
    },

    {
      logo: wordpress,
      level: "Wordpress",
      count: 17,
      shadow: " shadow-blue-400",
    },
    {
      logo: canva,
      level: "Canva",
      count: 18,
      shadow: " shadow-sky-500",
    },
  ];
  return (
    <section id="skills" className="py-16 md:h-full   relative">
      <div className="mt-8 max-w-7xl mx-auto   text-center">
        <h2 className="text-3xl font-bold border-b uppercase  w-fit mx-auto border-blue-600 mb-4">
          SKILLS
        </h2>
        <p className="mt-3 text-justify  text-[15px] px-5 md:text-center  ">
          I possess a diverse range of skills honed through practical experience
          and continuous learning. Below is a snapshot of the key skills I have
          developed and utilized
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-8 mt-4 sm:gap-8 gap-4 p-4 ">
          {skills?.map((skill, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              key={i}
              className={
                `group shadow-md hover:-scale-125 duration-500 mx-auto relative min-w-[7rem] max-w-[14rem]  p-4 sm:p-4 rounded-xl flex flex-col justify-between` +
                " " +
                skill.shadow
              }
            >
              <div className="flex items-center justify-center rounded-full">
                <div className="text-3xl  rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <motion.div
                    whileTap={{ scale: 1.2, rotate: 360 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
             <Image
  src={skill.logo}
  alt="loading"
  width={80}
  height={80}
  className="w-12 h-auto object-contain"
/>

                  </motion.div>
                </div>
              </div>

              <p className="text-sm pt-3 font-stylish text-center mt-auto">
                {skill.level}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
