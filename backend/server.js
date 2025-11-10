// server.js
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

// ✅ Enable CORS (important!)
app.use(cors({
  origin: '*', // allow all for now — you can restrict later
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// ✅ Middleware
app.use(express.json())

// ✅ Health check route (for testing)
app.get('/api/health', (req, res) => {
  res.send('MEE SAKSHI NEWS Backend is Running on Render!')
})

// ✅ Example login route (for frontend testing)
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body
  if (email === 'admin@meesakshinews.com' && password === 'Admin@123') {
    return res.json({ token: 'mock-token-12345', message: 'Login successful' })
  }
  res.status(401).json({ message: 'Invalid credentials' })
})

// ✅ Example PDF upload route
app.post('/editions', (req, res) => {
  res.json({ message: 'Edition uploaded successfully (mock endpoint)' })
})

// ✅ Example editions route
app.get('/editions', (req, res) => {
  res.json([
    { id: 1, title: 'Mee Sakshi Edition 1', date: new Date(), pdfUrl: '/sample1.pdf' },
    { id: 2, title: 'Mee Sakshi Edition 2', date: new Date(), pdfUrl: '/sample2.pdf' }
  ])
})

// ✅ Start server
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`)
})
