import React from 'react'

const Footer = () => {
    
  return (
    <>
    <footer class=" tracking-wide bg-gray-950 pt-12 pb-4 px-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
        <div>
          <h4 class="text-cyan-400 font-semibold text-lg mb-6">Quick Links</h4>
          <ul class="space-y-5">
            
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">Home</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">About</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">Portfolio</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">Skills</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-cyan-400 font-semibold text-lg mb-6">Services</h4>
          <ul class="space-y-5">
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">Full Stack Developmenet</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">React.js Development</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">Next.js Development </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">API Integration</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-cyan-400 font-semibold text-lg mb-6">SKILLS</h4>
          <ul class="space-y-5">
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">Mern Stack</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">React.js</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">Next.js</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">UI/UX Implementation</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-cyan-400 font-semibold text-lg mb-6">Contact</h4>
          <ul class="space-y-5">
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">EMail: azharalisheeno009@gmail.com</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">0312-3138986</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">LindedIn: azharalisheeno1</a>
            </li>
           
            <li>
              <a href="javascript:void(0)" class="hover:text-cyan-400 text-gray-300 text-[15px] transition-all">Github: azharsheeno1</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t text-center border-[#6b5f5f] pt-4 mt-8">
        <p class="text-gray-300 text-[15px]">
          © Azhar Alee Sheeno. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  )
}

export default Footer