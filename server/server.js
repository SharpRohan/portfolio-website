import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  console.log(`Received message from ${name} (${email}): ${message}`);
  
  // In a real app, you would send an email or save to a database here
  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
