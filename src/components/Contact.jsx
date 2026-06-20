import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]

const CONTACTS = [
  { icon: '✉️', label: 'Bhagyapremarathne46@gmail.com', href: 'mailto:Bhagyapremarathne46@gmail.com' },
  { icon: '💼', label: 'linkedin.com/in/milhara-bhagya', href: 'https://www.linkedin.com/in/milhara-bhagya-565572340' },
  { icon: '🐙', label: 'github.com/Milharabhagya', href: 'https://github.com/Milharabhagya' },
  { icon: '📸', label: 'instagram.com/_____bhagya_______', href: 'https://www.instagram.com/_____bhagya_______' },
]

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
    } catch { alert('Cannot connect to server!') }
    setLoading(false)
  }

  return (
    <section
      id="contact"
      style={{ position: 'relative', background: '#07070f', overflow: 'hidden' }}
    >
      <style>{`
        @keyframes contactOrb {
          0%,100% { opacity:0.12; transform:scale(1); }
          50% { opacity:0.22; transform:scale(1.1); }
        }
        .c-input {
          width: 100%;
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 13px;
          outline: none;
          background: rgba(255,255,255,0.03);
          border: 0.5px solid rgba(255,255,255,0.1);
          color: #fff;
          transition: border-color 0.25s, box-shadow 0.25s;
          font-family: inherit;
          box-sizing: border-box;
        }
        .c-input::placeholder { color: rgba(255,255,255,0.2); }
        .c-input:focus {
          border-color: rgba(124,92,252,0.6);
          box-shadow: 0 0 0 3px rgba(124,92,252,0.08);
        }
      `}</style>

      {/* Orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden="true">
        <div style={{
          position: 'absolute', width: 450, height: 450, borderRadius: '50%',
          background: 'rgba(124,92,252,0.15)', filter: 'blur(100px)',
          bottom: -100, left: -100,
          animation: 'contactOrb 9s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(192,132,252,0.08)', filter: 'blur(80px)',
          top: 80, right: -60,
          animation: 'contactOrb 7s ease-in-out infinite 3s',
        }} />
      </div>

      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(124,92,252,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,252,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1152, margin: '0 auto', padding: '6rem 1.5rem' }}>

        {/* Label */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          style={{
            fontFamily: 'monospace', fontSize: 11,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#7c5cfc', fontWeight: 600, marginBottom: 8,
          }}
        >
           Contact
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700, color: '#fff', marginBottom: 8,
          }}
        >
          Get in{' '}
          <span style={{
            background: 'linear-gradient(135deg, #7c5cfc, #a78bfa, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            touch
          </span>
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          style={{
            width: 48, height: 2,
            background: 'linear-gradient(90deg, #7c5cfc, #c084fc)',
            borderRadius: 999, marginBottom: '3rem', originX: 0,
          }}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
        }}>

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <p style={{
              fontSize: 13, lineHeight: 1.8,
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '2rem',
              borderLeft: '2px solid rgba(124,92,252,0.4)',
              paddingLeft: 14,
            }}>
              I am currently open to internship opportunities and freelance projects.
              Whether you have a question, a project idea, or just want to connect — my inbox is always open!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {CONTACTS.map(function(item, i) {
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease }}
                    whileHover={{
                      x: 6,
                      borderColor: 'rgba(124,92,252,0.45)',
                      boxShadow: '0 4px 20px rgba(124,92,252,0.1)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '10px 14px', borderRadius: 12,
                      background: 'rgba(255,255,255,0.02)',
                      border: '0.5px solid rgba(255,255,255,0.07)',
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none', fontSize: 13,
                      transition: 'all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
                    }}
                    onMouseEnter={function(e) { e.currentTarget.style.color = '#a78bfa' }}
                    onMouseLeave={function(e) { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                  >
                    <span style={{
                      width: 34, height: 34, borderRadius: 9, flexShrink: 0,
                      background: 'rgba(124,92,252,0.12)',
                      border: '0.5px solid rgba(124,92,252,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 15,
                    }}>
                      {item.icon}
                    </span>
                    {item.label}
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            style={{
              borderRadius: 16,
              padding: '1.75rem',
              background: 'rgba(255,255,255,0.02)',
              border: '0.5px solid rgba(255,255,255,0.07)',
            }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  padding: '3rem 1rem', textAlign: 'center', gap: 12,
                }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'rgba(124,92,252,0.15)',
                  border: '1px solid rgba(124,92,252,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24,
                }}>
                  ✓
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>Message sent!</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                  Thanks! I will get back to you soon.
                </p>
              </motion.div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                {/* Name */}
                <div>
                  <label style={{
                    fontFamily: 'monospace', fontSize: 10,
                    letterSpacing: '0.1em', display: 'block',
                    marginBottom: 6, color: 'rgba(255,255,255,0.3)',
                  }}>
                    YOUR NAME
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="John Doe"
                    className="c-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{
                    fontFamily: 'monospace', fontSize: 10,
                    letterSpacing: '0.1em', display: 'block',
                    marginBottom: 6, color: 'rgba(255,255,255,0.3)',
                  }}>
                    YOUR EMAIL
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="john@example.com"
                    className="c-input"
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{
                    fontFamily: 'monospace', fontSize: 10,
                    letterSpacing: '0.1em', display: 'block',
                    marginBottom: 6, color: 'rgba(255,255,255,0.3)',
                  }}>
                    MESSAGE
                  </label>
                  <textarea
                    ref={messageRef}
                    rows={4}
                    placeholder="Hi Milhara, I'd like to talk about..."
                    className="c-input"
                    style={{ resize: 'none' }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{
                    y: -2,
                    boxShadow: '0 12px 30px rgba(124,92,252,0.45)',
                  }}
                  whileTap={{ scale: 0.97, y: 0 }}
                  onClick={handleSend}
                  disabled={loading || sent}
                  style={{
                    width: '100%', padding: '12px',
                    borderRadius: 999, border: 'none', cursor: 'pointer',
                    background: 'linear-gradient(135deg, #7c5cfc, #a78bfa)',
                    color: '#fff', fontSize: 14, fontWeight: 600,
                    boxShadow: '0 4px 16px rgba(124,92,252,0.3)',
                    opacity: loading ? 0.7 : 1,
                    transition: 'opacity 0.2s',
                  }}
                >
                  {loading ? 'Sending...' : 'Send message →'}
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}