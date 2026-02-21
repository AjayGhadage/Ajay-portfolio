import Home from "../sections/Home";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";
import Education from "../sections/Education";

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Education />
       <Projects />
      <Contact />
    </>
  );
}

export default HomePage;