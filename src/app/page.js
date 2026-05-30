import About from "../components/sections/About";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Certifications from "../components/sections/Certifications";
import Interests from "../components/sections/Interests";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Interests />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}
