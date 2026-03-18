import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', url: '#about' },
    { name: 'Experience', url: '#experience' },
    { name: 'Work', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: 'var(--nav-height)',
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 10px 30px -10px var(--shadow-red)' : 'none',
      zIndex: 100,
      transition: 'var(--transition)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 50px',
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
        {/* Logo */}
        <div className="logo">
          <a href="#" style={{ 
            color: 'var(--teal)', 
            fontFamily: 'var(--font-mono)', 
            fontSize: '1.2rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            border: '2px solid var(--teal)',
            borderRadius: '50%'
          }}>
            R
          </a>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ol style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 0,
            margin: 0,
            listStyle: 'none',
            counterReset: 'item 0',
          }}>
            {navLinks.map((link, i) => (
              <li key={i} style={{ margin: '0 5px', position: 'relative', counterIncrement: 'item 1' }}>
                <a href={link.url} style={{
                  padding: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--lightest-slate)',
                  textDecoration: 'none'
                }}>
                  <span style={{ color: 'var(--teal)', marginRight: '5px' }}>
                    {`0${i + 1}.`}
                  </span>
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          
          <div style={{ marginLeft: '15px' }}>
            <a href="/rohan%20resume.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '0.75rem 1rem', marginTop: 0 }}>
              Resume
            </a>
          </div>
        </div>
      </nav>
      <style>{`
        @media (max-width: 768px) {
          header { padding: 0 25px !important; }
          header nav > div:last-child { display: none !important; } /* Hide links on mobile for now */
        }
      `}</style>
    </header>
  );
};

export default Navbar;
