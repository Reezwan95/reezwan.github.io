import React from "react";
import About from "./About";
import Experiences from "./Experiences";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";


export default function App() {
  return (
    <main className="text-blue-400 bg-black-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Experiences/>
      <Skills />
      <Education />
      <Contact />
     </main> 
  );
}
