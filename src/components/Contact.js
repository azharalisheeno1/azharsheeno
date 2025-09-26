"use client";
import { useRef, useState } from "react";
import Logo from "../../public/logos/email.png";
import Logo2 from "../../public/logos/li.png";
import emailjs from "@emailjs/browser";
import Logo3 from "../../public/logos/whatsapp.png";

import Image from "next/image";
function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLETE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY_ID
        
        
      )
      .then(
        () => {
          setSuccess(true);
          console.log(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLETE_ID,
            form.current,
            process.env.NEXT_PUBLIC_KEY_ID
          );
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  const social_media = [
    {
      id: 1,
      logos: Logo,

      name: "azharalisheeno009@gmail.com",
      style: "rounded-tr-xl",
    },
    {
      id: 2,
      logos: Logo2,
      name: "Azhar Ali Sheeno",
    },

    {
      id: 3,
      logos: Logo3,
      name: "0312-3138986",
    },
  ];

  return (
    <>
      <section
        className=" md:h-screen  flex justify-center px-3 py-16 md:py-0 items-center "
        id="contact"
      >
        <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-7xl  b ">
          <div>
            <h1 className=" text-3xl font-bold">
              Do you want any work from me?
            </h1>
            <p className="text-sm md:text-md text-justify mt-4">
              Are you looking for someone to bring your projects to life? If so,
              I'm here to help. With a passion for{" "}
              <span className="font-bold border-b">
                MERN Stack & Next.js Development{" "}
              </span>
              and hands-on experience in building scalable, full-stack
              applications, I'm eager to collaborate with you. Explore my
              portfolio to see how I can contribute to your success. Let's
              transform your ideas into powerful, real-world solutions together.
            </p>{" "}
            <div className="mt-12">
              <h2 className=" text-base font-medium">
                For collaborations, connect through the following contact
                options!
              </h2>
              <ul className="mt-4">
                {social_media.map((icon) => (
                  <li key={icon.id} className="flex items-center my-4 md:my-5">
                    <Image
                      key={icon.id}
                      src={icon.logos}
                      alt="loading"
                      className=""
                      width={35}
                      height={35}
                    />

                    <h1 className="text-md ml-4">{icon.name}</h1>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form onSubmit={sendEmail} ref={form} className="ml-auto  space-y-4">
            <input
              type="text"
              placeholder="Name"
              name="from_name"
              id="name"
              className="w-full rounded-md   py-3 px-4  text-black focus:text-black text-sm outline-none border-2 border-blue-500 focus:bg-transparent"
              required
            />
            <input
              name="reply_to"
              id="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-md py-3 px-4   text-black focus:text-black text-sm outline-none border-2 border-blue-500 focus:bg-transparent"
              required
            />

            <textarea
              placeholder="Message"
              name="message"
              rows="8"
              id="message"
              className="w-full rounded-md px-4   text-black focus:text-black text-sm pt-3 outline-none border-2 border-blue-500 focus:bg-transparent"
              required
            ></textarea>
            <button
              type="submit"
              className="text-white bg-blue-800 hover:bg-blue-900 tracking-wide rounded-md  text-md px-4 py-3 w-full !mt-6"
            >
              Send
            </button>
            {success && (
              <span className="text-green-500 font-semibold ">
                Your message has been sent successfully!
              </span>
            )}
            {error && (
              <span className="text-red-500 font-semibold">
                Something wents wrong!
              </span>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
