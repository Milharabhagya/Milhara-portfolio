import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import heroImg from '../assets/dp.png'

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

  useEffect(() => { setMounted(true) }, [])

  return (
    <section
      id="about"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#07070f' }}
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
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes ringRotateRev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
      `}</style>

      {/* Orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: 520, height: 520, borderRadius: '50%', background: 'rgba(124,92,252,0.22)', filter: 'blur(100px)', top: -160, left: -160, animation: 'orb-pulse 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', background: 'rgba(76,29,149,0.2)', filter: 'blur(90px)', top: '40%', right: -80, animation: 'orb-pulse 10s ease-in-out infinite 3s' }} />
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'rgba(139,92,246,0.15)', filter: 'blur(80px)', bottom: 80, left: '35%', animation: 'orb-pulse 7s ease-in-out infinite 5s' }} />
      </div>

      {/* Grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(124,92,252,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,252,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Particles */}
      {mounted && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {PARTICLES.map(function(p) {
            return (
              <div key={p.id} style={{ position: 'absolute', left: p.left, top: p.top, width: p.size, height: p.size, borderRadius: '50%', background: 'rgba(124,92,252,0.7)', opacity: p.opacity, animation: `heroFloat ${p.duration}s ${p.delay}s ease-in-out infinite` }} />
            )
          })}
        </div>
      )}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 1152, margin: '0 auto', padding: '6rem 1.5rem 4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4rem', flexWrap: 'wrap' }}>

          {/* LEFT TEXT */}
          <div style={{ flex: 1, minWidth: 280 }}>

            {/* Badge */}
            <motion.div {...fadeUp(0.1)} style={{ marginBottom: 22 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, padding: '5px 14px', borderRadius: 999, background: 'rgba(124,92,252,0.12)', border: '0.5px solid rgba(124,92,252,0.4)', color: '#a78bfa' }}>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ width: 6, height: 6, borderRadius: '50%', background: '#7c5cfc', display: 'inline-block' }}
                />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.2)} style={{ fontSize: 'clamp(2.8rem, 8vw, 5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16 }}>
              <span style={{ color: '#fff' }}>Milhara </span>
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
            <motion.div {...fadeUp(0.3)} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(124,92,252,0.15)', border: '0.5px solid rgba(124,92,252,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <p style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>Full Stack Developer</p>
            </motion.div>

            {/* Bio */}
            <motion.p {...fadeUp(0.35)} style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', maxWidth: 440, marginBottom: 22, borderLeft: '2px solid rgba(124,92,252,0.45)', paddingLeft: 14 }}>
              Software Engineering undergraduate at NSBM Green University,
              affiliated with Plymouth University UK. Building clean web and mobile experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div {...fadeUp(0.55)} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>

              <motion.a
                href="/CV.pdf"
                download="Milhara_Bhagya_CV"
                whileHover={{ y: -3, boxShadow: '0 14px 40px rgba(124,92,252,0.55)' }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 22px', borderRadius: 999, background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', color: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 600, boxShadow: '0 4px 18px rgba(124,92,252,0.35)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -3, borderColor: 'rgba(124,92,252,0.6)', color: '#8b5cf6' }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 22px', borderRadius: 999, border: '0.5px solid #2a2a2a', color: '#bbb', textDecoration: 'none', fontSize: 13, transition: 'all 0.25s ease' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                Get in touch
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ y: -3, borderColor: 'rgba(124,92,252,0.6)', color: '#8b5cf6' }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 22px', borderRadius: 999, border: '0.5px solid #2a2a2a', color: '#bbb', textDecoration: 'none', fontSize: 13, transition: 'all 0.25s ease' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                View Projects
              </motion.a>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ originX: 0, height: '0.5px', background: 'linear-gradient(90deg, rgba(124,92,252,0.7), rgba(76,29,149,0.05))', marginBottom: 24 }}
            />

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ display: 'flex', flexWrap: 'wrap', background: 'rgba(255,255,255,0.02)', border: '0.5px solid rgba(255,255,255,0.06)', borderRadius: 12, overflow: 'hidden' }}
            >
              {STATS.map(function(stat, i) {
                return (
                  <motion.div
                    key={stat[1]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                    whileHover={{ background: 'rgba(124,92,252,0.07)' }}
                    style={{ flex: 1, padding: '16px 8px', textAlign: 'center', borderRight: i < 3 ? '0.5px solid rgba(255,255,255,0.06)' : 'none', minWidth: 75, transition: 'background 0.25s', cursor: 'default' }}
                  >
                    <div style={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 700, marginBottom: 2, background: 'linear-gradient(135deg, #8b5cf6, #4c1d95)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {stat[0]}
                    </div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>{stat[1]}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* RIGHT PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 300, height: 360 }}
          >
            {/* Spinning rings */}
            <div style={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%', border: '1px dashed rgba(124,92,252,0.2)', animation: 'ringRotate 20s linear infinite' }} />
            <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', border: '0.5px dashed rgba(76,29,149,0.2)', animation: 'ringRotateRev 14s linear infinite' }} />

            {/* Glowing dot on ring */}
            <div style={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%', animation: 'ringRotate 20s linear infinite' }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', marginLeft: -5, width: 10, height: 10, borderRadius: '50%', background: '#7c3aed', boxShadow: '0 0 10px rgba(124,58,237,0.8)' }} />
            </div>

            {/* Glow */}
            <div style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', background: 'rgba(124,92,252,0.18)', filter: 'blur(50px)' }} />

            {/* Photo */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'relative', zIndex: 2 }}
            >
              <div style={{ width: 260, height: 320, borderRadius: 24, overflow: 'hidden', border: '1.5px solid rgba(124,92,252,0.45)', boxShadow: '0 0 40px rgba(124,92,252,0.2), 0 0 80px rgba(76,29,149,0.1)', position: 'relative' }}>
                <img
                  src={heroImg}
                  alt="Milhara Bhagya"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
                {/* Bottom gradient overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(transparent, rgba(7,7,15,0.6))' }} />
              </div>

              {/* Badge top right */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                style={{ position: 'absolute', top: 16, right: -24, background: 'rgba(7,7,15,0.9)', border: '0.5px solid rgba(124,92,252,0.4)', borderRadius: 12, padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 6, backdropFilter: 'blur(12px)', whiteSpace: 'nowrap' }}
              >
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px rgba(16,185,129,0.6)' }} />
                <span style={{ fontSize: 11, color: '#fff', fontWeight: 500 }}>Open to work</span>
              </motion.div>

              {/* Badge bottom left */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                style={{ position: 'absolute', bottom: 28, left: -28, background: 'rgba(7,7,15,0.9)', border: '0.5px solid rgba(124,92,252,0.4)', borderRadius: 12, padding: '8px 14px', backdropFilter: 'blur(12px)', whiteSpace: 'nowrap' }}
              >
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 3 }}>Currently</div>
                <div style={{ fontSize: 12, fontWeight: 700, background: 'linear-gradient(135deg, #8b5cf6, #4c1d95)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Full Stack Dev
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}