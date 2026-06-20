import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]
const LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const ids = ['about','skills','projects','experience','education','contact']
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el) {
          const r = el.getBoundingClientRect()
          if (r.top <= 100 && r.bottom >= 100) { setActive(id); break }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
      <style>{`
        .nb { position:relative; font-size:12px; text-decoration:none; padding:4px 0; letter-spacing:0.02em; transition:color 0.25s; }
        .nb::after { content:''; position:absolute; bottom:-1px; left:0; width:0; height:1.5px; background:linear-gradient(90deg,#7c5cfc,#c084fc); border-radius:999px; transition:width 0.25s; }
        .nb:hover { color:#fff !important; }
        .nb:hover::after { width:100%; }
        .nb.on { color:#a78bfa !important; }
        .nb.on::after { width:100%; }
        .dlinks { display:none; align-items:center; gap:2rem; list-style:none; margin:0; padding:0; }
        .dhire { display:none; }
        .hburg { display:flex; }
        @media(min-width:768px){ .dlinks{display:flex;} .dhire{display:inline-flex;} .hburg{display:none;} }
      `}</style>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 60,
          background: scrolled ? 'rgba(7,7,15,0.92)' : 'rgba(7,7,15,0.4)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '0.5px solid rgba(124,92,252,0.22)' : '0.5px solid rgba(255,255,255,0.04)',
          boxShadow: scrolled ? '0 4px 30px rgba(124,92,252,0.08)' : 'none',
          transition: 'background 0.4s, border-color 0.4s, box-shadow 0.4s',
        }}
      >
        <div style={{ maxWidth:1152, margin:'0 auto', padding:'0 1.5rem', height:'100%', display:'flex', alignItems:'center', justifyContent:'space-between' }}>

          <motion.a
            href="#about"
            initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
            transition={{ duration:0.6, delay:0.2, ease }}
            whileHover={{ scale:1.08 }} whileTap={{ scale:0.95 }}
            style={{ fontWeight:700, fontSize:20, textDecoration:'none', background:'linear-gradient(135deg,#7c5cfc,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}
          >
            MB
          </motion.a>

          <ul className="dlinks">
            {LINKS.map(function(link, i) {
              const id = link.toLowerCase()
              const on = active === id
              return (
                <motion.li key={link} initial={{ opacity:0, y:-15 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.3 + i * 0.07, ease }}>
                  <a href={'#' + id} className={on ? 'nb on' : 'nb'} style={{ color: on ? '#a78bfa' : 'rgba(255,255,255,0.45)' }} onClick={function(){ setActive(id) }}>
                    {link}
                  </a>
                </motion.li>
              )
            })}
          </ul>

          <motion.a
            href="#contact"
            initial={{ opacity:0, scale:0.85 }} animate={{ opacity:1, scale:1 }}
            transition={{ duration:0.5, delay:0.8, type:'spring', stiffness:300, damping:20 }}
            whileHover={{ y:-2, boxShadow:'0 10px 28px rgba(124,92,252,0.5)' }}
            whileTap={{ scale:0.95 }}
            className="dhire"
            style={{ fontSize:12, fontWeight:600, padding:'7px 20px', borderRadius:999, background:'linear-gradient(135deg,#7c5cfc,#a78bfa)', color:'#fff', textDecoration:'none', boxShadow:'0 4px 16px rgba(124,92,252,0.35)', alignItems:'center' }}
          >
            Hire me
          </motion.a>

          <motion.button
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }}
            onClick={function(){ setMenuOpen(function(p){ return !p }) }}
            className="hburg"
            style={{ background:'none', border:'none', cursor:'pointer', flexDirection:'column', gap:5, padding:4 }}
            aria-label="Toggle menu"
          >
            <motion.span animate={menuOpen ? { rotate:45, y:6 } : { rotate:0, y:0 }} transition={{ duration:0.3, ease }} style={{ display:'block', width:22, height:1.5, background:'#7c5cfc', borderRadius:999 }} />
            <motion.span animate={menuOpen ? { opacity:0, x:-8 } : { opacity:1, x:0 }} transition={{ duration:0.2 }} style={{ display:'block', width:22, height:1.5, background:'#7c5cfc', borderRadius:999 }} />
            <motion.span animate={menuOpen ? { rotate:-45, y:-6 } : { rotate:0, y:0 }} transition={{ duration:0.3, ease }} style={{ display:'block', width:22, height:1.5, background:'#7c5cfc', borderRadius:999 }} />
          </motion.button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }}
              transition={{ duration:0.35, ease }}
              style={{ overflow:'hidden', background:'rgba(7,7,15,0.98)', borderBottom:'0.5px solid rgba(124,92,252,0.18)', backdropFilter:'blur(20px)' }}
            >
              <div style={{ padding:'1.25rem 1.5rem', display:'flex', flexDirection:'column', gap:'0.875rem' }}>
                {LINKS.map(function(link, i) {
                  const id = link.toLowerCase()
                  const on = active === id
                  return (
                    <motion.a
                      key={link}
                      href={'#' + id}
                      onClick={function(){ setActive(id); setMenuOpen(false) }}
                      initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
                      transition={{ delay: i * 0.05, duration:0.3, ease }}
                      whileHover={{ x:6 }}
                      style={{ fontSize:14, fontWeight: on ? 600 : 400, color: on ? '#a78bfa' : 'rgba(255,255,255,0.5)', textDecoration:'none', display:'flex', alignItems:'center', gap:8, transition:'color 0.2s' }}
                    >
                      {on && <span style={{ width:5, height:5, borderRadius:'50%', background:'#7c5cfc', display:'inline-block', flexShrink:0 }} />}
                      {link}
                    </motion.a>
                  )
                })}
                <motion.a
                  href="#contact"
                  onClick={function(){ setMenuOpen(false) }}
                  initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
                  transition={{ delay:0.35, duration:0.3, ease }}
                  style={{ marginTop:8, padding:'10px 20px', borderRadius:999, fontSize:13, fontWeight:600, textAlign:'center', background:'linear-gradient(135deg,#7c5cfc,#a78bfa)', color:'#fff', textDecoration:'none', boxShadow:'0 4px 16px rgba(124,92,252,0.3)' }}
                >
                  Hire me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}