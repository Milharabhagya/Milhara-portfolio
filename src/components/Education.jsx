import { motion } from 'framer-motion'

export default function Education() {
  const education = [
    { icon: '🎓', degree: 'BSc (Hons) Software Engineering', institution: 'NSBM Green University · Affiliated with Plymouth University, UK', year: '2023 — 2026', type: 'University', subjects: [], result: null },
    { icon: '📗', degree: 'Advanced Level (A/L) — Physical Science Stream', institution: 'Maliyadeva College, Kurunegala', year: '2022', type: 'A/L', subjects: ['Combined Mathematics', 'Physics', 'Chemistry'], result: null },
    { icon: '📘', degree: 'Ordinary Level (O/L)', institution: 'Maliyadeva College, Kurunegala', year: '2019', type: 'O/L', subjects: [], result: 'Mathematics — A · English — C' },
    { icon: '🏫', degree: 'Primary & Secondary Education', institution: 'Maliyadeva College, Kurunegala', year: 'Up to 2022', type: 'School', subjects: [], result: null },
  ]

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-24">
      <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}
        className="font-mono text-xs tracking-widest uppercase mb-3" style={{color:'#E8622A'}}>
         Education
      </motion.p>
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.1}}
        className="text-4xl font-bold text-white mb-12">Academic background</motion.h2>
      <div className="flex flex-col gap-4">
        {education.map((item, i) => (
          <motion.div key={i}
            initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
            transition={{duration:0.5, delay:i*0.12}}
            whileHover={{x:6, borderColor:'#E8622A'}}
            className="flex gap-5 items-start p-6 rounded-xl border transition-colors"
            style={{background:'#1C1C1A', borderColor:'#3A3A38'}}>
            <motion.div whileHover={{rotate:10, scale:1.15}} transition={{type:'spring', stiffness:300}}
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{background:'rgba(232,98,42,0.1)'}}>
              {item.icon}
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <h3 className="text-base font-semibold text-white">{item.degree}</h3>
                <span className="font-mono text-xs px-3 py-1 rounded-full"
                  style={{background:'rgba(232,98,42,0.1)', color:'#E8622A'}}>{item.type}</span>
              </div>
              <p className="text-sm mb-1" style={{color:'#B4B2A9'}}>{item.institution}</p>
              <p className="font-mono text-xs mb-2" style={{color:'#E8622A'}}>{item.year}</p>
              {item.subjects.length > 0 && (
                <div className="flex gap-2 flex-wrap mt-2">
                  {item.subjects.map(s => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full"
                      style={{background:'#262624', color:'#B4B2A9', border:'0.5px solid #3A3A38'}}>{s}</span>
                  ))}
                </div>
              )}
              {item.result && (
                <p className="text-xs mt-2" style={{color:'#5DCAA5'}}>🏆 {item.result}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}