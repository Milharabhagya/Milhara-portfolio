import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/experience')
      .then(function(res) { return res.json() })
      .then(function(data) { setItems(data); setLoading(false) })
      .catch(function() { setLoading(false) })
  }, [])

  return (
    <section
      id="experience"
      style={{ position: 'relative', background: '#07070f', overflow: 'hidden' }}
    >
      <style>{`
        @keyframes expOrb {
          0%,100% { opacity:0.12; transform:scale(1); }
          50% { opacity:0.22; transform:scale(1.1); }
        }
      `}</style>

      {/* Orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden="true">
        <div style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%',
          background: 'rgba(124,92,252,0.14)', filter: 'blur(90px)',
          top: -80, left: -80,
          animation: 'expOrb 9s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(6,182,212,0.08)', filter: 'blur(80px)',
          bottom: 0, right: -60,
          animation: 'expOrb 7s ease-in-out infinite 2s',
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
          04. Experience
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
          Journey{' '}
          <span style={{
            background: 'linear-gradient(135deg, #7c5cfc, #a78bfa, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            so far
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
            position: 'relative',
            paddingLeft: '2rem',
          }}>
            {/* Vertical timeline line */}
            <div style={{
              position: 'absolute',
              left: 0, top: 0, bottom: 0,
              width: '0.5px',
              background: 'linear-gradient(180deg, rgba(124,92,252,0.6), rgba(124,92,252,0.05))',
            }} />

            {items.map(function(item, i) {
              return (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease }}
                  style={{ position: 'relative', marginBottom: '2rem' }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.15, type: 'spring', stiffness: 400, damping: 15 }}
                    style={{
                      position: 'absolute',
                      left: -40, top: 18,
                      width: 14, height: 14,
                      borderRadius: '50%',
                      background: 'rgba(124,92,252,0.15)',
                      border: '1.5px solid rgba(124,92,252,0.6)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <div style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: '#7c5cfc',
                    }} />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      x: 6,
                      borderColor: 'rgba(124,92,252,0.4)',
                      boxShadow: '0 8px 30px rgba(124,92,252,0.1)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{
                      padding: '1.25rem 1.5rem',
                      borderRadius: 14,
                      background: 'rgba(255,255,255,0.02)',
                      border: '0.5px solid rgba(255,255,255,0.07)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {/* Date badge */}
                    <div style={{ marginBottom: 8 }}>
                      <span style={{
                        fontFamily: 'monospace',
                        fontSize: 10,
                        letterSpacing: '0.1em',
                        padding: '3px 10px',
                        borderRadius: 999,
                        background: 'rgba(124,92,252,0.12)',
                        border: '0.5px solid rgba(124,92,252,0.3)',
                        color: '#a78bfa',
                        fontWeight: 600,
                      }}>
                        {item.date}
                      </span>
                    </div>

                    {/* Role */}
                    <h3 style={{
                      fontSize: 15, fontWeight: 600,
                      color: '#fff', marginBottom: 4,
                    }}>
                      {item.role}
                    </h3>

                    {/* Org */}
                    <p style={{
                      fontSize: 13,
                      background: 'linear-gradient(135deg, #7c5cfc, #a78bfa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: 500,
                      marginBottom: 10,
                    }}>
                      {item.org}
                    </p>

                    {/* Divider */}
                    <div style={{
                      height: '0.5px',
                      background: 'linear-gradient(90deg, rgba(124,92,252,0.25), transparent)',
                      marginBottom: 10,
                    }} />

                    {/* Description */}
                    <p style={{
                      fontSize: 13, lineHeight: 1.75,
                      color: 'rgba(255,255,255,0.45)',
                    }}>
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}