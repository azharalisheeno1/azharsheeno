import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" tracking-wide bg-[#1e40af] pt-12 pb-4 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-5">
              <li className="hover:text-white text-white text-[15px] transition-all">
                Home
              </li>
              <li className="hover:text-white text-white text-[15px] transition-all">
                About
              </li>
              <li className="hover:text-white text-white text-[15px] transition-all">
                Portfolio
              </li>
              <li className="hover:text-white text-white text-[15px] transition-all">
                Skills
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-5">
              <li className="hover:text-white text-white text-[15px] transition-all">
                Full Stack Developmenet
              </li>
              <li className="hover:text-white text-white text-[15px] transition-all">
                React.js Development
              </li>
              <li className="hover:text-white text-white text-[15px] transition-all">
                Next.js Development
              </li>
              <li className="hover:text-white text-white text-[15px] transition-all">
                API Integration
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">SKILLS</h4>
            <ul className="space-y-5">
              <li className="hover:text-white text-white text-[15px] transition-all">
                Mern Stack
              </li>
              <li className="hover:text-white text-white text-[15px] transition-all">
                React.js
              </li>
              <li className="hover:text-white text-white text-[15px] transition-all">
                Next.js
              </li>
              <li className="hover:text-white text-white text-[15px] transition-all">
                UI/UX Implementation
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="hover:text-white text-white text-[15px] transition-all">
                Location: Karachi, Pakistan
              </li>
              <li className="hover:text-white text-white text-[15px] transition-all">
                Phone: 0312-3138986
              </li>
              <li className="hover:text-white text-white text-[15px] transition-all">
                Linkedin: Azhar Ali Sheeno
              </li>
              <li className="hover:text-white text-white text-[15px] transition-all">
                Github: azharalisheeno1
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t text-center border-[#6b5f5f] pt-4 mt-8">
          <p className="text-white text-[15px]">
            © Azhar Alee Sheeno. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
