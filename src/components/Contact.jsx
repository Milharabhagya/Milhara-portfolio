import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const handleSend = async () => {
    const name = nameRef.current.value
    const email = emailRef.current.value
    const message = messageRef.current.value
    if (!name || !email || !message) { alert('Please fill in all fields!'); return }
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (res.ok) setSent(true)
      else alert('Something went wrong!')
    } catch {
      alert('Cannot connect to server!')
    }
    setLoading(false)
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <motion.p ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="font-mono text-xs tracking-widest uppercase mb-3"
        style={{ color: '#2DC4A0' }}>
        06. Contact
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="text-4xl font-bold mb-12"
        style={{ color: '#E8F5F2' }}>
        Get in touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}>
          <p className="leading-relaxed mb-8 text-sm" style={{ color: '#4A8C7E' }}>
            I am currently open to internship opportunities and freelance projects.
            Whether you have a question, a project idea, or just want to connect — my inbox is always open!
          </p>
          <div className="flex flex-col gap-3">
            {[
              { icon: '✉️', label: 'Bhagyapremarathne46@gmail.com', href: 'mailto:Bhagyapremarathne46@gmail.com' },
              { icon: '💼', label: 'linkedin.com/in/milhara-bhagya', href: 'https://www.linkedin.com/in/milhara-bhagya-565572340' },
              { icon: '🐙', label: 'github.com/Milharabhagya', href: 'https://github.com/Milharabhagya' },
              { icon: '📸', label: 'instagram.com/_____bhagya_______', href: 'https://www.instagram.com/_____bhagya_______' },
            ].map((item, i) => (
              <motion.a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease }}
                whileHover={{ x: 8, borderColor: '#2DC4A0', color: '#2DC4A0', boxShadow: '0 4px 20px rgba(45,196,160,0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm border"
                style={{ background: '#0D2B27', borderColor: '#1E4A42', color: '#A8D5CC', transition: 'all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)' }}>
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: 'rgba(45,196,160,0.1)' }}>{item.icon}</span>
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="rounded-xl p-7 border"
          style={{ background: '#0D2B27', borderColor: '#1E4A42' }}>
          <div className="flex flex-col gap-4">
            {[
              { label: 'YOUR NAME', placeholder: 'John Doe', type: 'text', ref: nameRef },
              { label: 'YOUR EMAIL', placeholder: 'john@example.com', type: 'email', ref: emailRef },
            ].map((field) => (
              <motion.div key={field.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4, ease }}>
                <label className="font-mono text-xs tracking-wider block mb-2" style={{ color: '#4A8C7E' }}>
                  {field.label}
                </label>
                <input ref={field.ref} type={field.type} placeholder={field.placeholder}
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                  style={{ background: '#112E29', border: '0.5px solid #1E4A42', color: '#E8F5F2', transition: 'border-color 0.3s ease' }}
                  onFocus={e => e.target.style.borderColor = '#2DC4A0'}
                  onBlur={e => e.target.style.borderColor = '#1E4A42'} />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.56, ease }}>
              <label className="font-mono text-xs tracking-wider block mb-2" style={{ color: '#4A8C7E' }}>
                MESSAGE
              </label>
              <textarea ref={messageRef} rows={4}
                placeholder="Hi Milhara, I'd like to talk about..."
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none resize-none"
                style={{ background: '#112E29', border: '0.5px solid #1E4A42', color: '#E8F5F2', transition: 'border-color 0.3s ease' }}
                onFocus={e => e.target.style.borderColor = '#2DC4A0'}
                onBlur={e => e.target.style.borderColor = '#1E4A42'} />
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.64, ease }}
              whileHover={{ scale: 1.03, background: '#1A9E80', boxShadow: '0 8px 25px rgba(45,196,160,0.35)', y: -2 }}
              whileTap={{ scale: 0.97, y: 0 }}
              onClick={handleSend}
              disabled={loading || sent}
              className="w-full py-3 rounded-lg text-sm font-semibold"
              style={{ background: '#2DC4A0', color: '#0A1F1C', transition: 'all 0.3s ease' }}>
              {loading ? 'Sending...' : sent ? 'Message sent! ✓' : 'Send message →'}
            </motion.button>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease }}
                className="text-xs text-center"
                style={{ color: '#2DC4A0' }}>
                Thanks! I will get back to you soon.
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}