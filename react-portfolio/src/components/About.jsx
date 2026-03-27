import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { title, description, stats } = portfolioData.about;

  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          <span>01.</span> {title}
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '1.5rem' }}>{description}</p>
            <p style={{ marginBottom: '2rem' }}>
              My technical foundation spans traditional software engineering disciplines combined with cutting-edge 
              machine learning methodologies. I firmly believe in bridging the gap between theoretical models and real-world 
              clinical impact.
            </p>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
              {stats.map((stat, index) => (
                <div key={index} style={{ borderLeft: '2px solid var(--accent-primary)', paddingLeft: '1.5rem' }}>
                  <h4 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {stat.value}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Core Capabilities</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {portfolioData.skills.categories[0].skills.map((skill, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)' }}></div>
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{skill}</span>
                </li>
              ))}
              {portfolioData.skills.categories[1].skills.map((skill, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)' }}></div>
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
