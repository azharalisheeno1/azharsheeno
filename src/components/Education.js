import { motion } from "framer-motion";
function Education() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className=" md:h-90 w-full max-w-6xl text-start mx-auto   "
      >
        <div className="mb-6 md:mb-2">
          <h1 className="text-md sm:text-xl lg:text-xl font-bold mb-2">
            Quaid-e-Awam University of Engineering, Science & Technology
          </h1>
          <h2 className="text-lg sm:text-lg lg:text-xl mb-1">
            B.S Computer Science
          </h2>
          <p className="text-base sm:text-lg mb-2">CGPA: 3.46 / 4</p>
          <p className="text-base sm:text-lg mb-1">
            Location: Nawabshah, Sindh, Pakistan
          </p>
          <p className="text-base sm:text-lg">
            Date: October-2019 | October-2023
          </p>
        </div>
        <div className="text-justify">
          <p className="leading-relaxed text-sm sm:text-base lg:text-md">
            I graduated from Quaid-e-Awam University of Engineering, Science &
            Technology, Nawabshah with a Bachelor of Science (BS) in Computer
            Science. My degree provided me with a strong foundation in
            algorithms, data structures, databases, and software engineering
            principles. Alongside academics, I gained hands-on experience with
            modern web technologies, focusing on the MERN Stack (MongoDB,
            Express.js, React.js, Node.js) and Next.js, which equipped me to
            build scalable, responsive, and user-friendly web applications.
          </p>
        </div>
      </motion.section>
    </>
  );
}

export default Education;
