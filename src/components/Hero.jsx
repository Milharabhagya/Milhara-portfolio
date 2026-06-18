import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
})

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center max-w-6xl mx-auto px-6 pt-16">
      <div className="w-full py-10">

        {/* Name */}
        <motion.h1 {...fadeUp(0.2)}
          className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-3">
          <span style={{ color: '#FFFFFF' }}>Milhara </span>
          <span style={{ color: '#7C5CFC' }}>Bhagya</span>
        </motion.h1>

        {/* Role */}
        <motion.p {...fadeUp(0.3)}
          className="text-xl md:text-2xl font-bold mb-4"
          style={{ color: '#FFFFFF' }}>
          Full Stack Developer
        </motion.p>

        {/* Bio */}
        <motion.p {...fadeUp(0.35)}
          className="text-sm leading-relaxed mb-6 max-w-lg"
          style={{ color: '#666666' }}>
          Software Engineering undergraduate at NSBM Green University,
          affiliated with Plymouth University UK. Building clean web and mobile experiences.
        </motion.p>


        {/* Buttons */}
        <motion.div {...fadeUp(0.55)}
          className="flex flex-row gap-4 flex-wrap mb-14">

          <motion.a href="/CV.pdf" download="Milhara_Bhagya_CV"
            whileHover={{ scale: 1.06, background: '#6B4EE6', boxShadow: '0 8px 30px rgba(124,92,252,0.45)', y: -2 }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="inline-flex items-center px-8 py-3 rounded-lg text-sm font-semibold"
            style={{ background: '#7C5CFC', color: '#FFFFFF', boxShadow: '0 4px 15px rgba(124,92,252,0.25)' }}>
            Download CV
          </motion.a>

          <motion.a href="#contact"
            whileHover={{ scale: 1.06, borderColor: '#7C5CFC', color: '#7C5CFC', boxShadow: '0 8px 25px rgba(124,92,252,0.15)', y: -2 }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="inline-flex items-center px-8 py-3 rounded-lg text-sm font-medium border"
            style={{ borderColor: '#333333', color: '#FFFFFF', transition: 'all 0.3s ease' }}>
            Get in touch
          </motion.a>

          <motion.a href="#projects"
            whileHover={{ scale: 1.06, borderColor: '#7C5CFC', color: '#7C5CFC', y: -2 }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="inline-flex items-center px-8 py-3 rounded-lg text-sm font-medium border"
            style={{ borderColor: '#333333', color: '#FFFFFF', transition: 'all 0.3s ease' }}>
            View Projects
          </motion.a>

        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ originX: 0, height: '0.5px', background: '#222222', marginBottom: '32px' }} />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex gap-0 flex-wrap">
          {[
            ['9+', 'Projects built'],
            ['4+', 'Specializations'],
            ['2026', 'Graduation'],
            ['LK', 'Based in Sri Lanka']
          ].map(([num, label], i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -5, background: '#1A1A1A', boxShadow: '0 8px 20px rgba(124,92,252,0.1)' }}
              className="px-6 py-4 text-center cursor-default"
              style={{
                borderRight: i < 3 ? '0.5px solid #222222' : 'none',
                background: '#111111',
                borderRadius: i === 0 ? '8px 0 0 8px' : i === 3 ? '0 8px 8px 0' : '0',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}>
              <div className="font-mono text-xl font-bold" style={{ color: '#7C5CFC' }}>{num}</div>
              <div className="text-xs mt-1" style={{ color: '#444444' }}>{label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}