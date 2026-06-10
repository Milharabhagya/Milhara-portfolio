import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-[#E8622A] text-xs tracking-widest uppercase mb-3">06. Contact</p>
      <h2 className="text-4xl font-bold text-white mb-12">Get in touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-[#5F5E5A] leading-relaxed mb-8">
            I'm currently open to internship opportunities and freelance projects. Whether you have a question, a project idea, or just want to connect — my inbox is always open!
          </p>
          <div className="flex flex-col gap-3">
            {[
              { icon: '✉️', label: 'Bhagyapremarathne46@gmail.com', href: 'mailto:Bhagyapremarathne46@gmail.com' },
              { icon: '💼', label: 'linkedin.com/in/milhara-bhagya', href: 'https://www.linkedin.com/in/milhara-bhagya-565572340' },
              { icon: '🐙', label: 'github.com/Milharabhagya', href: 'https://github.com/Milharabhagya' },
            ].map(item => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-[#1C1C1A] border border-[#3A3A38] rounded-lg text-sm text-[#B4B2A9] hover:border-[#E8622A] hover:text-[#E8622A] transition-all">
                <span className="w-8 h-8 rounded-lg bg-[#E8622A]/10 flex items-center justify-center text-sm flex-shrink-0">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="bg-[#1C1C1A] border border-[#3A3A38] rounded-xl p-7">
          <div className="flex flex-col gap-4">
            <div>
              <label className="font-mono text-xs text-[#5F5E5A] tracking-wider block mb-2">YOUR NAME</label>
              <input className="w-full px-4 py-2.5 bg-[#262624] border border-[#3A3A38] rounded-lg text-white text-sm outline-none focus:border-[#E8622A] transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="font-mono text-xs text-[#5F5E5A] tracking-wider block mb-2">YOUR EMAIL</label>
              <input className="w-full px-4 py-2.5 bg-[#262624] border border-[#3A3A38] rounded-lg text-white text-sm outline-none focus:border-[#E8622A] transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="font-mono text-xs text-[#5F5E5A] tracking-wider block mb-2">MESSAGE</label>
              <textarea rows={4} className="w-full px-4 py-2.5 bg-[#262624] border border-[#3A3A38] rounded-lg text-white text-sm outline-none focus:border-[#E8622A] transition-colors resize-none" placeholder="Hi Milhara, I'd like to talk about..."></textarea>
            </div>
            <button onClick={() => setSent(true)}
              className="w-full py-3 bg-[#E8622A] text-white rounded-lg text-sm font-medium hover:bg-[#C44F1F] transition-colors">
              {sent ? 'Message sent! ✓' : 'Send message →'}
            </button>
            {sent && <p className="text-xs text-[#5DCAA5] text-center">Thanks! I'll get back to you soon.</p>}
          </div>
        </div>
      </div>
    </section>
  )
}