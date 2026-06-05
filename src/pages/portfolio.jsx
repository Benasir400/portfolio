import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import WhyHireMe from "../components/WhyHireMe";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";

export default function Portfolio() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />

      <Hero />
      <About/>

      <Skills />

     

      <Projects />

      <Certifications />

      <Education />
       <WhyHireMe />


      <Contact />

      <Footer />
    </div>
  );
}