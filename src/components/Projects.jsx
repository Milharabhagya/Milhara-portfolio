import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const ease = [0.25, 0.46, 0.45, 0.94]

function ProjectCard({ p, i }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.07, ease }}
      whileHover={{ y: -8, borderColor: '#7C5CFC', boxShadow: '0 16px 48px rgba(124,92,252,0.1)' }}
      className="rounded-xl p-6 flex flex-col relative overflow-hidden border"
      style={{ background: '#111111', borderColor: '#222222', transition: 'all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)' }}>
      <motion.div className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: '#7C5CFC', scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }} transition={{ duration: 0.35, ease }} />
      <div className="flex justify-between items-start mb-4">
        <motion.div whileHover={{ rotate: 12, scale: 1.15 }}
          transition={{ type: 'spring', stiffness: 400, damping: 12 }}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
          style={{ background: 'rgba(124,92,252,0.1)' }}>
          {p.icon}
        </motion.div>
        <motion.a href={p.github || 'https://github.com/Milharabhagya'}
          target="_blank" rel="noreferrer"
          whileHover={{ scale: 1.2, color: '#7C5CFC', rotate: 15 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="text-lg" style={{ color: '#444444' }}>↗</motion.a>
      </div>
      <h3 className="text-base font-semibold mb-2" style={{ color: '#FFFFFF' }}>{p.name}</h3>
      <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: '#666666' }}>{p.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {p.tech.map((t, j) => (
          <motion.span key={j}
            initial={{ opacity: 0, scale: 0.7 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: i * 0.07 + j * 0.04, ease }}
            whileHover={{ scale: 1.1, color: '#7C5CFC', borderColor: '#7C5CFC' }}
            className="font-mono text-xs px-2.5 py-1 rounded-full"
            style={{ background: '#1A1A1A', color: '#888888', border: '0.5px solid #333333', transition: 'all 0.2s ease' }}>
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
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => { setProjects(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <motion.p ref={ref}
        initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#7C5CFC' }}>
        03. Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="text-4xl font-bold mb-12" style={{ color: '#FFFFFF' }}>
        Things I have built
      </motion.h2>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-8 rounded-full border-2"
            style={{ borderColor: '#7C5CFC', borderTopColor: 'transparent' }} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => <ProjectCard key={p._id} p={p} i={i} />)}
        </div>
      )}
    </section>
  )
}