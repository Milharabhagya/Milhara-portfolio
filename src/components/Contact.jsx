import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}
        className="font-mono text-xs tracking-widest uppercase mb-3" style={{color:'#E8622A'}}>
         Contact
      </motion.p>
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.1}}
        className="text-4xl font-bold text-white mb-12">Get in touch</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.2}}>
          <p className="leading-relaxed mb-8 text-sm" style={{color:'#5F5E5A'}}>
            I am currently open to internship opportunities and freelance projects. Whether you have a question, a project idea, or just want to connect — my inbox is always open!
          </p>
          <div className="flex flex-col gap-3">
            {[
             { icon: '✉️', label: 'Bhagyapremarathne46@gmail.com', href: 'mailto:Bhagyapremarathne46@gmail.com' },
             { icon: '💼', label: 'linkedin.com/in/milhara-bhagya', href: 'https://www.linkedin.com/in/milhara-bhagya-565572340' },
             { icon: '🐙', label: 'github.com/Milharabhagya', href: 'https://github.com/Milharabhagya' },
             { icon: '📸', label: 'instagram.com/_____bhagya_______', href: 'https://www.instagram.com/_____bhagya_______' },
            ].map((item, i) => (
              <motion.a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                transition={{duration:0.4, delay:0.3+i*0.1}}
                whileHover={{x:6, borderColor:'#E8622A', color:'#E8622A'}}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm border transition-colors"
                style={{background:'#1C1C1A', borderColor:'#3A3A38', color:'#B4B2A9'}}>
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                  style={{background:'rgba(232,98,42,0.1)'}}>{item.icon}</span>
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.2}}
          className="rounded-xl p-7 border" style={{background:'#1C1C1A', borderColor:'#3A3A38'}}>
          <div className="flex flex-col gap-4">
            {['YOUR NAME', 'YOUR EMAIL'].map((label, i) => (
              <motion.div key={label} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:0.4, delay:0.4+i*0.1}}>
                <label className="font-mono text-xs tracking-wider block mb-2" style={{color:'#5F5E5A'}}>{label}</label>
                <input type={label === 'YOUR EMAIL' ? 'email' : 'text'}
                  placeholder={label === 'YOUR EMAIL' ? 'john@example.com' : 'John Doe'}
                  className="w-full px-4 py-2.5 rounded-lg text-white text-sm outline-none transition-colors"
                  style={{background:'#262624', border:'0.5px solid #3A3A38'}}
                  onFocus={e => e.target.style.borderColor='#E8622A'}
                  onBlur={e => e.target.style.borderColor='#3A3A38'} />
              </motion.div>
            ))}
            <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:0.6}}>
              <label className="font-mono text-xs tracking-wider block mb-2" style={{color:'#5F5E5A'}}>MESSAGE</label>
              <textarea rows={4} placeholder="Hi Milhara, I'd like to talk about..."
                className="w-full px-4 py-2.5 rounded-lg text-white text-sm outline-none transition-colors resize-none"
                style={{background:'#262624', border:'0.5px solid #3A3A38'}}
                onFocus={e => e.target.style.borderColor='#E8622A'}
                onBlur={e => e.target.style.borderColor='#3A3A38'} />
            </motion.div>
            <motion.button
              whileHover={{scale:1.02, background:'#C44F1F'}}
              whileTap={{scale:0.97}}
              onClick={() => setSent(true)}
              className="w-full py-3 text-white rounded-lg text-sm font-medium transition-colors"
              style={{background:'#E8622A'}}>
              {sent ? 'Message sent! ✓' : 'Send message →'}
            </motion.button>
            {sent && (
              <motion.p initial={{opacity:0,y:5}} animate={{opacity:1,y:0}} className="text-xs text-center" style={{color:'#5DCAA5'}}>
                Thanks! I will get back to you soon.
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}