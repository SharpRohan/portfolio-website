import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      {/* Left Sidebar - Socials */}
      <div className="orientation-left">
        <ul className="sidebar-list">
          <li><a href="https://github.com/rohan844123" target="_blank" rel="noreferrer" className="sidebar-link">GitHub</a></li>
          <li><a href="#" target="_blank" rel="noreferrer" className="sidebar-link">LinkedIn</a></li>
        </ul>
      </div>

      {/* Right Sidebar - Email */}
      <div className="orientation-right">
        <div className="sidebar-list">
          <a href="mailto:rohan844123@gmail.com" className="email-link">rohan844123@gmail.com</a>
        </div>
      </div>

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <footer>
        <p>Built by Rohan Kumar</p>
      </footer>
    </div>
  );
}

export default App;
