"use client"
import React from "react";
import pic1 from "../../public/services/1.png";
import pic2 from "../../public/services/2.png";
import pic3 from "../../public/services/3.png";
import pic4 from "../../public/services/4.png";
import pic5 from "../../public/services/5.png";
import pic6 from "../../public/services/6.png";
import Image from "next/image";
import { motion } from "framer-motion";
export const Services = () => {
  const services = [
    {
      id: 1,
      name: "Next.js Development",
      description:
        "I create fast and scalable websites using Next.js, ensuring top-notch performance with SEO-friendly features and optimized loading times.",
      image: pic1,
    },
    {
      id: 2,
      name: "React.js Development",
      description:
        "I build dynamic, interactive web applications using React.js, delivering smooth user experiences and efficient, modern design.",
      image: pic2,
    },
    {
      id: 3,
      name: "Responsive Design",
      description:
        "I design websites that look great on any device, making sure your site adapts perfectly to mobile, tablet, and desktop screens.",
      image: pic3,
    },
    {
      id: 4,
      name: "UI/UX Design Implementation",
      description:
        "I bring creative UI/UX designs to life, focusing on user-friendly interfaces that not only look good but are easy to navigate.",
      image: pic4,
    },
    {
      id: 5,
      name: "API Integration",
      description:
        "I integrate APIs to enhance your web app’s capabilities, ensuring seamless connections to external services and real-time data.",
      image: pic5,
    },
    {
      id: 6,
      name: "SEO Optimization",
      description:
        "I improve your website’s visibility by optimizing it for search engines, helping your business rank higher and reach more customers.",
      image: pic6,
    },
  ];

  return (
    <>
      <section
        id="services"
        className=" mx-auto px-4 space-y-6  bg py-8 md:py-12 lg:pt-20"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-semibold text-2xl leading-[1.1] sm:text-2xl text-white md:text-3xl border-b-2 border-cyan-500">
         SERVICES
          </h2>
        
         
        </div>

        <div className="mx-auto grid justify-center  gap-4 md:gap-6 sm:grid-cols-2 md:max-w-7xl md:grid-cols-3">
          {services.map((service) => (
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              key={service.id}
              className="overflow-hidden   rounded-lg text-white bg-slate-700 p-3 transform  hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center justify-between  rounded-md p-2">
                <Image
                  src={service.image}
                  alt={service.name}
                  className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  height={120}
                  width={120}
                />
                <div className="text-center ">
                  <h3 className="font-semibold my-2 text-lg  transition-all duration-300">
                    {service.name}
                  </h3>
                  <p className="text-sm text-justify text-muted-foreground">
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
