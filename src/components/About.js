"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AboutProfile from "../../public/pro.png";
import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";

const About = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = {
    introduction: {
      title: "Passionate React JS & Next JS Developer",
      content: (
        <p className="text-justify text-md md:px-0 mx-auto">
          Greetings! I'm Azhar Ali. I'm a proud graduate from Quaid-e-Awam University Of Engineering, Science & Technology Nawabshah in the B.S Computer Science Department. As a <span className="text-cyan-500 font-medium">React.js and Next.js Developer</span>, I've delved into the exciting world of Front-end Development. My focus is on crafting engaging user interfaces and interactive experiences.
          <br /><br />
          With React.js, I've built robust, scalable web applications that adapt seamlessly to user needs. To ensure pixel-perfect design and optimal user experience, I use Tailwind CSS to create sleek, responsive layouts that look stunning on any device.
          <br /><br />
          My journey in computer science has provided me with a solid foundation in algorithms, data structures, and software engineering principles, empowering me to tackle complex challenges with confidence.
        </p>
      ),
    },
    education: { content: <Education /> },
    experience: { content: <Experience /> },
  };

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="text-white md:h-screen  bg-slate-900 flex justify-center px-3 py-16 md:py-0 items-center " id="about">
      <div className="md:grid md:grid-cols-2   gap-8 items-center py-8 px-4 xl:gap-0 sm:py-16 max-w-7xl mx-auto ">
        <Image src={AboutProfile} width={450} className='bg-slate-800  rounded-xl' height={550} alt="About Profile" />
        <div className="mt-4 md:mt-0 text-left flex flex-col  h-full">
          <div className="flex flex-row justify-start ">
            <div className="flex justify-center md:justify-start gap-4 md:gap-6 items-center">
              {Object.keys(sections).map((section) => (
                <button
                  key={section}
                  onClick={() => handleButtonClick(section)}
                  className={`md:py-2 py-1 font-semibold ${
                    activeSection === section
                      ? "border-cyan-500 border-b-2 text-cyan-500"
                      : "hover:border-cyan-500 hover:border-b-2"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
           
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration:0.3, ease: "easeInOut" }} 
            className="mt-4">
            {activeSection === "introduction" && (
              <h1 className="md:text-start md:px-0 md:text-xl text-[17px] font-semibold mb-3 text-white">
                {sections.introduction.title}
              </h1>
            )}
            {sections[activeSection].content}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;