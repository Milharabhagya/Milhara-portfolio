import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const ease = [0.25, 0.46, 0.45, 0.94]

function SkillCard({ cat, cardIndex }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: cardIndex * 0.1, ease }}
      whileHover={{
        y: -6,
        borderColor: 'rgba(124,92,252,0.4)',
        boxShadow: '0 12px 40px rgba(124,92,252,0.12)',
      }}
      cursor="default"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '0.5px solid rgba(255,255,255,0.07)',
        borderRadius: 16,
        padding: '1.25rem',
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}
    >
      {/* Card header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'rgba(124,92,252,0.12)',
          border: '0.5px solid rgba(124,92,252,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, flexShrink: 0,
        }}>
          <motion.span
            whileHover={{ rotate: 15, scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 12 }}
          >
            {cat.emoji}
          </motion.span>
        </div>
        <p style={{
          fontFamily: 'monospace',
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          background: 'linear-gradient(135deg, #7c5cfc, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: 600,
        }}>
          {cat.category}
        </p>
      </div>

      {/* Divider */}
      <div style={{
        height: '0.5px',
        background: 'linear-gradient(90deg, rgba(124,92,252,0.3), transparent)',
        marginBottom: '1rem',
      }} />

      {/* Skill tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {cat.skills.map(function(skill, j) {
          return (
            <motion.span
              key={j}
              initial={{ opacity: 0, scale: 0.5, y: 8 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                type: 'spring', stiffness: 500, damping: 20,
                delay: cardIndex * 0.1 + j * 0.06,
              }}
              whileHover={{
                scale: 1.1,
                color: '#a78bfa',
                borderColor: 'rgba(124,92,252,0.5)',
                background: 'rgba(124,92,252,0.1)',
              }}
              whileTap={{ scale: 0.92 }}
              style={{
                fontSize: 11,
                padding: '4px 12px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.04)',
                color: 'rgba(255,255,255,0.5)',
                border: '0.5px solid rgba(255,255,255,0.1)',
                transition: 'all 0.2s ease',
                cursor: 'default',
                userSelect: 'none',
              }}
            >
              {skill}
            </motion.span>
          )
        })}
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
      .then(function(res) { return res.json() })
      .then(function(data) { setCategories(data); setLoading(false) })
      .catch(function() { setLoading(false) })
  }, [])

  return (
    <section
      id="skills"
      style={{ position: 'relative', background: '#07070f', overflow: 'hidden' }}
    >
      {/* Orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden="true">
        <div style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%',
          background: 'rgba(124,92,252,0.15)', filter: 'blur(90px)',
          top: -100, right: -100,
          animation: 'skillOrb 9s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(99,179,237,0.08)', filter: 'blur(80px)',
          bottom: 0, left: -80,
          animation: 'skillOrb 7s ease-in-out infinite 2s',
        }} />
      </div>

      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(124,92,252,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,252,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <style>{`
        @keyframes skillOrb {
          0%,100% { opacity:0.12; transform:scale(1); }
          50% { opacity:0.22; transform:scale(1.1); }
        }
      `}</style>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1152, margin: '0 auto', padding: '6rem 1.5rem' }}>

        {/* Section label */}
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
           Skills
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: 8,
          }}
        >
          My tech{' '}
          <span style={{
            background: 'linear-gradient(135deg, #7c5cfc, #a78bfa, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            stack
          </span>
        </motion.h2>

        {/* Gradient underline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          style={{
            width: 48, height: 2,
            background: 'linear-gradient(90deg, #7c5cfc, #c084fc)',
            borderRadius: 999, marginBottom: '3rem',
            originX: 0,
          }}
        />

        {/* Loading spinner */}
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1rem',
          }}>
            {categories.map(function(cat, i) {
              return <SkillCard key={cat._id} cat={cat} cardIndex={i} />
            })}
          </div>
        )}
      </div>
    </section>
  )
}