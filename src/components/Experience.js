import { motion } from "framer-motion";
function Experience() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:h-90 w-full max-w-6xl text-start mx-auto"
      >
        <div className="mb-6 md:mb-2">
          <h1 className="text-md sm:text-xl lg:text-xl font-bold mb-2">
            React.js Developer
          </h1>
          {/* <h2 className="text-lg sm:text-md lg:text-sm mb-1"></h2> */}
          <p className="text-base sm:text-md mb-2">Unicorns Nursing</p>

          <p className="text-base sm:text-md">
            Date: January-2023 | December 2024
          </p>
        </div>
        <div className="text-justify">
          <p className="leading-relaxed text-sm sm:text-base lg:text-md">
            I have completed a 1 year role as a React.js developer, where I
            worked on developing responsive web applications and enhancing user
            interfaces. During this time, I gained valuable experience in
            component-based architecture, state management, and collaborating
            with cross-functional teams.
          </p>
        </div>
        <div className=" md:mt-8">
          <h1 className="text-md sm:text-md lg:text-lg font-bold mb-2">
            Frealncing (Fiverr, Frealncer, Upwork)
          </h1>
          <h2 className="text-lg sm:text-lg lg:text-xl mb-1"></h2>

          <p className="text-base sm:text-md">Date: June-2023 | Present</p>
        </div>
        <div className="text-justify">
          <p className="leading-relaxed text-sm sm:text-base lg:text-md">
            Experienced full-stack developer specializing in React.js, Next.js,
            Node.js, Express.js, and MongoDB, with a proven track record of
            delivering high-quality freelance projects. Skilled in building
            fully responsive, scalable, and interactive web applications
            tailored to diverse client needs. Proficient in translating design
            concepts into seamless user experiences and developing robust
            backend solutions to ensure end-to-end functionality.
          </p>
        </div>
      </motion.section>
    </>
  );
}

export default Experience;
