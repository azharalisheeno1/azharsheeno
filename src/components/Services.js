"use client"
import React from "react";
import pic1 from "../../public/services/Frontend.png";
import pic2 from "../../public/services/backend.png";
import pic3 from "../../public/services/full.png";
import pic4 from "../../public/services/custom_mern.png";
import pic5 from "../../public/services/nextjs.png";
import pic6 from "../../public/services/Authentication.png";
import pic7 from "../../public/services/SPA.png";
import pic8 from "../../public/services/Responsive_UI_Design.png";
import Image from "next/image";
import { motion } from "framer-motion";
export const Services = () => {
  const services = [
   {
  id: 1,
  name: "Frontend Development",
  description:
    "I build responsive and user-friendly interfaces using React.js, Next.js, and Tailwind CSS, ensuring modern design and smooth user experiences.",
  image: pic1,
},
{
  id: 2,
  name: "Backend Development",
  description:
    "I develop secure and scalable backends using Node.js, Express.js, and MongoDB, creating robust APIs and handling data efficiently.",
  image: pic2,
},
{
  id: 3,
  name: "Full-Stack Web Application Development",
  description:
    "From frontend to backend, I deliver complete MERN stack web applications with seamless integration, optimized performance, and reliability.",
  image: pic3,
},
{
  id: 4,
  name: "Custom MERN Stack Applications",
  description:
    "I create tailored MERN stack solutions such as dashboards, e-commerce platforms, and content management systems that fit your unique needs.",
  image: pic4,
},
{
  id: 5,
  name: "Next.js Development",
  description:
    "I leverage Next.js features like SSR, SSG, and ISR to build SEO-friendly, high-performance websites with excellent scalability.",
  image: pic5,
},
{
  id: 6,
  name: "Authentication & Security",
  description:
    "I implement secure authentication systems using JWT, cookies, and bcrypt, along with role-based access control to protect your applications.",
  image: pic6,
},
{
  id: 7,
  name: "Single Page Application",
  description:
    "I build fast, dynamic, and interactive single-page applications (SPAs) using React.js or Next.js, ensuring seamless navigation without page reloads.",
  image: pic7,
},
{
  id: 8,
  name: "Responsive Layout",
  description:
    "I design and develop fully responsive layouts that adapt perfectly to all screen sizes, ensuring a smooth user experience on mobile, tablet, and desktop.",
  image: pic8,
},

  ];

  return (
    <>
      <section
        id="services"
        className=" mx-auto md:px-10 px-4 space-y-6 md:max-w-7xl p  bg py-8 md:py-12 lg:pt-20"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center space-y-4 text-center">
          <h2 className="font-semibold text-xl leading-[1.1] sm:text-xl  md:text-2xl border-b-2 border-blue-600">
         SERVICES I OFFER
          </h2>
        
         
        </div>

        <div className="mx-auto grid justify-center  gap-4 md:gap-6 sm:grid-cols-2  md:grid-cols-4">
          {services.map((service) => (
            <motion.div
            // initial={{ opacity: 0, scale: 0.5 }}
            //   whileInView={{ opacity: 1, scale: 1 }}
            //   transition={{ duration: 0.3, ease: "easeInOut" }}
              key={service.id}
              className="overflow-hidden   rounded-lg border-2 border-blue-500  p-3 transform  hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center justify-between  rounded-md p-2">
               <Image
  src={service.image}
  alt={service.name}
  width={80}
  height={80}
  className="hover:scale-110 transition-transform duration-300 ease-in-out h-auto"
/>

                <div className="text-center ">
                  <h3 className="font-semibold my-2 text-md  transition-all duration-300">
                    {service.name}
                  </h3>
                  <p className="text-sm text-justify t">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
