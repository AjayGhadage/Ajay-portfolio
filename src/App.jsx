// import Navbar from "./components/Navbar.jsx";
// import Home from "./sections/Home.jsx";
// import About from "./sections/About.jsx";
// import Projects from "./sections/Projects.jsx";
// import Contact from "./sections/Contact.jsx";
// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="bg-black text-white">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
// function App() {
//   return (
//     <div className="bg-red-500 min-h-screen flex items-center justify-center">
//       <h1 className="text-white text-4xl font-bold">
//         Tailwind Working 🚀
//       </h1>
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;