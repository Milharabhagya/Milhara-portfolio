import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.25, 0.46, 0.45, 0.94]

const education = [
  { icon: '🎓', degree: 'BSc (Hons) Software Engineering', institution: 'NSBM Green University · Affiliated with Plymouth University, UK', year: '2023 — 2026', type: 'University', subjects: [], result: null },
  { icon: '📗', degree: 'Advanced Level (A/L) — Physical Science Stream', institution: 'Maliyadeva College, Kurunegala', year: '2022', type: 'A/L', subjects: ['Combined Mathematics', 'Physics', 'Chemistry'], result: null },
  { icon: '📘', degree: 'Ordinary Level (O/L)', institution: 'Maliyadeva College, Kurunegala', year: '2019', type: 'O/L', subjects: [], result: 'Mathematics — A · English — C' },
  { icon: '🏫', degree: 'Primary & Secondary Education', institution: 'Maliyadeva College, Kurunegala', year: 'Up to 2022', type: 'School', subjects: [], result: null },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-24">
      <motion.p ref={ref}
        initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#7C5CFC' }}>
        05. Education
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="text-4xl font-bold mb-12" style={{ color: '#FFFFFF' }}>
        Academic background
      </motion.h2>
      <div className="flex flex-col gap-4">
        {education.map((item, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease }}
            whileHover={{ x: 6, borderColor: '#7C5CFC', boxShadow: '0 8px 30px rgba(124,92,252,0.08)' }}
            className="flex gap-5 items-start p-6 rounded-xl border"
            style={{ background: '#111111', borderColor: '#222222', transition: 'all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)' }}>
            <motion.div whileHover={{ rotate: 12, scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 400, damping: 12 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: 'rgba(124,92,252,0.1)' }}>
              {item.icon}
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <h3 className="text-base font-semibold" style={{ color: '#FFFFFF' }}>{item.degree}</h3>
                <span className="font-mono text-xs px-3 py-1 rounded-full"
                  style={{ background: 'rgba(124,92,252,0.1)', color: '#7C5CFC' }}>
                  {item.type}
                </span>
              </div>
              <p className="text-sm mb-1" style={{ color: '#888888' }}>{item.institution}</p>
              <p className="font-mono text-xs mb-2" style={{ color: '#7C5CFC' }}>{item.year}</p>
              {item.subjects.length > 0 && (
                <div className="flex gap-2 flex-wrap mt-2">
                  {item.subjects.map((s, j) => (
                    <motion.span key={s}
                      initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.1 + j * 0.05, ease }}
                      whileHover={{ scale: 1.08, color: '#7C5CFC', borderColor: '#7C5CFC' }}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ background: '#1A1A1A', color: '#888888', border: '0.5px solid #333333', transition: 'all 0.2s ease' }}>
                      {s}
                    </motion.span>
                  ))}
                </div>
              )}
              {item.result && (
                <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="text-xs mt-2" style={{ color: '#7C5CFC' }}>
                  🏆 {item.result}
                </motion.p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}