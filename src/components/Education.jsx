import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.25, 0.46, 0.45, 0.94]

const education = [
  {
    icon: '🎓',
    degree: 'BSc (Hons) Software Engineering',
    institution: 'NSBM Green University · Affiliated with Plymouth University, UK',
    year: '2023 — 2026',
    type: 'University',
    subjects: [],
    result: null,
  },
  {
    icon: '📗',
    degree: 'Advanced Level (A/L) — Physical Science Stream',
    institution: 'Maliyadeva College, Kurunegala',
    year: '2022',
    type: 'A/L',
    subjects: ['Combined Mathematics', 'Physics', 'Chemistry'],
    result: null,
  },
  {
    icon: '📘',
    degree: 'Ordinary Level (O/L)',
    institution: 'Maliyadeva College, Kurunegala',
    year: '2019',
    type: 'O/L',
    subjects: [],
    result: 'Mathematics — A · English — C',
  },
  {
    icon: '🏫',
    degree: 'Primary & Secondary Education',
    institution: 'Maliyadeva College, Kurunegala',
    year: 'Up to 2022',
    type: 'School',
    subjects: [],
    result: null,
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="education"
      style={{ position: 'relative', background: '#07070f', overflow: 'hidden' }}
    >
      <style>{`
        @keyframes eduOrb {
          0%,100% { opacity:0.12; transform:scale(1); }
          50% { opacity:0.22; transform:scale(1.1); }
        }
      `}</style>

      {/* Orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden="true">
        <div style={{
          position: 'absolute', width: 420, height: 420, borderRadius: '50%',
          background: 'rgba(124,92,252,0.14)', filter: 'blur(100px)',
          top: -80, right: -80,
          animation: 'eduOrb 9s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(6,182,212,0.08)', filter: 'blur(80px)',
          bottom: 80, left: -60,
          animation: 'eduOrb 8s ease-in-out infinite 3s',
        }} />
      </div>

      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(124,92,252,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,252,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1152, margin: '0 auto', padding: '6rem 1.5rem' }}>

        {/* Label */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          style={{
            fontFamily: 'monospace', fontSize: 11,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#7c5cfc', fontWeight: 600, marginBottom: 8,
          }}
        >
          05. Education
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700, color: '#fff', marginBottom: 8,
          }}
        >
          Academic{' '}
          <span style={{
            background: 'linear-gradient(135deg, #7c5cfc, #a78bfa, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            background
          </span>
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          style={{
            width: 48, height: 2,
            background: 'linear-gradient(90deg, #7c5cfc, #c084fc)',
            borderRadius: 999, marginBottom: '3rem', originX: 0,
          }}
        />

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {education.map(function(item, i) {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease }}
                whileHover={{
                  x: 6,
                  borderColor: 'rgba(124,92,252,0.4)',
                  boxShadow: '0 8px 30px rgba(124,92,252,0.1)',
                }}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  padding: '1.25rem 1.5rem',
                  borderRadius: 16,
                  background: 'rgba(255,255,255,0.02)',
                  border: '0.5px solid rgba(255,255,255,0.07)',
                  transition: 'all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
                }}
              >
                {/* Icon box */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                  style={{
                    width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(124,92,252,0.12)',
                    border: '0.5px solid rgba(124,92,252,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22,
                  }}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <div style={{ flex: 1 }}>

                  {/* Top row */}
                  <div style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', flexWrap: 'wrap',
                    gap: 8, marginBottom: 6,
                  }}>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>
                      {item.degree}
                    </h3>
                    <span style={{
                      fontFamily: 'monospace', fontSize: 10,
                      padding: '3px 10px', borderRadius: 999,
                      background: 'rgba(124,92,252,0.12)',
                      border: '0.5px solid rgba(124,92,252,0.3)',
                      color: '#a78bfa', fontWeight: 600,
                      whiteSpace: 'nowrap',
                    }}>
                      {item.type}
                    </span>
                  </div>

                  {/* Institution */}
                  <p style={{
                    fontSize: 13, marginBottom: 4,
                    color: 'rgba(255,255,255,0.45)',
                  }}>
                    {item.institution}
                  </p>

                  {/* Year */}
                  <p style={{
                    fontFamily: 'monospace', fontSize: 11,
                    marginBottom: 8,
                    background: 'linear-gradient(135deg, #7c5cfc, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 600,
                  }}>
                    {item.year}
                  </p>

                  {/* Divider */}
                  {(item.subjects.length > 0 || item.result) && (
                    <div style={{
                      height: '0.5px',
                      background: 'linear-gradient(90deg, rgba(124,92,252,0.25), transparent)',
                      marginBottom: 10,
                    }} />
                  )}

                  {/* Subjects */}
                  {item.subjects.length > 0 && (
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
                      {item.subjects.map(function(s, j) {
                        return (
                          <motion.span
                            key={s}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.3 + i * 0.1 + j * 0.05, ease }}
                            whileHover={{
                              scale: 1.08,
                              color: '#a78bfa',
                              borderColor: 'rgba(124,92,252,0.5)',
                              background: 'rgba(124,92,252,0.1)',
                            }}
                            style={{
                              fontSize: 11, padding: '3px 10px', borderRadius: 999,
                              background: 'rgba(255,255,255,0.04)',
                              color: 'rgba(255,255,255,0.45)',
                              border: '0.5px solid rgba(255,255,255,0.1)',
                              transition: 'all 0.2s ease', cursor: 'default',
                            }}
                          >
                            {s}
                          </motion.span>
                        )
                      })}
                    </div>
                  )}

                  {/* Result */}
                  {item.result && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        marginTop: 8, padding: '4px 12px', borderRadius: 999,
                        background: 'rgba(124,92,252,0.08)',
                        border: '0.5px solid rgba(124,92,252,0.2)',
                      }}
                    >
                      <span>🏆</span>
                      <span style={{ fontSize: 11, color: '#a78bfa', fontWeight: 500 }}>
                        {item.result}
                      </span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}