import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(17,17,16,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '0.5px solid #3A3A38' : 'none'
      }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.15 }}
          className="font-mono text-sm font-medium text-white cursor-default">
          
        </motion.span>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + i * 0.08,
                type: 'spring',
                stiffness: 300,
                damping: 18
              }}>
              <motion.a
                href={`#${link.toLowerCase()}`}
                className="text-xs relative transition-colors duration-200"
                style={{ color: '#5F5E5A' }}
                whileHover={{ color: '#F1EFE8', y: -2 }}
                transition={{ duration: 0.15 }}>
                {link}
                {/* underline on hover */}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ background: '#E8622A' }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }} />
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Hire me button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8, type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.08, background: '#E8622A', color: '#fff' }}
          whileTap={{ scale: 0.94 }}
          className="hidden md:block text-xs px-4 py-2 rounded border transition-all duration-200"
          style={{ borderColor: '#E8622A', color: '#E8622A' }}>
          Hire me
        </motion.a>

        {/* Hamburger */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}>
          <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-5 h-px" style={{ background: '#B4B2A9' }} />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-px" style={{ background: '#B4B2A9' }} />
          <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-5 h-px" style={{ background: '#B4B2A9' }} />
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-b"
            style={{ background: '#1C1C1A', borderColor: '#3A3A38' }}>
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  whileHover={{ x: 6, color: '#E8622A' }}
                  className="text-sm transition-colors"
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