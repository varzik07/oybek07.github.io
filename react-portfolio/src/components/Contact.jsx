import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email, github, linkedin, location, phone } = portfolioData.contact;

  return (
    <section id="contact" className="section container" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
      >
        <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1rem', display: 'block' }}>
          04. What's Next?
        </span>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
          Get In Touch
        </h2>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.7 }}>
          I'm currently looking for new opportunities and collaborations in Healthcare AI. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a href={`mailto:${email}`} className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', marginBottom: '4rem' }}>
          Say Hello
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <a href={`tel:${phone.replace(/-/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            <FiPhone /> {phone}
          </a>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
              <FiGithub />
            </a>
            <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
              <FiLinkedin />
            </a>
            <a href={`mailto:${email}`} style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
              <FiMail />
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
          <FiMapPin /> {location}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
