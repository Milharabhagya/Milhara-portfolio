import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
})

const PARTICLES = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: `${(i * 37.3) % 100}%`,
  top: `${(i * 53.7) % 100}%`,
  size: `${1 + (i % 3)}px`,
  duration: 3 + (i % 5),
  delay: (i % 4) * 0.8,
  opacity: 0.15 + (i % 4) * 0.08,
}))

const TECH_TAGS = ['React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'Express', 'REST API', 'Git']

const STATS = [
  ['9+', 'Projects built'],
  ['4+', 'Specializations'],
  ['2026', 'Graduation'],
  ['LK', 'Based in Sri Lanka'],
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#07070f' }}
    >

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes orb-pulse {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50%       { opacity: 0.35; transform: scale(1.12); }
        }
      `}</style>

      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div style={{
          position: 'absolute', width: 520, height: 520, borderRadius: '50%',
          background: 'rgba(124,92,252,0.22)', filter: 'blur(100px)',
          top: -160, left: -160,
          animation: 'orb-pulse 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: 380, height: 380, borderRadius: '50%',
          background: 'rgba(99,179,237,0.14)', filter: 'blur(90px)',
          top: '40%', right: -80,
          animation: 'orb-pulse 10s ease-in-out infinite 3s',
        }} />
        <div style={{
          position: 'absolute', width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(236,72,153,0.12)', filter: 'blur(80px)',
          bottom: 80, left: '35%',
          animation: 'orb-pulse 7s ease-in-out infinite 5s',
        }} />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,92,252,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,92,252,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {PARTICLES.map(p => (
            <div
              key={p.id}
              style={{
                position: 'absolute',
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                borderRadius: '50%',
                background: 'rgba(124,92,252,0.7)',
                opacity: p.opacity,
                animation: `heroFloat ${p.duration}s ${p.delay}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16">

        {/* Available badge */}
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <span
            className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full"
            style={{
              background: 'rgba(124,92,252,0.12)',
              border: '0.5px solid rgba(124,92,252,0.4)',
              color: '#a78bfa',
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#7c5cfc', display: 'inline-block',
              }}
            />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-bold leading-tight tracking-tight mb-4"
          style={{ fontSize: 'clamp(3rem, 9vw, 5.5rem)' }}
        >
          <span style={{ color: '#FFFFFF' }}>Milhara </span>
          <span style={{
            background: 'linear-gradient(135deg, #7c5cfc 0%, #a78bfa 45%, #c084fc 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 3s linear infinite',
          }}>
            Bhagya
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div {...fadeUp(0.3)} className="flex items-center gap-3 mb-5">
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: 'rgba(124,92,252,0.15)',
            border: '0.5px solid rgba(124,92,252,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#7c5cfc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <p className="text-xl font-semibold" style={{ color: '#ffffff' }}>
            Full Stack Developer
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.35)}
          className="text-sm leading-relaxed mb-7 max-w-lg"
          style={{
            color: '#777',
            borderLeft: '2px solid rgba(124,92,252,0.45)',
            paddingLeft: 14,
          }}
        >
          Software Engineering undergraduate at NSBM Green University,
          affiliated with Plymouth University UK. Building clean web and mobile experiences.
        </motion.p>

        {/* Tech tags */}
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-2 mb-8">
          {TECH_TAGS.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 + i * 0.05, duration: 0.3 }}
              whileHover={{ y: -2, color: '#a78bfa' }}
              style={{
                fontSize: 11, padding: '4px 12px', borderRadius: 999,
                background: 'rgba(255,255,255,0.04)',
                border: '0.5px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.5)',
                cursor: 'default',
                display: 'inline-block',
                transition: 'border-color 0.2s, background 0.2s',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.55)} className="flex flex-row gap-3 flex-wrap mb-14">

          <motion.a
            href="/CV.pdf"
            download="Milhara_Bhagya_CV"
            whileHover={{ y: -3, boxShadow: '0 14px 40px rgba(124,92,252,0.55)' }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold"
            style={{
              borderRadius: 999,
              background: 'linear-gradient(135deg, #7c5cfc, #a78bfa)',
              color: '#fff',
              boxShadow: '0 4px 18px rgba(124,92,252,0.35)',
              textDecoration: 'none',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -3, borderColor: 'rgba(124,92,252,0.6)', color: '#a78bfa', boxShadow: '0 8px 25px rgba(124,92,252,0.12)' }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium"
            style={{
              borderRadius: 999,
              border: '0.5px solid #2a2a2a',
              color: '#bbb',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get in touch
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ y: -3, borderColor: 'rgba(124,92,252,0.6)', color: '#a78bfa' }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium"
            style={{
              borderRadius: 999,
              border: '0.5px solid #2a2a2a',
              color: '#bbb',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            View Projects
          </motion.a>

        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            originX: 0,
            height: '0.5px',
            background: 'linear-gradient(90deg, rgba(124,92,252,0.7), rgba(124,92,252,0.05))',
            marginBottom: 32,
          }}
        />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '0.5px solid rgba(255,255,255,0.06)',
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          {STATS.map(([num, label], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
              whileHover={{ background: 'rgba(124,92,252,0.07)' }}
              className="flex-1 py-5 text-center cursor-default"
              style={{
                borderRight: i < 3 ? '0.5px solid rgba(255,255,255,0.06)' : 'none',
                minWidth: 90,
                transition: 'background 0.25s',
              }}
            >
              <div
                className="font-mono text-2xl font-bold mb-1"
                style={{
                  background: 'linear-gradient(135deg, #7c5cfc, #c084fc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {num}
              </div>
              <div className="text-xs" style={{ color: '#444' }}>{label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}