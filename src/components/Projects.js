"use client";
import Image from "next/image";
import { projects } from "@/app/dataset/db";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
function Projects() {
  return (
    <>
    
    <section id="projects" className=" h-full      ">
        <div className="text-center">
          <h2 className="text-3xl font-bold border-b uppercase  w-fit mx-auto border-blue-600 mb-4">PROJECTS </h2>
          <p className=" mt-2 md:max-w-7xl mx-auto text-sm text-justify md:text-center px-6 ">
            I showcase a diverse array of projects that reflect my expertise and
            passion as a developer. Each project embodies a unique challenge and
            opportunity for innovation, demonstrating my proficiency.
          </p>
        </div>
        <br />
        <div className=" max-w-7xl  px-5 mx-auto  relative">
          <div className="lg:w-10/3  w-full">
            <Swiper
              navigation
              slidesPerView={1}
              spaceBetween={20} 
              breakpoints={{
                768: {
                  slidesPerView: 2, 
                },
              }}
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
            >
              {projects.map((project_info, i) => (
                <SwiperSlide key={i}>
                  <div className="h-fit max-w-xl mx-auto p-4 bg-[#1e40af] rounded-xl mt-6 mb-10">
                    <Image
                      src={project_info.img}
                      className="rounded-lg h-80 md:h-80"
                      alt={project_info.name}
                    />
                    <h3 className="text-xl text-white font-semibold my-4">
                      {project_info.name}
                    </h3>
                 
                    <div className="flex gap-3">
                      <Link
                        href={project_info.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-stylish bg-white text-black px-4 py-1 rounded-md hover:scale-110 ease-out duration-300 inline-block"
                      >
                        GitHub
                      </Link>
                      <Link
                        href={project_info.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-stylish bg-white text-black px-4 py-1 rounded-md  hover:scale-110 ease-out duration-300 inline-block"
                      >
                        Demo
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
  
      </section>
    </>
  )
}

export default Projects