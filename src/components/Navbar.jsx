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
          if (rect.top <= 100 && rect.bottom >= 100) { setActive(id); break }
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
        background: scrolled
          ? 'rgba(13,43,39,0.97)'
          : 'rgba(10,31,28,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '0.5px solid #1E4A42',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none'
      }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          whileHover={{ scale: 1.1 }}
          className="font-mono text-sm font-bold cursor-default"
          style={{ color: '#E8F5F2' }}>
          MB<span style={{ color: '#2DC4A0' }}>.</span>
        </motion.span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link, i) => (
            <motion.li key={link}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease }}>
              <motion.a
                href={`#${link.toLowerCase()}`}
                className="text-xs relative pb-1"
                style={{
                  color: active === link.toLowerCase() ? '#2DC4A0' : '#A8D5CC',
                  transition: 'color 0.3s ease'
                }}
                whileHover={{ color: '#2DC4A0', y: -1 }}
                transition={{ duration: 0.2 }}>
                {link}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: '#2DC4A0' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: active === link.toLowerCase() ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25, ease }} />
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Hire me button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 300, damping: 20 }}
          whileHover={{
            scale: 1.07,
            background: '#2DC4A0',
            color: '#0A1F1C',
            boxShadow: '0 4px 20px rgba(45,196,160,0.4)',
            y: -1
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block text-xs px-5 py-2 rounded-lg border font-medium"
          style={{
            borderColor: '#2DC4A0',
            color: '#2DC4A0',
            transition: 'all 0.3s ease'
          }}>
          Hire me
        </motion.a>

        {/* Hamburger */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}>
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease }}
            className="block w-5 h-px"
            style={{ background: '#2DC4A0' }} />
          <motion.span
            animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-px"
            style={{ background: '#2DC4A0' }} />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease }}
            className="block w-5 h-px"
            style={{ background: '#2DC4A0' }} />
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="md:hidden overflow-hidden border-b"
            style={{ background: '#0D2B27', borderColor: '#1E4A42' }}>
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((link, i) => (
                <motion.a key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3, ease }}
                  whileHover={{ x: 8, color: '#2DC4A0' }}
                  className="text-sm font-medium"
                  style={{ color: '#A8D5CC', transition: 'all 0.2s ease' }}>
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.3, ease }}
                className="mt-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
                style={{ background: '#2DC4A0', color: '#0A1F1C' }}>
                Hire me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}