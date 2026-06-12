import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import { config } from 'dotenv'

config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ status: 'Running ✅' })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields required' })
  }
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    })
    res.json({ success: true })
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: err.message })
  }
})

const server = app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000')
})

server.on('error', (err) => {
  console.error('Server error:', err)
})