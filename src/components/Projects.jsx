import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.25, 0.46, 0.45, 0.94]

const projects = [
  { icon: '📋', name: 'Safe Serve', desc: 'Web app for Public Health Inspectors with dashboard, calendar, inspection log and analytics.', tech: ['HTML', 'CSS', 'Java'] },
  { icon: '💡', name: 'Lumi Smart', desc: 'IoT smart street lighting with dashboard, map view, control panel, zone log and analytics.', tech: ['HTML', 'CSS', 'JavaScript', 'IoT'] },
  { icon: '📱', name: 'Team Sync', desc: 'Mobile project management app for team collaboration and task management.', tech: ['Flutter', 'Dart', 'Firebase'] },
  { icon: '🌿', name: 'AirLytics', desc: 'Real-time air quality monitoring for Colombo with map view, alerts and historical AQI data.', tech: ['HTML', 'CSS', 'JavaScript'] },
  { icon: '💳', name: 'Smart POS', desc: 'Point-of-sale system with products, stocks, discounts, bills and customer management.', tech: ['HTML', 'CSS', 'JavaScript'] },
  { icon: '🎬', name: 'Filmor Cinema', desc: 'Cinema booking with movie selection, PayPal payment and e-ticket generation.', tech: ['HTML', 'CSS', 'Bootstrap', 'JSP'] },
  { icon: '📚', name: 'Library Management', desc: 'Library system for managing books, issuing, returning and tracking due dates.', tech: ['HTML', 'CSS', 'JavaScript'] },
  { icon: '👗', name: 'Elegance Clothing', desc: 'E-commerce store with product listings, cart, wishlist and order summary.', tech: ['HTML', 'CSS'] },
  { icon: '⛽', name: 'PetroMind', desc: 'Flutter fuel management app with live prices, nearby stations, AI chatbot and role-based dashboards.', tech: ['Flutter', 'Firebase', 'FCM', 'AI API'] },
]

function ProjectCard({ p, i }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.07, ease }}
      whileHover={{ y: -8, borderColor: '#E8622A', boxShadow: '0 16px 48px rgba(232,98,42,0.1)' }}
      className="rounded-xl p-6 flex flex-col relative overflow-hidden border"
      style={{
        background: '#1C1C1A',
        borderColor: '#3A3A38',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)'
      }}>
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: '#E8622A', scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35, ease }} />

      <div className="flex justify-between items-start mb-4">
        <motion.div
          whileHover={{ rotate: 12, scale: 1.15 }}
          transition={{ type: 'spring', stiffness: 400, damping: 12 }}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
          style={{ background: 'rgba(232,98,42,0.1)' }}>
          {p.icon}
        </motion.div>
        <motion.a
          href="https://github.com/Milharabhagya"
          target="_blank" rel="noreferrer"
          whileHover={{ scale: 1.2, color: '#E8622A', rotate: 15 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="text-lg" style={{ color: '#5F5E5A' }}>
          ↗
        </motion.a>
      </div>

      <h3 className="text-base font-semibold text-white mb-2">{p.name}</h3>
      <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: '#5F5E5A' }}>{p.desc}</p>

      <div className="flex flex-wrap gap-1.5">
        {p.tech.map((t, j) => (
          <motion.span key={t}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: i * 0.07 + j * 0.04, ease }}
            whileHover={{ scale: 1.1, color: '#E8622A', borderColor: '#E8622A' }}
            className="font-mono text-xs px-2.5 py-1 rounded-full"
            style={{
              background: '#262624',
              color: '#B4B2A9',
              border: '0.5px solid #3A3A38',
              transition: 'all 0.2s ease'
            }}>
            {t}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <motion.p ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="font-mono text-xs tracking-widest uppercase mb-3"
        style={{ color: '#E8622A' }}>
        Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="text-4xl font-bold text-white mb-12">
        Things I have built
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  )
}