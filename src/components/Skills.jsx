import { motion } from 'framer-motion'

const categories = [
  { title: 'Frontend', emoji: '🎨', skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'JavaScript'] },
  { title: 'Backend', emoji: '⚙️', skills: ['Node.js', 'Express.js', 'Java', 'JSP', 'REST APIs'] },
  { title: 'Mobile', emoji: '📱', skills: ['Flutter', 'Dart', 'Firebase', 'FCM'] },
  { title: 'Database & Tools', emoji: '🛠️', skills: ['MongoDB', 'Firebase Firestore', 'Git', 'GitHub', 'VS Code'] },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 10 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring', stiffness: 400, damping: 15 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="font-mono text-xs tracking-widest uppercase mb-3"
        style={{ color: '#E8622A' }}>
         Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-bold text-white mb-12">
        My tech stack
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ y: -4, borderColor: '#E8622A', boxShadow: '0 8px 32px rgba(232,98,42,0.12)' }}
            className="rounded-xl p-5 border transition-all duration-300 cursor-default"
            style={{ background: '#1C1C1A', borderColor: '#3A3A38' }}>

            {/* Card header */}
            <div className="flex items-center gap-2 mb-4">
              <motion.span
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-lg">
                {cat.emoji}
              </motion.span>
              <p className="font-mono text-xs uppercase tracking-widest"
                style={{ color: '#E8622A' }}>{cat.title}</p>
            </div>

            {/* Skill tags with stagger */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}>
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={tagVariants}
                  whileHover={{
                    scale: 1.15,
                    color: '#E8622A',
                    borderColor: '#E8622A',
                    background: 'rgba(232,98,42,0.08)',
                    transition: { duration: 0.15 }
                  }}
                  whileTap={{ scale: 0.92 }}
                  className="text-xs px-3 py-1.5 rounded-full cursor-default select-none"
                  style={{
                    background: '#262624',
                    color: '#B4B2A9',
                    border: '0.5px solid #3A3A38'
                  }}>
                  {skill}
                </motion.span>
              ))}
            </motion.div>

          </motion.div>
        ))}
      </div>
    </section>
  )
}