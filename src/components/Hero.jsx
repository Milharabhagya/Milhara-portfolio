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

        <motion.h1 {...fadeUp(0.1)}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-3"
          style={{ color: '#E8F5F2' }}>
          Milhara <span style={{ color: '#2DC4A0' }}>Bhagya</span>
        </motion.h1>

        <motion.p {...fadeUp(0.25)}
          className="text-xl md:text-2xl font-bold mb-6"
          style={{ color: '#E8F5F2' }}>
          Full Stack Developer
        </motion.p>

        <motion.p {...fadeUp(0.4)}
          className="text-sm leading-relaxed mb-10 max-w-lg"
          style={{ color: '#4A8C7E' }}>
          Software Engineering undergraduate at NSBM Green University,
          affiliated with Plymouth University UK. Building clean web and mobile experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(0.55)}
          className="flex flex-row gap-4 flex-wrap mb-14">

          <motion.a href="/CV.pdf" download="Milhara_Bhagya_CV"
            whileHover={{ scale: 1.06, background: '#1A9E80', boxShadow: '0 8px 30px rgba(45,196,160,0.45)', y: -2 }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="inline-flex items-center px-8 py-3 text-white rounded-lg text-sm font-semibold"
            style={{ background: '#2DC4A0', color: '#0A1F1C', boxShadow: '0 4px 15px rgba(45,196,160,0.25)' }}>
            Download CV
          </motion.a>

          <motion.a href="#contact"
            whileHover={{ scale: 1.06, borderColor: '#2DC4A0', color: '#2DC4A0', boxShadow: '0 8px 25px rgba(45,196,160,0.15)', y: -2 }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="inline-flex items-center px-8 py-3 rounded-lg text-sm font-medium border transition-colors"
            style={{ borderColor: '#1E4A42', color: '#A8D5CC' }}>
            Get in touch
          </motion.a>

          <motion.a href="#projects"
            whileHover={{ scale: 1.06, borderColor: '#2DC4A0', color: '#2DC4A0', boxShadow: '0 8px 25px rgba(45,196,160,0.15)', y: -2 }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="inline-flex items-center px-8 py-3 rounded-lg text-sm font-medium border transition-colors"
            style={{ borderColor: '#1E4A42', color: '#A8D5CC' }}>
            View Projects
          </motion.a>

        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ originX: 0, height: '0.5px', background: '#1E4A42', marginBottom: '32px' }} />

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
              whileHover={{ y: -5, background: '#112E29', boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}
              className="px-6 py-4 text-center cursor-default"
              style={{
                borderRight: i < 3 ? '0.5px solid #1E4A42' : 'none',
                background: '#0D2B27',
                borderRadius: i === 0 ? '8px 0 0 8px' : i === 3 ? '0 8px 8px 0' : '0',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}>
              <div className="font-mono text-xl font-bold" style={{ color: '#2DC4A0' }}>{num}</div>
              <div className="text-xs mt-1" style={{ color: '#4A8C7E' }}>{label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}