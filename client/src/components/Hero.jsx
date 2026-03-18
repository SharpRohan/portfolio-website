import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      padding: '0'
    }}>
      <div className="container" style={{ padding: '0', maxWidth: '1000px' }}>
        <p className="mono-accent" style={{ marginBottom: '20px' }}>
          Hi there, I'm
        </p>
        <h1 className="hero-title">
          Rohan Kumar.
        </h1>
        <h2 className="hero-subtitle">
          I build things.
        </h2>
        <p className="hero-description">
          I'm a computer engineering student passionate about building intelligent, user-focused web applications. I love working with machine learning, web technologies, and turning ideas into practical digital solutions.
        </p>
        
        <div style={{ display: 'flex', gap: '20px', marginTop: '50px' }}>
          <a href="#contact" className="btn">Get In Touch</a>
          <a href="#projects" className="btn">View My Work →</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
