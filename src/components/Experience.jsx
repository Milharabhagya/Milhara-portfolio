export default function Experience() {
    return (
      <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-mono text-[#E8622A] text-xs tracking-widest uppercase mb-3">04. Experience</p>
        <h2 className="text-4xl font-bold text-white mb-12">Journey so far</h2>
        <div className="relative pl-7 border-l border-[#3A3A38]">
          {[
            {
              date: '2023 — Present',
              role: 'Software Engineering Undergraduate',
              org: 'NSBM Green University · Plymouth University UK',
              desc: 'Pursuing a BSc (Hons) in Software Engineering, building full-stack web applications, mobile apps with Flutter, and IoT-integrated systems across multiple team and individual projects.'
            },
            {
              date: 'Project Work',
              role: 'Frontend Developer — Multiple Projects',
              org: 'Academic & Personal Projects',
              desc: 'Led frontend development across 9+ projects spanning healthcare, IoT, e-commerce, cinema, finance and fuel management. Delivered responsive interfaces using HTML, CSS, JavaScript, Flutter and React.'
            }
          ].map((item, i) => (
            <div key={i} className="relative mb-10">
              <div className="absolute -left-[34px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#E8622A] border-2 border-[#111110]"></div>
              <p className="font-mono text-[#E8622A] text-xs tracking-wider mb-1">{item.date}</p>
              <h3 className="text-base font-semibold text-white mb-1">{item.role}</h3>
              <p className="text-sm text-[#B4B2A9] mb-2">{item.org}</p>
              <p className="text-sm text-[#5F5E5A] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }