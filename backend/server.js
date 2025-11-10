// server.js  ✅ CommonJS version (works in Render)
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.send('MEE SAKSHI NEWS Backend is Running on Render!')
})

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body
  if (email === 'admin@meesakshinews.com' && password === 'Admin@123') {
    return res.json({ token: 'mock-token-12345', message: 'Login successful' })
  }
  res.status(401).json({ message: 'Invalid credentials' })
})

app.post('/editions', (req, res) => {
  res.json({ message: 'Edition uploaded successfully (mock endpoint)' })
})

app.get('/editions', (req, res) => {
  res.json([
    { id: 1, title: 'Mee Sakshi Edition 1', date: new Date(), pdfUrl: '/sample1.pdf' },
    { id: 2, title: 'Mee Sakshi Edition 2', date: new Date(), pdfUrl: '/sample2.pdf' }
  ])
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`))
