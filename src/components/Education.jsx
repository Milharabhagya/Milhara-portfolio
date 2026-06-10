export default function Education() {
  const education = [
    {
      icon: '🎓',
      degree: 'BSc (Hons) Software Engineering',
      institution: 'NSBM Green University · Affiliated with Plymouth University, UK',
      year: '2023 — 2026',
      type: 'University',
      subjects: [],
      result: null
    },
    {
      icon: '📗',
      degree: 'Advanced Level (A/L) — Physical Science Stream',
      institution: 'Maliyadeva College, Kurunegala',
      year: '2022',
      type: 'A/L',
      subjects: ['Combined Mathematics', 'Physics', 'Chemistry'],
      result: null
    },
    {
      icon: '📘',
      degree: 'Ordinary Level (O/L)',
      institution: 'Maliyadeva College, Kurunegala',
      year: '2019',
      type: 'O/L',
      subjects: [],
      result: 'Mathematics — A · English — C'
    },
    {
      icon: '🏫',
      degree: 'Primary & Secondary Education',
      institution: 'Maliyadeva College, Kurunegala',
      year: 'Up to 2022',
      type: 'School',
      subjects: [],
      result: null
    },
  ]

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{color:'#E8622A'}}>05. Education</p>
      <h2 className="text-4xl font-bold text-white mb-12">Academic background</h2>
      <div className="flex flex-col gap-4">
        {education.map((item, i) => (
          <div key={i} className="flex gap-5 items-start p-6 rounded-xl border transition-all duration-200 hover:border-[#E8622A]"
            style={{background:'#1C1C1A', borderColor:'#3A3A38'}}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{background:'rgba(232,98,42,0.1)'}}>
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <h3 className="text-base font-semibold text-white">{item.degree}</h3>
                <span className="font-mono text-xs px-3 py-1 rounded-full"
                  style={{background:'rgba(232,98,42,0.1)', color:'#E8622A'}}>
                  {item.type}
                </span>
              </div>
              <p className="text-sm mb-1" style={{color:'#B4B2A9'}}>{item.institution}</p>
              <p className="font-mono text-xs mb-2" style={{color:'#E8622A'}}>{item.year}</p>
              {item.subjects.length > 0 && (
                <div className="flex gap-2 flex-wrap mt-2">
                  {item.subjects.map(s => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full"
                      style={{background:'#262624', color:'#B4B2A9', border:'0.5px solid #3A3A38'}}>
                      {s}
                    </span>
                  ))}
                </div>
              )}
              {item.result && (
                <p className="text-xs mt-2 flex items-center gap-1" style={{color:'#5DCAA5'}}>
                  🏆 {item.result}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}