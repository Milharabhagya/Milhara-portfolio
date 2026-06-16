import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/experience')
      .then(res => res.json())
      .then(data => {
        setItems(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <motion.p ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="font-mono text-xs tracking-widest uppercase mb-3"
        style={{ color: '#E8622A' }}>
        04. Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="text-4xl font-bold text-white mb-12">
        Journey so far
      </motion.h2>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-8 rounded-full border-2"
            style={{ borderColor: '#E8622A', borderTopColor: 'transparent' }} />
        </div>
      ) : (
        <div className="relative pl-7" style={{ borderLeft: '1px solid #3A3A38' }}>
          {items.map((item, i) => (
            <motion.div key={item._id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease }}
              className="relative mb-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.15, type: 'spring', stiffness: 400, damping: 15 }}
                className="absolute -left-[34px] top-1.5 w-2.5 h-2.5 rounded-full border-2"
                style={{ background: '#E8622A', borderColor: '#111110' }} />
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-5 rounded-xl border"
                style={{ background: '#1C1C1A', borderColor: '#3A3A38', transition: 'border-color 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#E8622A'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#3A3A38'}>
                <p className="font-mono text-xs tracking-wider mb-1" style={{ color: '#E8622A' }}>{item.date}</p>
                <h3 className="text-base font-semibold text-white mb-1">{item.role}</h3>
                <p className="text-sm mb-2" style={{ color: '#B4B2A9' }}>{item.org}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#5F5E5A' }}>{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}