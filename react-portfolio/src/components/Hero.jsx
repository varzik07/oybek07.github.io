import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { name, roles, description, image, resumeUrl } = portfolioData.hero;

  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ color: 'var(--accent-primary)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Hello, I am
          </h2>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
            {name}
          </h1>
          
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '2rem' }}>
            {roles[0]} & {roles[1]}
          </h3>
          
          <p style={{ color: 'var(--text-tertiary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '90%', lineHeight: 1.7 }}>
            {description}
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#contact" className="btn btn-primary">
              Contact Me <FiArrowRight />
            </a>
            <a href={resumeUrl} download className="btn btn-outline" target="_blank" rel="noreferrer">
              Download CV <FiDownload />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            position: 'absolute',
            inset: '-10%',
            background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
            zIndex: 0
          }}></div>
          
          <img 
            src={image} 
            alt={name} 
            style={{ 
              width: '100%', 
              maxWidth: '450px', 
              aspectRatio: '1', 
              objectFit: 'cover', 
              borderRadius: '2rem',
              border: '2px solid var(--border-color)',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }} 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
