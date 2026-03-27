import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(5, 5, 5, 0.7)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem'
        }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, type: 'spring', bounce: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel"
          style={{
            maxWidth: '1200px',
            width: '100%',
            maxHeight: '94vh',
            overflowY: 'auto',
            padding: '4rem',
            position: 'relative',
            background: '#ffffff',
            color: '#000000',
            borderRadius: '24px',
            boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.4)'
          }}
        >
          <button 
            onClick={onClose}
            className="btn"
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              color: '#64748b',
              cursor: 'pointer',
              fontSize: '1.4rem',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              transition: 'all 0.2s',
              zIndex: 10
            }}
          >
            <FiX />
          </button>
          
          <div style={{ marginBottom: '3.5rem', textAlign: 'left' }}>
            <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'block' }}>
              {project.category}
            </span>
            <h2 style={{ fontSize: '3.2rem', fontWeight: 900, color: '#000000', lineHeight: 1.05, margin: '0.5rem 0', letterSpacing: '-0.02em' }}>
              {project.title}
            </h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '4rem' }}>
            {Array.isArray(project.image) ? (
              project.image.map((img, idx) => (
                <div key={idx} style={{ background: '#ffffff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #f1f5f9' }}>
                  <img src={img} alt={`${project.title} ${idx + 1}`} style={{ width: '100%', maxHeight: '800px', objectFit: 'contain', display: 'block' }} />
                </div>
              ))
            ) : project.image && (
                <div style={{ background: '#ffffff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #f1f5f9' }}>
                   <img src={project.image} alt={project.title} style={{ width: '100%', maxHeight: '800px', objectFit: 'contain', display: 'block' }} />
                </div>
            )}
          </div>

          <div style={{ color: '#1e293b', marginBottom: '4rem', lineHeight: 1.7, fontSize: '1.2rem', whiteSpace: 'pre-wrap', maxWidth: '900px' }}>
            {project.fullDescription ? project.fullDescription : project.description}
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <h4 style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.4rem', fontWeight: 800 }}>Technologies Used</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {project.tech.map((tech, i) => (
                <span key={i} style={{ color: '#475569', fontSize: '0.9rem', fontWeight: 700, fontFamily: 'var(--font-mono)', background: '#f8fafc', border: '1px solid #f1f5f9', padding: '0.75rem 1.5rem', borderRadius: '12px' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.githubLink || project.liveLink) && (
            <div style={{ display: 'flex', gap: '1.5rem', borderTop: '2px solid #f1f5f9', paddingTop: '3.5rem' }}>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1.25rem 2.75rem', fontSize: '1.1rem', fontWeight: 700, borderRadius: '14px', boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.4)' }}>
                  <FiExternalLink /> View Paper
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1.25rem 2.75rem', fontSize: '1.1rem', fontWeight: 700, borderRadius: '14px', background: '#ffffff', color: '#0f172a', borderColor: '#e2e8f0' }}>
                  <FiGithub /> Source Code
                </a>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
