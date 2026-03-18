import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript (ES6+)', 'React.js', 'Node.js', 
    'C++', 'Python', 'SQL', 
    'HTML & CSS', 'Git & GitHub', 'MongoDB'
  ];

  return (
    <section className="section" id="about" style={{ maxWidth: '900px' }}>
      <h2 className="numbered-heading">
        <span className="mono-accent" style={{ marginRight: '10px', fontSize: 'clamp(16px, 3vw, 20px)' }}>01.</span> 
        About Me
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px', alignItems: 'flex-start' }}>
        <div>
          <p style={{ marginBottom: '15px' }}>
            Hello! My name is Rohan and I enjoy creating things that live on the internet. My interest in web development started back when I was exploring how things work under the hood. 
            I am deeply passionate about Free and Open Source Software (FOSS), web rendering technologies, and developer tooling.
          </p>
          <p style={{ marginBottom: '15px' }}>
            Fast-forward to today, and I'm currently pursuing a B.Tech in Computer Science and Engineering at Government Engineering College, Aurangabad. I've had the privilege of working as a Frontend Developer Intern, building responsive UIs and integrating complex RESTful APIs.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Here are a few technologies I've been working with recently:
          </p>
          
          <ul style={{ 
            display: 'grid', gridTemplateColumns: 'repeat(2, minmax(140px, 200px))', 
            gap: '10px', padding: '0', margin: '0', listStyle: 'none',
            fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--slate)'
          }}>
            {skills.map((skill, i) => (
              <li key={i} style={{ position: 'relative', paddingLeft: '20px' }}>
                <span style={{ position: 'absolute', left: '0', color: 'var(--teal)' }}>▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Placeholder for Profile Image */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
          <div style={{ 
            position: 'absolute', top: '20px', left: '20px', width: '100%', height: '100%', 
            border: '2px solid var(--teal)', borderRadius: '4px', zIndex: '0', transition: 'var(--transition)'
          }} className="img-border"></div>
          <div style={{ 
            width: '100%', aspectRatio: '1/1', backgroundColor: 'var(--lightest-navy)', 
            borderRadius: '4px', position: 'relative', zIndex: '1', display: 'flex', 
            alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
          }}>
            <img 
              src="/rohanprofileimage.jpeg" 
              alt="Rohan Kumar" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: '1' }} 
            />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--teal)', opacity: 0.3, transition: 'var(--transition)', zIndex: '2' }} className="img-overlay"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        .img-overlay:hover { opacity: 0 !important; }
        .img-border:hover { top: 15px !important; left: 15px !important; }
      `}</style>
    </section>
  );
};

export default Skills;
