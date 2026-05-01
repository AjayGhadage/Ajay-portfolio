import Home from "../sections/Home";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Experience from "../sections/Experience";

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default HomePage;