export default function Footer() {
    return (
      <footer className="border-t border-[#3A3A38] py-7 px-6 max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4">
        <p className="font-mono text-xs text-[#5F5E5A]">
          Designed & built by <span className="text-[#E8622A]">Milhara Bhagya</span> · 2025
        </p>
        <div className="flex gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/Milharabhagya' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/milhara-bhagya-565572340' },
            { label: 'Email', href: 'mailto:Bhagyapremarathne46@gmail.com' },
          ].map(item => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
              className="text-xs text-[#5F5E5A] hover:text-[#E8622A] transition-colors">
              {item.label}
            </a>
          ))}
        </div>
      </footer>
    )
  }