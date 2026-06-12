import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(17,17,16,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '0.5px solid #3A3A38' : 'none'
      }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          whileHover={{ scale: 1.1 }}
          transition2={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="font-mono text-sm font-bold text-white cursor-default">
        </motion.span>

        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link, i) => (
            <motion.li key={link}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease }}>
              <motion.a
                href={`#${link.toLowerCase()}`}
                className="text-xs relative pb-1 transition-colors duration-300"
                style={{ color: active === link.toLowerCase() ? '#E8622A' : '#5F5E5A' }}
                whileHover={{ color: '#F1EFE8', y: -1 }}
                transition={{ duration: 0.2 }}>
                {link}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: '#E8622A' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: active === link.toLowerCase() ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25, ease }} />
              </motion.a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.07, background: '#E8622A', color: '#fff', boxShadow: '0 4px 20px rgba(232,98,42,0.35)', y: -1 }}
          whileTap={{ scale: 0.95 }}
          transition2={{ type: 'spring', stiffness: 400, damping: 18 }}
          className="hidden md:block text-xs px-5 py-2 rounded-lg border transition-colors duration-300"
          style={{ borderColor: '#E8622A', color: '#E8622A' }}>
          Hire me
        </motion.a>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}>
          <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease }}
            className="block w-5 h-px" style={{ background: '#B4B2A9' }} />
          <motion.span animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-px" style={{ background: '#B4B2A9' }} />
          <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease }}
            className="block w-5 h-px" style={{ background: '#B4B2A9' }} />
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="md:hidden overflow-hidden border-b"
            style={{ background: '#1C1C1A', borderColor: '#3A3A38' }}>
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((link, i) => (
                <motion.a key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3, ease }}
                  whileHover={{ x: 8, color: '#E8622A' }}
                  className="text-sm transition-colors duration-200"
                  style={{ color: '#B4B2A9' }}>
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}