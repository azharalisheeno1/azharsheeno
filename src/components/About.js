"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import profile from '../../public/profile.png'
const About = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = {
    introduction: {
      title: "Passionate MERN Stack & Next.js Developer",
      content: (
        <p className="text-justify text-md md:px-0 mx-auto">
          Greetings! I'm Azhar Ali, a proud graduate from Quaid-e-Awam
          University Of Engineering, Science & Technology Nawabshah with a B.S
          in Computer Science. As a{" "}
          <span className="text-blue-700 font-medium">
            MERN Stack & Next.js Developer
          </span>
          , I specialize in building full-stack web applications that combine
          powerful backend systems with dynamic, responsive front-end
          interfaces.
          <br />
          <br />
          On the front-end, I use React.js and Next.js to craft interactive,
          user-friendly experiences, while leveraging Tailwind CSS to design
          sleek, responsive layouts that look stunning across all devices.
          <br />
          <br />
          On the back-end, I work with Node.js, Express.js, and MongoDB to
          develop scalable APIs, secure authentication systems, and robust
          server-side solutions.
          <br />
          <br />
          My journey in computer science has given me a solid foundation in
          algorithms, data structures, and software engineering principles,
          empowering me to tackle complex challenges and deliver efficient,
          production-ready solutions with confidence.
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
    <section
      className=" md:h-screen   flex justify-center px-3 py-16 md:py-0 items-center "
      id="about"
    >
      <div className="md:grid md:grid-cols-2  md:max-w-7xl gap-8 items-center py-8 px-4 xl:gap-0 sm:py-16 max-w-7xl mx-auto ">
       <Image
  src={profile}
  width={450}
  height={550}
  alt="loading"
  className="bg-[#1e40af] rounded-xl h-auto"
/>

        <div className="mt-4 md:mt-0 text-left flex flex-col  h-full">
          <div className="flex flex-row justify-start ">
            <div className="flex justify-center md:justify-start gap-4 md:gap-6 items-center">
              {Object.keys(sections).map((section) => (
                <button
                  key={section}
                  onClick={() => handleButtonClick(section)}
                  className={`md:py-2 py-1 font-semibold ${
                    activeSection === section
                      ? "border-blue-600 border-b-2 text-blue-800"
                      : "hover:border-blue-600 hover:border-b-2"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <motion.div
            // initial={{ opacity: 0, scale: 0.5 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-4"
          >
            {activeSection === "introduction" && (
              <h1 className="md:text-start md:px-0 md:text-xl text-[17px] text-blue-600 font-semibold mb-3 ">
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
