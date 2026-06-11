import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}
      className="border-t py-8 px-6 max-w-6xl mx-auto"
      style={{ borderColor: '#3A3A38' }}>
      <div className="flex justify-between items-center flex-wrap gap-4">
        <motion.p
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="font-mono text-xs" style={{ color: '#5F5E5A' }}>
          Designed &amp; built by{' '}
          <motion.span
            style={{ color: '#E8622A' }}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}>
            Milhara Bhagya
          </motion.span>{' '}· 2025
        </motion.p>

        <div className="flex gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/Milharabhagya' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/milhara-bhagya-565572340' },
            { label: 'Instagram', href: 'https://www.instagram.com/_____bhagya_______' },
            { label: 'Email', href: 'mailto:Bhagyapremarathne46@gmail.com' },
          ].map((item, i) => (
            <motion.a key={item.label} href={item.href} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ color: '#E8622A', y: -3 }}
              className="text-xs transition-colors"
              style={{ color: '#5F5E5A' }}>
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Back to top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, borderColor: '#E8622A', color: '#E8622A', boxShadow: '0 0 12px rgba(232,98,42,0.3)' }}
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 rounded-full border flex items-center justify-center text-sm transition-all"
          style={{ borderColor: '#3A3A38', color: '#5F5E5A' }}>
          ↑
        </motion.button>
      </div>
    </motion.footer>
  )
}