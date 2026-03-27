import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          <span>02.</span> Experience & Education
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '3rem', position: 'relative' }}>
          
          <div style={{ position: 'absolute', left: '15px', top: '0', bottom: '0', width: '2px', background: 'var(--border-color)', zIndex: 0 }}></div>

          {portfolioData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel" 
              style={{ position: 'relative', padding: '2rem', marginLeft: '3rem', zIndex: 1 }}
            >
              <div style={{ position: 'absolute', left: '-2.5rem', top: '2.5rem', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent-primary)', border: '4px solid var(--bg-primary)' }}></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>{exp.role}</h3>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-primary)', fontWeight: 500 }}>{exp.company}</h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{exp.period}</span>
                  <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>{exp.location}</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{exp.description}</p>
            </motion.div>
          ))}

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '3rem 0 1rem 3rem', color: 'var(--text-primary)' }}>Education</h3>

          {portfolioData.education.map((edu, index) => (
            <motion.div 
              key={`edu-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel" 
              style={{ position: 'relative', padding: '1.5rem 2rem', marginLeft: '3rem', zIndex: 1, borderLeft: '4px solid var(--accent-secondary)' }}
            >
              <div style={{ position: 'absolute', left: '-2.5rem', top: '1.5rem', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--text-tertiary)', border: '4px solid var(--bg-primary)' }}></div>
              
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{edu.degree}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>{edu.institution}</span>
                <span style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>{edu.period} | GPA: {edu.gpa}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
