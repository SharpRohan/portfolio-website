import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      title: 'Frontend Developer Intern',
      company: 'Androwebstech',
      date: 'May 2025 – July 2025',
      points: [
        'Developed responsive React.js UI components, improving page load efficiency by 30% while successfully integrating backend RESTful APIs.'
      ]
    }
  ];

  return (
    <section className="section" id="experience" style={{ maxWidth: '700px' }}>
      <h2 className="numbered-heading">
        <span className="mono-accent" style={{ marginRight: '10px', fontSize: 'clamp(16px, 3vw, 20px)' }}>02.</span> 
        Where I've Worked
      </h2>

      <div style={{ display: 'flex', marginTop: '40px', minHeight: '250px' }} className="exp-container">
        
        {/* Vertical Tabs */}
        <div style={{ position: 'relative', width: '200px', display: 'flex', flexDirection: 'column' }}>
          {jobs.map((job, index) => (
            <button 
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                textAlign: 'left',
                padding: '0 20px 2px',
                height: '42px',
                borderLeft: `2px solid ${activeTab === index ? 'var(--teal)' : 'var(--lightest-navy)'}`,
                backgroundColor: activeTab === index ? 'var(--light-navy)' : 'transparent',
                color: activeTab === index ? 'var(--teal)' : 'var(--slate)',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                borderTop: 'none', borderRight: 'none', borderBottom: 'none',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
              className="tab-btn"
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{ paddingLeft: '30px', width: '100%' }}>
          {jobs.map((job, index) => (
            <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '500', color: 'var(--lightest-slate)', marginBottom: '5px' }}>
                {job.title} <span style={{ color: 'var(--teal)' }}>@ {job.company}</span>
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--light-slate)', marginBottom: '25px' }}>
                {job.date}
              </p>
              <ul style={{ padding: '0', margin: '0', listStyle: 'none', color: 'var(--slate)' }}>
                {job.points.map((point, i) => (
                  <li key={i} style={{ position: 'relative', paddingLeft: '30px', marginBottom: '10px', fontSize: '16px' }}>
                    <span style={{ position: 'absolute', left: '0', color: 'var(--teal)', top: '5px' }}>▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tab-btn:hover { background-color: var(--light-navy) !important; color: var(--teal) !important; }
        @media (max-width: 600px) {
          .exp-container { flex-direction: column; }
          .exp-container > div:first-child { width: 100%; flex-direction: row; overflow-x: auto; margin-bottom: 30px; }
          .exp-container > div:first-child button { border-left: none; border-bottom: 2px solid var(--lightest-navy); min-width: 120px; textAlign: center; padding: 10px; height: auto; }
          .exp-container > div:first-child button[style*="var(--teal)"] { border-bottom-color: var(--teal) !important; }
          .exp-container > div:last-child { padding-left: 0; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
