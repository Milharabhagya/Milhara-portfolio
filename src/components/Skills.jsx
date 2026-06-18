import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const ease = [0.25, 0.46, 0.45, 0.94]

function SkillCard({ cat, cardIndex }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: cardIndex * 0.1, ease }}
      whileHover={{ y: -6, borderColor: '#7C5CFC', boxShadow: '0 12px 40px rgba(124,92,252,0.1)' }}
      className="rounded-xl p-5 border cursor-default"
      style={{ background: '#111111', borderColor: '#222222', transition: 'all 0.3s ease' }}>
      <div className="flex items-center gap-2 mb-4">
        <motion.span whileHover={{ rotate: 15, scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 12 }}
          className="text-lg">{cat.emoji}</motion.span>
        <p className="font-mono text-xs uppercase tracking-widest" style={{ color: '#7C5CFC' }}>{cat.category}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, j) => (
          <motion.span key={j}
            initial={{ opacity: 0, scale: 0.5, y: 8 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 500, damping: 20, delay: cardIndex * 0.1 + j * 0.06 }}
            whileHover={{ scale: 1.12, color: '#7C5CFC', borderColor: '#7C5CFC', background: 'rgba(124,92,252,0.08)' }}
            whileTap={{ scale: 0.92 }}
            className="text-xs px-3 py-1.5 rounded-full cursor-default select-none"
            style={{ background: '#1A1A1A', color: '#888888', border: '0.5px solid #333333', transition: 'all 0.2s ease' }}>
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/skills')
      .then(res => res.json())
      .then(data => { setCategories(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <motion.p ref={ref}
        initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#7C5CFC' }}>
        02. Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="text-4xl font-bold mb-12" style={{ color: '#FFFFFF' }}>
        My tech stack
      </motion.h2>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-8 rounded-full border-2"
            style={{ borderColor: '#7C5CFC', borderTopColor: 'transparent' }} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => <SkillCard key={cat._id} cat={cat} cardIndex={i} />)}
        </div>
      )}
    </section>
  )
}