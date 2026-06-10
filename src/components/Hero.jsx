import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 pt-20">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        className="text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-3">
        Milhara <span className="text-[#E8622A]">Bhagya</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl text-[#B4B2A9] mb-6">
        <span className="text-white font-medium">Full Stack Developer</span> & <span className="text-white font-medium">Mobile App Developer</span>
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
        className="text-[#5F5E5A] max-w-lg leading-relaxed mb-10">
        Software Engineering undergraduate at NSBM Green University, affiliated with Plymouth University UK. Building clean web and mobile experiences.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4 flex-wrap">
        <a href="#projects" className="px-7 py-3 bg-[#E8622A] text-white rounded text-sm font-medium hover:bg-[#C44F1F] transition-colors">
          View my projects
        </a>
        <a href="#contact" className="px-7 py-3 border border-[#3A3A38] text-[#B4B2A9] rounded text-sm hover:border-[#E8622A] hover:text-[#E8622A] transition-all">
          Get in touch
        </a>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}
        className="flex gap-10 mt-16 pt-10 border-t border-[#3A3A38] flex-wrap">
        {[['9+', 'Projects built'], ['4+', 'Specializations'], ['2026', 'Graduation'], ['LK', 'Based in Sri Lanka']].map(([num, label]) => (
          <div key={label}>
            <div className="font-mono text-2xl font-bold text-white">{num}</div>
            <div className="text-xs text-[#5F5E5A] mt-1">{label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}