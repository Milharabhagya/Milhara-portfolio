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
    <motion.nav initial={{y:-60, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6, ease:'easeOut'}}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'border-b' : ''}`}
      style={{background: scrolled ? 'rgba(17,17,16,0.95)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderColor:'#3A3A38'}}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.span whileHover={{scale:1.1}} className="font-mono text-sm font-medium text-white cursor-default">
          MB<span style={{color:'#E8622A'}}>.</span>
        </motion.span>
        <ul className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <motion.li key={link} initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{delay:0.1+i*0.08}}>
              <a href={`#${link.toLowerCase()}`}
                className="text-xs transition-colors duration-200 hover:text-white"
                style={{color:'#5F5E5A'}}>
                {link}
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.a href="#contact" whileHover={{scale:1.05, background:'#E8622A', color:'#fff'}}
          whileTap={{scale:0.95}}
          className="hidden md:block text-xs px-4 py-2 rounded border transition-all"
          style={{borderColor:'#E8622A', color:'#E8622A'}}>
          Hire me
        </motion.a>
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-5 h-px" style={{background:'#B4B2A9'}}></span>
          <span className="block w-5 h-px" style={{background:'#B4B2A9'}}></span>
          <span className="block w-5 h-px" style={{background:'#B4B2A9'}}></span>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}}
            transition={{duration:0.3}} className="md:hidden overflow-hidden border-b"
            style={{background:'#1C1C1A', borderColor:'#3A3A38'}}>
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                  className="text-sm transition-colors hover:text-white" style={{color:'#B4B2A9'}}>
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}