import { motion } from 'framer-motion'

export default function Experience() {
  const items = [
    {
      date: '2023 — Present',
      role: 'Software Engineering Undergraduate',
      org: 'NSBM Green University · Plymouth University UK',
      desc: 'Pursuing a BSc (Hons) in Software Engineering, building full-stack web apps, mobile apps with Flutter, and IoT-integrated systems.'
    },
    {
      date: 'Project Work',
      role: 'Frontend Developer — Multiple Projects',
      org: 'Academic & Personal Projects',
      desc: 'Led frontend development across 9+ projects spanning healthcare, IoT, e-commerce, cinema, finance and fuel management.'
    }
  ]

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}
        className="font-mono text-xs tracking-widest uppercase mb-3" style={{color:'#E8622A'}}>
         Experience
      </motion.p>
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.1}}
        className="text-4xl font-bold text-white mb-12">Journey so far</motion.h2>
      <div className="relative pl-7 border-l" style={{borderColor:'#3A3A38'}}>
        {items.map((item, i) => (
          <motion.div key={i} initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
            transition={{duration:0.5, delay:i*0.15}} className="relative mb-10">
            <motion.div initial={{scale:0}} whileInView={{scale:1}} viewport={{once:true}}
              transition={{duration:0.4, delay:i*0.15+0.2, type:'spring', stiffness:300}}
              className="absolute -left-[34px] top-1.5 w-2.5 h-2.5 rounded-full border-2"
              style={{background:'#E8622A', borderColor:'#111110'}} />
            <p className="font-mono text-xs tracking-wider mb-1" style={{color:'#E8622A'}}>{item.date}</p>
            <h3 className="text-base font-semibold text-white mb-1">{item.role}</h3>
            <p className="text-sm mb-2" style={{color:'#B4B2A9'}}>{item.org}</p>
            <p className="text-sm leading-relaxed" style={{color:'#5F5E5A'}}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}