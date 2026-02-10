import { useState } from 'react'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "/components/layout/Navbar.jsx";
import Footer from "components/layout/Footer.jsx";
import About from "components/about/About.jsx";
import Projects from "components/projects/Projects.jsx";
import Contact from "components/contact/Contact.jsx";
import Skills from "components/skills/Skills.jsx";

function App() {
  useState(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className= "">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
