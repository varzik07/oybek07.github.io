import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-tertiary)',
        fontSize: '0.9rem'
      }}>
        <div style={{ marginBottom: '0.5rem' }}>
          Built with React & Vite. Inspired by minimal dark design themes.
        </div>
        <div>
          &copy; {new Date().getFullYear()} Oybek Valiyev. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
