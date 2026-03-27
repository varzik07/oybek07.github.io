import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backdropFilter: 'blur(10px)',
      background: 'rgba(10, 10, 10, 0.8)',
      borderBottom: '1px solid var(--border-color)',
      zIndex: 100,
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.025em' }}>
          {portfolioData.hero.name.split(' ')[0]}<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </a>
        
        <div style={{ display: 'flex', gap: '1.25rem', fontWeight: 500, fontSize: '0.9rem', alignItems: 'center' }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a 
            href={portfolioData.hero.resumeUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-outline" 
            style={{ 
              padding: '0.5rem 1rem', 
              fontSize: '0.8rem', 
              borderRadius: '8px',
              marginLeft: '0.5rem'
            }}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
