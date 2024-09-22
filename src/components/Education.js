import { motion } from "framer-motion";
function Education() {
  

  return (
    <>
      <motion.section
      
      initial={{ opacity: 0, scale: 0.5 }}
           
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration:0.3, ease: "easeInOut" }}
      className="text-white md:h-90 w-full max-w-6xl text-start mx-auto   rounded-lg shadow-lg">
        <div className="mb-6 md:mb-2">
          <h1 className="text-md sm:text-xl lg:text-xl font-bold mb-2">
          Quaid-e-Awam University of Engineering, Science & Technology
          </h1>
          <h2 className="text-lg sm:text-lg lg:text-xl mb-1">
          B.S Computer Science
          </h2>
          <p className="text-base sm:text-lg mb-2">
            CGPA: 3.46 / 4
          </p>
          <p className="text-base sm:text-lg mb-1">
            Location: Nawabshah, Sindh, Pakistan
          </p>
          <p className="text-base sm:text-lg">
            Date: October-2019 | October-2023
          </p>
        </div>
        <div className="text-justify">
          <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
            I am a recent graduate from Quaid-e-Awam University, having
            completed my Bachelor of Science (BS) degree in Computer Science.
            During my time at the university, I developed a strong foundation in
            various aspects of computer science and honed my skills in several
            key areas.
          </p>
        </div>
      </motion.section>
    </>
  );
}

export default Education;
