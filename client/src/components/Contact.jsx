import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      setStatus('An error occurred. Please try again later.');
    }
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section className="section" id="contact" style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '100px' }}>
      <p className="mono-accent" style={{ marginBottom: '20px' }}>05. What's Next?</p>
      <h2 style={{ fontSize: 'clamp(40px, 5vw, 60px)', color: 'var(--lightest-slate)', marginBottom: '20px' }}>Get In Touch</h2>
      
      <p style={{ color: 'var(--slate)', fontSize: '18px', marginBottom: '50px' }}>
        Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <div className="card" style={{ textAlign: 'left' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="name" style={{ color: 'var(--light-slate)', fontFamily: 'var(--font-mono)', fontSize: '13px', marginBottom: '5px' }}>Name</label>
            <input 
              type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
              style={{ backgroundColor: 'var(--lightest-navy)', border: '1px solid var(--lightest-navy)', color: 'var(--lightest-slate)', padding: '12px 15px', borderRadius: '4px', fontFamily: 'var(--font-sans)', fontSize: '15px', outline: 'none', transition: 'var(--transition)' }}
              onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--lightest-navy)'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="email" style={{ color: 'var(--light-slate)', fontFamily: 'var(--font-mono)', fontSize: '13px', marginBottom: '5px' }}>Email</label>
            <input 
              type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
              style={{ backgroundColor: 'var(--lightest-navy)', border: '1px solid var(--lightest-navy)', color: 'var(--lightest-slate)', padding: '12px 15px', borderRadius: '4px', fontFamily: 'var(--font-sans)', fontSize: '15px', outline: 'none', transition: 'var(--transition)' }}
              onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--lightest-navy)'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="message" style={{ color: 'var(--light-slate)', fontFamily: 'var(--font-mono)', fontSize: '13px', marginBottom: '5px' }}>Message</label>
            <textarea 
              id="message" name="message" required rows="5" value={formData.message} onChange={handleChange}
              style={{ backgroundColor: 'var(--lightest-navy)', border: '1px solid var(--lightest-navy)', color: 'var(--lightest-slate)', padding: '12px 15px', borderRadius: '4px', fontFamily: 'var(--font-sans)', fontSize: '15px', outline: 'none', resize: 'vertical', transition: 'var(--transition)' }}
              onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--lightest-navy)'}
            />
          </div>

          <button type="submit" className="btn" style={{ marginTop: '10px', alignSelf: 'center' }}>
            Say Hello
          </button>

          {status && <p style={{ textAlign: 'center', marginTop: '15px', color: status.includes('success') ? 'var(--teal)' : '#f87171', fontFamily: 'var(--font-mono)', fontSize: '14px' }}>{status}</p>}

        </form>
      </div>
    </section>
  );
};

export default Contact;
