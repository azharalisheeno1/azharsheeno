"use client";

import { useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
// import profil from "../../public/Image.png";
import profile from "../../public/MyProfile.png";
import Logo from "../../public/logos/email.png";
import Logo2 from "../../public/logos/li.png";
import Logo3 from "../../public/logos/github.png";
import Logo4 from "../../public/logos/whatsapp.png";

import Link from "next/link";
import { motion } from "framer-motion";
import TalkButton from "./TalkButton";
function Hero() {
  const social_media = [
    {
      id: 1,
      logos: Logo,

      to: "mailto:azharalisheeno009@gmail.com",
      style: "rounded-tr-xl",
    },
    {
      id: 2,
      logos: Logo2,
      to: "https://www.linkedin.com/in/azhar-ali-sheeno-96654b1b3/",
    },
    {
      id: 3,
      logos: Logo3,
      to: "https://github.com/azharalisheeno1",
    },
    {
      id: 4,
      logos: Logo4,
      to: "https://wa.me/qr/GGTYTMDQU5YHB1",
    },
   
  ];

  const [typeEffect] = useTypewriter({
    words: ["MERN Stack Developer"," Next JS Developer"],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 40,
  });

  return (
    <>
      <motion.div
        id="home"
        initial={{ x: -1300 }}
        animate={{ x: 0 }}
        transition={{ duration: "1", delay: "0" }}
      >
        <section className="pt-24 md:py-0 md:max-w-7xl mx-auto  sm:h-screen  flex   md:flex-row-reverse flex-col  items-center">
          <div className="flex-1  flex items-center  justify-center ">
          <Image
  src={profile}
  alt="loading"
  width={800}
  height={800}
  className="md:w-[65%] w-[70%] h-auto bg-[#1e40af] rounded-xl z-40"
/>

          </div>

          <div className="flex-1 px-5 md:px-10 md:mx-5 ">
            <div className="md:text-left  text-center mt-3">
              <h1 className="md:text-3xl font-stylish text-2xl md:leading-normal leading-10  font-semibold">
                <span className="text-[#1e40af] md:text-3xl font-stylish text-3xl">
                  Hello!
                  <br />
                </span>
                I'm <span className="text-[#1e40af] ">{typeEffect}</span>
              </h1>
              <p className="md:text-lg   text-lg   text-justify ">
              Hi, I'm Azhar Ali, a MERN Stack & Next.js Developer.
I specialize in building scalable full-stack web applications using MongoDB, Express.js, React.js, Node.js, and Next.js. With a passion for crafting dynamic, responsive, and user-centric solutions, I bring ideas to life by seamlessly integrating frontend and backend.
Let’s build something amazing together!
              </p>

              <div className="flex flex-col md:flex-row md:gap-2">
               
               
                <Link
                target="_blank"
                download="AzharSheeno_MERNStackDeveloper.pdf"
                  href="https://drive.google.com/file/d/11QvXdG_37_t6Zcl6HiKYAYlsM5LMLc_w/view?usp=drive_linkk"
                  className="text-white bg-[#1e40af] hover:bg-blue-900   p-3 rounded-xl   font-semibold my-3 "
                >
                  Download Resume
                </Link>
               <TalkButton/>
              
              </div>

              <div className="mt-3 text-3xl flex items-center md:justify-start   justify-center gap-5">
                {social_media.map(({ logos, to, id }) => (
                  <Link
                    href={to}
                    target="_blank"
                    key={id}
                    className=" hover:text-gray-900 cursor-pointer "
                  >
                    <Image   src={logos} alt="loading" className="w-8 h-8 hover:scale-105 " />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default Hero;
