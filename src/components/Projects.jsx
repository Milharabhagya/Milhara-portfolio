import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const ease = [0.25, 0.46, 0.45, 0.94]

function ProjectCard({ p, i }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.07, ease }}
      whileHover={{
        y: -8,
        borderColor: 'rgba(124,92,252,0.45)',
        boxShadow: '0 16px 48px rgba(124,92,252,0.12)',
      }}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '0.5px solid rgba(255,255,255,0.07)',
        borderRadius: 16,
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
        cursor: 'default',
      }}
    >
      {/* Top gradient line on hover */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35, ease }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, #7c5cfc, #c084fc)',
          originX: 0,
        }}
      />

      {/* Top row — icon + link */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <motion.div
          whileHover={{ rotate: 12, scale: 1.15 }}
          transition={{ type: 'spring', stiffness: 400, damping: 12 }}
          style={{
            width: 40, height: 40, borderRadius: 10,
            background: 'rgba(124,92,252,0.12)',
            border: '0.5px solid rgba(124,92,252,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18,
          }}
        >
          {p.icon}
        </motion.div>

        <motion.a
          href={p.github || 'https://github.com/Milharabhagya'}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2, y: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.25)',
            textDecoration: 'none',
            transition: 'color 0.2s',
            lineHeight: 1,
          }}
          onMouseEnter={function(e) { e.target.style.color = '#a78bfa' }}
          onMouseLeave={function(e) { e.target.style.color = 'rgba(255,255,255,0.25)' }}
        >
          ↗
        </motion.a>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8,
      }}>
        {p.name}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: 12, lineHeight: 1.75, color: 'rgba(255,255,255,0.45)',
        marginBottom: '1rem', flex: 1,
      }}>
        {p.desc}
      </p>

      {/* Divider */}
      <div style={{
        height: '0.5px',
        background: 'linear-gradient(90deg, rgba(124,92,252,0.25), transparent)',
        marginBottom: '0.875rem',
      }} />

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {p.tech.map(function(t, j) {
          return (
            <motion.span
              key={j}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.07 + j * 0.04, ease }}
              whileHover={{
                scale: 1.08,
                color: '#a78bfa',
                borderColor: 'rgba(124,92,252,0.5)',
                background: 'rgba(124,92,252,0.1)',
              }}
              style={{
                fontFamily: 'monospace',
                fontSize: 10,
                padding: '3px 10px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.04)',
                color: 'rgba(255,255,255,0.4)',
                border: '0.5px solid rgba(255,255,255,0.1)',
                transition: 'all 0.2s ease',
                cursor: 'default',
              }}
            >
              {t}
            </motion.span>
          )
        })}
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
      .then(function(res) { return res.json() })
      .then(function(data) { setProjects(data); setLoading(false) })
      .catch(function() { setLoading(false) })
  }, [])

  return (
    <section
      id="projects"
      style={{ position: 'relative', background: '#07070f', overflow: 'hidden' }}
    >
      <style>{`
        @keyframes projOrb {
          0%,100% { opacity:0.12; transform:scale(1); }
          50% { opacity:0.22; transform:scale(1.1); }
        }
      `}</style>

      {/* Orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden="true">
        <div style={{
          position: 'absolute', width: 450, height: 450, borderRadius: '50%',
          background: 'rgba(124,92,252,0.14)', filter: 'blur(100px)',
          bottom: -100, right: -100,
          animation: 'projOrb 9s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: 320, height: 320, borderRadius: '50%',
          background: 'rgba(236,72,153,0.08)', filter: 'blur(80px)',
          top: 100, left: -80,
          animation: 'projOrb 7s ease-in-out infinite 3s',
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
          03. Projects
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
          Things I have{' '}
          <span style={{
            background: 'linear-gradient(135deg, #7c5cfc, #a78bfa, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            built
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

        {/* Loading */}
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 160 }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              style={{
                width: 32, height: 32, borderRadius: '50%',
                border: '2px solid rgba(124,92,252,0.2)',
                borderTopColor: '#7c5cfc',
              }}
            />
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
          }}>
            {projects.map(function(p, i) {
              return <ProjectCard key={p._id} p={p} i={i} />
            })}
          </div>
        )}
      </div>
    </section>
  )
}