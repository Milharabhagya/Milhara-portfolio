import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import { config } from 'dotenv'
import mongoose from 'mongoose'

config()

// ── Connect MongoDB ──
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err.message))

// ── SCHEMAS ──

const projectSchema = new mongoose.Schema({
  icon: { type: String, default: '📁' },
  name: { type: String, required: true },
  desc: { type: String, required: true },
  tech: [{ type: String }],
  github: { type: String, default: 'https://github.com/Milharabhagya' },
  live: { type: String, default: '' },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
})

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  emoji: { type: String, default: '⚙️' },
  skills: [{ type: String }],
  order: { type: Number, default: 0 }
})

const experienceSchema = new mongoose.Schema({
  date: { type: String, required: true },
  role: { type: String, required: true },
  org: { type: String, required: true },
  desc: { type: String, required: true },
  order: { type: Number, default: 0 }
})

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
})

const Project = mongoose.model('Project', projectSchema)
const Skill = mongoose.model('Skill', skillSchema)
const Experience = mongoose.model('Experience', experienceSchema)
const Message = mongoose.model('Message', messageSchema)

// ── SEED DATA (runs once if DB is empty) ──
const seedData = async () => {
  const projectCount = await Project.countDocuments()
  if (projectCount === 0) {
    await Project.insertMany([
      { icon: '📋', name: 'Safe Serve', desc: 'Web app for Public Health Inspectors with dashboard, calendar, inspection log and analytics.', tech: ['HTML', 'CSS', 'Java'], github: 'https://github.com/SeneshFitzroy/SafeServe-PHI-Manager', order: 1 },
      { icon: '💡', name: 'Lumi Smart', desc: 'IoT smart street lighting with dashboard, map view, control panel, zone log and analytics.', tech: ['HTML', 'CSS', 'JavaScript', 'IoT'], github: 'https://github.com/Milharabhagya', order: 2 },
      { icon: '📱', name: 'Team Sync', desc: 'Mobile project management app for team collaboration and task management.', tech: ['Flutter', 'Dart', 'Firebase'], github: 'https://github.com/SeneshFitzroy/Task-Sync-Project-Management-Application', order: 3 },
      { icon: '🌿', name: 'AirLytics', desc: 'Real-time air quality monitoring for Colombo with map view, alerts and historical AQI data.', tech: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/Milharabhagya', order: 4 },
      { icon: '💳', name: 'Smart POS', desc: 'Point-of-sale system with products, stocks, discounts, bills and customer management.', tech: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/sadeesacs/SmartPOS', order: 5 },
      { icon: '🎬', name: 'Filmor Cinema', desc: 'Cinema booking with movie selection, PayPal payment and e-ticket generation.', tech: ['HTML', 'CSS', 'Bootstrap', 'JSP'], github: 'https://github.com/Mandira-16/JavaProject', order: 6 },
      { icon: '📚', name: 'Library Management', desc: 'Library system for managing books, issuing, returning and tracking due dates.', tech: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/Milharabhagya', order: 7 },
      { icon: '👗', name: 'Elegance Clothing', desc: 'E-commerce store with product listings, cart, wishlist and order summary.', tech: ['HTML', 'CSS'], github: 'https://github.com/Milharabhagya', order: 8 },
      { icon: '⛽', name: 'PetroMind', desc: 'Flutter fuel management app with live prices, nearby stations, AI chatbot and role-based dashboards.', tech: ['Flutter', 'Firebase', 'FCM', 'AI API'], github: 'https://github.com/Milharabhagya/PetroMind_Final_Year_Project', order: 9 },
      { icon: '🌐', name: 'Personal Portfolio', desc: 'My personal portfolio website built with React, Vite, Tailwind CSS and Node.js. Features smooth Framer Motion animations, particle background, MongoDB database and working contact form.', tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'MongoDB'], github: 'https://github.com/Milharabhagya/Milhara-portfolio', order: 0 },
    ])
    console.log('✅ Projects seeded')
  }

  const skillCount = await Skill.countDocuments()
  if (skillCount === 0) {
    await Skill.insertMany([
      { category: 'Frontend', emoji: '🎨', skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'JavaScript'], order: 1 },
      { category: 'Backend', emoji: '⚙️', skills: ['Node.js', 'Express.js', 'Java', 'JSP', 'REST APIs'], order: 2 },
      { category: 'Mobile', emoji: '📱', skills: ['Flutter', 'Dart', 'Firebase', 'FCM'], order: 3 },
      { category: 'Database & Tools', emoji: '🛠️', skills: ['MongoDB', 'Firebase Firestore', 'Git', 'GitHub', 'VS Code'], order: 4 },
    ])
    console.log('✅ Skills seeded')
  }

  const expCount = await Experience.countDocuments()
  if (expCount === 0) {
    await Experience.insertMany([
      {
        date: '2023 — Present',
        role: 'Software Engineering Undergraduate',
        org: 'NSBM Green University · Plymouth University UK',
        desc: 'Pursuing a BSc (Hons) in Software Engineering, building full-stack web apps, mobile apps with Flutter, and IoT-integrated systems.',
        order: 1
      },
      {
        date: 'Project Work',
        role: 'Frontend Developer — Multiple Projects',
        org: 'Academic & Personal Projects',
        desc: 'Led frontend development across 9+ projects spanning healthcare, IoT, e-commerce, cinema, finance and fuel management.',
        order: 2
      }
    ])
    console.log('✅ Experience seeded')
  }
}

// ── EXPRESS APP ──
const app = express()
app.use(cors())
app.use(express.json())

// Health check
app.get('/', (req, res) => {
  res.json({ status: '✅ Milhara Portfolio Backend Running' })
})

// ── PROJECT ROUTES ──
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 })
    res.json(projects)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.post('/api/projects', async (req, res) => {
  try {
    const project = new Project(req.body)
    await project.save()
    res.json({ success: true, project })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.put('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({ success: true, project })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.delete('/api/projects/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id)
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── SKILL ROUTES ──
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ order: 1 })
    res.json(skills)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.put('/api/skills/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({ success: true, skill })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── EXPERIENCE ROUTES ──
app.get('/api/experience', async (req, res) => {
  try {
    const experience = await Experience.find().sort({ order: 1 })
    res.json(experience)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.post('/api/experience', async (req, res) => {
  try {
    const exp = new Experience(req.body)
    await exp.save()
    res.json({ success: true, exp })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.put('/api/experience/:id', async (req, res) => {
  try {
    const exp = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({ success: true, exp })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.delete('/api/experience/:id', async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id)
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── MESSAGE ROUTES ──
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields required' })
  }
  try {
    const newMessage = new Message({ name, email, message })
    await newMessage.save()
    console.log('✅ Message saved to MongoDB')

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
      subject: `New portfolio message from ${name}`,
      html: `
        <div style="font-family:sans-serif;padding:20px;background:#111110;border-radius:12px;">
          <h2 style="color:#E8622A;">New Portfolio Message 📬</h2>
          <p style="color:#F1EFE8;"><b>Name:</b> ${name}</p>
          <p style="color:#F1EFE8;"><b>Email:</b> ${email}</p>
          <p style="color:#F1EFE8;"><b>Message:</b> ${message}</p>
          <a href="mailto:${email}" style="background:#E8622A;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;">Reply to ${name}</a>
        </div>
      `
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for reaching out — Milhara Bhagya',
      html: `
        <div style="font-family:sans-serif;padding:20px;background:#111110;border-radius:12px;">
          <h2 style="color:#E8622A;">Hey ${name}! 👋</h2>
          <p style="color:#B4B2A9;">Thanks for your message! I will get back to you within 24 hours.</p>
          <div style="background:#1C1C1A;padding:16px;border-radius:8px;border-left:3px solid #E8622A;margin:16px 0;">
            <p style="color:#F1EFE8;">${message}</p>
          </div>
          <p style="color:#E8622A;font-weight:600;">Milhara Bhagya</p>
          <p style="color:#5F5E5A;font-size:12px;">Full Stack Developer · NSBM Green University</p>
        </div>
      `
    })

    res.json({ success: true, message: 'Message sent and saved!' })
  } catch (err) {
    console.error('❌ Error:', err.message)
    res.status(500).json({ error: err.message })
  }
})

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 })
    res.json(messages)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.delete('/api/messages/:id', async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id)
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── START ──
const server = app.listen(5000, async () => {
  console.log('✅ Server running on http://localhost:5000')
  await seedData()
})

server.on('error', (err) => {
  console.error('Server error:', err)
})