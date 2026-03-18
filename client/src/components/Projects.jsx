import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Mano India',
      description: 'Architected a scalable service booking platform with secure JWT user authentication and real-time financial transactions. Designed for maximum usability and performance.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com',
      liveLink: '#'
    }
  ];

  return (
    <section className="section" id="projects" style={{ maxWidth: '1000px' }}>
      <h2 className="numbered-heading">
        <span className="mono-accent" style={{ marginRight: '10px', fontSize: 'clamp(16px, 3vw, 20px)' }}>03.</span> 
        Some Things I've Built
      </h2>

      <div style={{ marginTop: '50px' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ 
            display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(12, 1fr)', 
            alignItems: 'center', marginBottom: '100px' 
          }} className="project-grid">
            
            {/* Project Image Placeholder */}
            <div style={{ 
              gridColumn: '1 / 8', gridRow: '1 / -1', position: 'relative', zIndex: '1',
              boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)', transition: 'var(--transition)'
            }} className="project-img-container">
              <a href={project.liveLink !== '#' ? project.liveLink : project.githubLink} style={{ display: 'block', width: '100%', height: '100%', backgroundColor: 'var(--teal)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ 
                  width: '100%', paddingTop: '62.5%', backgroundColor: 'var(--light-navy)', 
                  position: 'relative', mixBlendMode: 'multiply', filter: 'grayscale(100%) contrast(1) brightness(90%)',
                  transition: 'var(--transition)'
                }} className="project-img">
                   <img 
                     src="/manoindiadisplaypicture.png" 
                     alt={project.title} 
                     style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
                   />
                </div>
              </a>
            </div>

            {/* Project Details */}
            <div style={{ 
              gridColumn: '7 / -1', gridRow: '1 / -1', position: 'relative', zIndex: '2', 
              textAlign: 'right' 
            }} className="project-content">
              
              <p className="mono-accent" style={{ margin: '10px 0', fontSize: '13px' }}>Featured Project</p>
              <h3 style={{ color: 'var(--lightest-slate)', fontSize: 'clamp(24px, 5vw, 28px)', marginBottom: '20px' }}>
                <a href={project.liveLink !== '#' ? project.liveLink : project.githubLink} style={{ color: 'inherit' }}>{project.title}</a>
              </h3>
              
              <div style={{ 
                boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)', transition: 'var(--transition)', 
                backgroundColor: 'var(--light-navy)', color: 'var(--light-slate)', fontSize: '17px', 
                borderRadius: '4px', padding: '25px', marginBottom: '20px'
              }}>
                <p>{project.description}</p>
              </div>
              
              <ul style={{ 
                display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', 
                padding: '0', margin: '0 0 10px 0', listStyle: 'none', color: 'var(--slate)', 
                fontFamily: 'var(--font-mono)', fontSize: '13px', gap: '20px' 
              }}>
                {project.techStack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ padding: '10px' }}>
                  <Github size={20} />
                </a>
                {project.liveLink !== '#' && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{ padding: '10px' }}>
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
          </div>
        ))}
      </div>

      <style>{`
        .project-img-container:hover .project-img { filter: none; mix-blend-mode: normal; }
        .project-content a:hover { color: var(--teal) !important; }
        @media (max-width: 768px) {
          .project-grid { display: block !important; position: relative; }
          .project-img-container { grid-column: 1 / -1 !important; height: 100%; opacity: 0.25; position: absolute !important; top: 0; left: 0; width: 100%; z-index: 1 !important; }
          .project-content { grid-column: 1 / -1 !important; padding: 40px 40px 30px; text-align: left !important; z-index: 5 !important; }
          .project-content ul { justify-content: flex-start !important; }
          .project-content .project-details { background-color: transparent !important; padding: 0 !important; box-shadow: none !important; }
          .project-content > div:nth-of-type(1) { background-color: transparent !important; padding: 0 !important; box-shadow: none !important; }
          .project-content div:last-child { justify-content: flex-start !important; margin-left: -10px; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
