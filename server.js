// backend/server.js
// Simple Express backend for MEE SAKSHI NEWS E-paper CMS

const express = require('express');
const app = express();

app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'MEE SAKSHI Epaper Backend is live!' });
});

// Root route
app.get('/', (req, res) => {
  res.send('<h2>✅ MEE SAKSHI NEWS Backend is Running on Render!</h2>');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
