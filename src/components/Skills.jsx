import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.25, 0.46, 0.45, 0.94]

const categories = [
  { title: 'Frontend', emoji: '🎨', skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'JavaScript'] },
  { title: 'Backend', emoji: '⚙️', skills: ['Node.js', 'Express.js', 'Java', 'JSP', 'REST APIs'] },
  { title: 'Mobile', emoji: '📱', skills: ['Flutter', 'Dart', 'Firebase', 'FCM'] },
  { title: 'Database & Tools', emoji: '🛠️', skills: ['MongoDB', 'Firebase Firestore', 'Git', 'GitHub', 'VS Code'] },
]

function SkillCard({ cat, cardIndex }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: cardIndex * 0.1, ease }}
      whileHover={{ y: -6, borderColor: '#E8622A', boxShadow: '0 12px 40px rgba(232,98,42,0.1)' }}
      className="rounded-xl p-5 border cursor-default"
      style={{
        background: '#1C1C1A',
        borderColor: '#3A3A38',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease'
      }}>
      <div className="flex items-center gap-2 mb-4">
        <motion.span
          whileHover={{ rotate: 15, scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 12 }}
          className="text-lg">{cat.emoji}
        </motion.span>
        <p className="font-mono text-xs uppercase tracking-widest" style={{ color: '#E8622A' }}>
          {cat.title}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, j) => (
          <motion.span key={skill}
            initial={{ opacity: 0, scale: 0.5, y: 8 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 20,
              delay: cardIndex * 0.1 + j * 0.06
            }}
            whileHover={{ scale: 1.12, color: '#E8622A', borderColor: '#E8622A', background: 'rgba(232,98,42,0.08)' }}
            whileTap={{ scale: 0.92 }}
            className="text-xs px-3 py-1.5 rounded-full cursor-default select-none"
            style={{
              background: '#262624',
              color: '#B4B2A9',
              border: '0.5px solid #3A3A38',
              transition: 'all 0.2s ease'
            }}>
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <motion.p ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="font-mono text-xs tracking-widest uppercase mb-3"
        style={{ color: '#E8622A' }}>
         Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="text-4xl font-bold text-white mb-12">
        My tech stack
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <SkillCard key={cat.title} cat={cat} cardIndex={i} />
        ))}
      </div>
    </section>
  )
}