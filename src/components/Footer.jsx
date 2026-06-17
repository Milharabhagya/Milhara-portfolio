import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.footer ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease }}
      className="border-t py-8 px-6 max-w-6xl mx-auto"
      style={{ borderColor: '#1E4A42' }}>
      <div className="flex justify-between items-center flex-wrap gap-4">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="font-mono text-xs"
          style={{ color: '#4A8C7E' }}>
          Designed &amp; built by{' '}
          <span style={{ color: '#2DC4A0' }}>Milhara Bhagya</span> · 2025
        </motion.p>

        <div className="flex gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/Milharabhagya' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/milhara-bhagya-565572340' },
            { label: 'Instagram', href: 'https://www.instagram.com/_____bhagya_______' },
            { label: 'Email', href: 'mailto:Bhagyapremarathne46@gmail.com' },
          ].map((item, i) => (
            <motion.a key={item.label} href={item.href} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.07, ease }}
              whileHover={{ color: '#2DC4A0', y: -3 }}
              className="text-xs"
              style={{ color: '#4A8C7E', transition: 'all 0.25s ease' }}>
              {item.label}
            </motion.a>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3, ease }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.15, borderColor: '#2DC4A0', color: '#2DC4A0', boxShadow: '0 4px 16px rgba(45,196,160,0.25)', y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 rounded-full border flex items-center justify-center text-sm"
          style={{ borderColor: '#1E4A42', color: '#4A8C7E', transition: 'all 0.3s ease' }}>
          ↑
        </motion.button>
      </div>
    </motion.footer>
  )
}