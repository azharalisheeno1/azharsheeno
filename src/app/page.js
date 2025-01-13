import { Services } from "@/components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Services/>

   <Skills/>
   <Projects/>

   <Contact/>
   <Footer/>

   </>
  );
}
