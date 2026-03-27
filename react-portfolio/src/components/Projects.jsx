import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (e, project) => {
    e.preventDefault();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          <span>03.</span> Featured Projects
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel"
              onClick={(e) => openModal(e, project)}
              style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {project.category}
                </span>
                <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                  <button onClick={(e) => openModal(e, project)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1.25rem', padding: 0 }}>
                    <FiArrowUpRight />
                  </button>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                {project.title}
              </h3>
              
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1, lineHeight: 1.7 }}>
                {project.description}
              </p>

              <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyle: 'none' }}>
                {project.tech.map((tech, i) => (
                  <li key={i} style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', fontFamily: 'monospace' }}>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
