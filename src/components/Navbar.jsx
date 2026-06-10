import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#111110]/95 backdrop-blur-md border-b border-[#3A3A38]' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono text-sm font-medium text-white">MB<span className="text-[#E8622A]">.</span></span>
        <ul className="hidden md:flex gap-8">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-[13px] text-[#5F5E5A] hover:text-white transition-colors duration-200">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:block text-[12px] px-4 py-2 border border-[#E8622A] text-[#E8622A] rounded hover:bg-[#E8622A] hover:text-white transition-all duration-200">
          Hire me
        </a>
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-5 h-px bg-[#B4B2A9]"></span>
          <span className="block w-5 h-px bg-[#B4B2A9]"></span>
          <span className="block w-5 h-px bg-[#B4B2A9]"></span>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#1C1C1A] border-b border-[#3A3A38] px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="text-sm text-[#B4B2A9] hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}