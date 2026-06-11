import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setDone(true), 400)
          setTimeout(() => onComplete(), 900)
          return 100
        }
        return prev + Math.floor(Math.random() * 8) + 2
      })
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#111110' }}>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="mb-12 text-center">
            <div className="font-mono text-5xl font-bold text-white mb-2">
              MILHARA<span style={{ color: '#E8622A' }}>BHAGYA.</span>
            </div>

          </motion.div>

          {/* Progress bar */}
          <div className="w-64 mb-4">
            <div className="w-full h-px rounded-full" style={{ background: '#2E2E2C' }}>
              <motion.div
                className="h-px rounded-full"
                style={{ background: 'linear-gradient(90deg, #E8622A, #ff8c5a)', width: `${count}%` }}
                transition={{ duration: 0.1 }} />
            </div>
          </div>

          {/* Count */}
          <motion.div
            className="font-mono text-sm"
            style={{ color: '#E8622A' }}>
            {Math.min(count, 100)}%
          </motion.div>

          {/* Decorative dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: '#E8622A',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.2
                }}
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }} />
            ))}
          </div>

          {/* Corner lines */}
          {[
            { top: 20, left: 20, rotate: 0 },
            { top: 20, right: 20, rotate: 90 },
            { bottom: 20, left: 20, rotate: 270 },
            { bottom: 20, right: 20, rotate: 180 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="absolute w-8 h-8"
              style={{ ...pos }}>
              <div className="w-full h-px" style={{ background: '#E8622A' }} />
              <div className="w-px h-full" style={{ background: '#E8622A' }} />
            </motion.div>
          ))}

        </motion.div>
      )}
    </AnimatePresence>
  )
}