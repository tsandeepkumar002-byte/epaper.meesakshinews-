// Simple Express backend server for MEE SAKSHI E-Paper CMS
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic test route
app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'MEE SAKSHI Epaper Backend is live!' });
});

// Root route
app.get('/', (req, res) => {
  res.send('<h2>✅ MEE SAKSHI NEWS Backend is Running on Render!</h2>');
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
