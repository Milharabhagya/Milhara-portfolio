import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <footer style={{ position: 'relative', background: '#07070f', borderTop: '0.5px solid rgba(124,92,252,0.15)', overflow: 'hidden' }}>

      {/* Subtle orb */}
      <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'rgba(124,92,252,0.06)', filter: 'blur(80px)', bottom: -100, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />

      <div ref={ref} style={{ position: 'relative', zIndex: 10, maxWidth: 1152, margin: '0 auto', padding: '1.5rem 1.5rem' }}>

        {/* Single line layout */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>

          {/* Left — brand + copyright */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            style={{ fontFamily: 'monospace', fontSize: 12, color: 'rgba(255,255,255,0.2)', margin: 0 }}>
            Designed &amp; built by{' '}
            <span style={{ background: 'linear-gradient(135deg,#7c5cfc,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 600 }}>
              Milhara Bhagya
            </span>
            {' '}· 2025
          </motion.p>

          {/* Center — social links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/Milharabhagya' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/milhara-bhagya-565572340' },
              { label: 'Instagram', href: 'https://www.instagram.com/_____bhagya_______' },
              { label: 'Email', href: 'mailto:Bhagyapremarathne46@gmail.com' },
            ].map((item, i) => (
              <motion.a key={item.label}
                href={item.href}
                target="_blank" rel="noreferrer"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06, ease }}
                whileHover={{ color: '#a78bfa', y: -2 }}
                style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textDecoration: 'none', transition: 'all 0.2s ease' }}>
                {item.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Right — back to top */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3, ease }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.12, y: -2, boxShadow: '0 6px 20px rgba(124,92,252,0.3)' }}
            whileTap={{ scale: 0.92 }}
            style={{ width: 36, height: 36, borderRadius: '50%', border: '0.5px solid rgba(124,92,252,0.3)', background: 'rgba(124,92,252,0.12)', color: '#a78bfa', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>
            ↑
          </motion.button>

        </div>
      </div>
    </footer>
  )
}