const categories = [
    { title: 'Frontend', skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'JavaScript'] },
    { title: 'Backend', skills: ['Node.js', 'Express.js', 'Java', 'JSP', 'REST APIs'] },
    { title: 'Mobile', skills: ['Flutter', 'Dart', 'Firebase', 'FCM'] },
    { title: 'Database & Tools', skills: ['MongoDB', 'Firebase Firestore', 'Git', 'GitHub', 'VS Code'] },
  ]
  
  export default function Skills() {
    return (
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{color:'#E8622A'}}>02. Skills</p>
        <h2 className="text-4xl font-bold text-white mb-12">My tech stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(cat => (
            <div key={cat.title} className="rounded-xl p-5 border transition-colors" style={{background:'#1C1C1A', borderColor:'#3A3A38'}}>
              <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{color:'#E8622A'}}>{cat.title}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="text-xs px-3 py-1 rounded-full" style={{background:'#262624', color:'#B4B2A9', border:'0.5px solid #3A3A38'}}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }