import React from 'react';

const Education = () => {
  return (
    <section className="section" id="education" style={{ maxWidth: '800px' }}>
      <h2 className="numbered-heading">
        <span className="mono-accent" style={{ marginRight: '10px', fontSize: 'clamp(16px, 3vw, 20px)' }}>04.</span> 
        Education & Leadership
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '40px' }}>
        
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
             <h3 style={{ fontSize: '20px', color: 'var(--lightest-slate)' }}>Education</h3>
          </div>
          <h4 style={{ fontSize: '18px', color: 'var(--teal)', marginBottom: '5px' }}>B.Tech in CSE (AI & ML)</h4>
          <p style={{ color: 'var(--light-slate)', fontSize: '15px', marginBottom: '15px' }}>Government Engineering College, Aurangabad</p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--slate)' }}>
            <span>2022 - 2026</span>
            <span>CGPA: 6.99</span>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
             <h3 style={{ fontSize: '20px', color: 'var(--lightest-slate)' }}>Leadership</h3>
          </div>
          <h4 style={{ fontSize: '18px', color: 'var(--teal)', marginBottom: '5px' }}>Coordinator Sports Club</h4>
          <p style={{ color: 'var(--light-slate)', fontSize: '15px', marginBottom: '15px' }}>Jan 2024 - Present</p>
          
          <p style={{ fontSize: '15px', color: 'var(--slate)' }}>
             Leading the official college Sports, organizing large-scale competitions and 24-hour Events.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;
