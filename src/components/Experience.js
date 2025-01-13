import { motion } from "framer-motion";
function Experience() {
  return (
    <>
      <motion.section
      
      initial={{ opacity: 0, scale: 0.5 }}
           
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration:0.3, ease: "easeInOut" }}
      className="text-white md:h-90 w-full max-w-6xl text-start mx-auto   rounded-lg shadow-lg">
        <div className="mb-6 md:mb-2">
          <h1 className="text-md sm:text-xl lg:text-xl font-bold mb-2">
            Junior React.js Developer
          </h1>
          <h2 className="text-lg sm:text-lg lg:text-xl mb-1"></h2>
          <p className="text-base sm:text-lg mb-2">DISMAK CSP</p>

          <p className="text-base sm:text-lg">Date: January-2024 | December 2024</p>
        </div>
        <div className="text-justify">
          <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
          I have completed a 1 year remote role as a React.js developer, where I
worked on developing responsive web applications and enhancing user
interfaces. During this time, I gained valuable experience in component-based
architecture, state management, and collaborating with cross-functional
teams.
          </p>
        </div>
        <div className="mb-6 md:mt-8">
          <h1 className="text-md sm:text-xl lg:text-xl font-bold mb-2">
            Freelancing
          </h1>
          <h2 className="text-lg sm:text-lg lg:text-xl mb-1"></h2>
         

          <p className="text-base sm:text-lg">Date: June-2024 | Present</p>
        </div>
        <div className="text-justify">
          <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
            Experienced front-end developer specializing in ReactJS and NextJS,
            with a strong track record of delivering high-quality freelance
            projects. Skilled in creating fully responsive and interactive user
            interfaces tailored to diverse client needs. Proficient in
            translating design concepts into seamless, user-friendly web
            applications.
          </p>
        </div>
      </motion.section>
    </>
  );
}

export default Experience;
