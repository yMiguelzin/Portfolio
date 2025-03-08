import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Quando darkMode mudar, altere a classe no <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main className="min-h-screen flex items-center justify-center antialiased">
        <div className="min-h-screen flex flex-col space-y-10 max-w-[43rem] mx-auto py-10 px-6 sm:py-20 sm:px-8">
          <Header />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
