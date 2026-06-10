const projects = [
    { icon: '📋', name: 'Safe Serve', desc: 'Web app for Public Health Inspectors with dashboard, calendar, inspection log and analytics.', tech: ['HTML', 'CSS', 'Java'] },
    { icon: '💡', name: 'Lumi Smart', desc: 'IoT smart street lighting with dashboard, map view, control panel, zone log and analytics.', tech: ['HTML', 'CSS', 'JavaScript', 'IoT'] },
    { icon: '📱', name: 'Team Sync', desc: 'Mobile project management app for team collaboration and task management.', tech: ['Flutter', 'Dart', 'Firebase'] },
    { icon: '🌿', name: 'AirLytics', desc: 'Real-time air quality monitoring for Colombo with map view, alerts and historical AQI data.', tech: ['HTML', 'CSS', 'JavaScript'] },
    { icon: '💳', name: 'Smart POS', desc: 'Point-of-sale system with products, stocks, discounts, bills and customer management.', tech: ['HTML', 'CSS', 'JavaScript'] },
    { icon: '🎬', name: 'Filmor Cinema', desc: 'Cinema booking with movie selection, PayPal payment and e-ticket generation.', tech: ['HTML', 'CSS', 'Bootstrap', 'JSP'] },
    { icon: '📚', name: 'Library Management', desc: 'Library system for managing books, issuing, returning and tracking due dates.', tech: ['HTML', 'CSS', 'JavaScript'] },
    { icon: '👗', name: 'Elegance Clothing', desc: 'E-commerce store with product listings, cart, wishlist and order summary.', tech: ['HTML', 'CSS'] },
    { icon: '⛽', name: 'PetroMind', desc: 'Flutter fuel management app with live prices, nearby stations, AI chatbot and role-based dashboards.', tech: ['Flutter', 'Firebase', 'FCM', 'AI API'] },
  ]
  
  export default function Projects() {
    return (
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{color:'#E8622A'}}>03. Projects</p>
        <h2 className="text-4xl font-bold text-white mb-12">Things I have built</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(p => (
            <div key={p.name} className="rounded-xl p-6 flex flex-col border group relative overflow-hidden transition-all duration-200 hover:-translate-y-1" style={{background:'#1C1C1A', borderColor:'#3A3A38'}}>
              <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{background:'#E8622A'}}></div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg" style={{background:'rgba(232,98,42,0.1)'}}>
                  {p.icon}
                </div>
                <a href="https://github.com/Milharabhagya" target="_blank" rel="noreferrer" className="text-lg transition-colors" style={{color:'#5F5E5A'}}>
                  ↗
                </a>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{p.name}</h3>
              <p className="text-xs leading-relaxed mb-4 flex-1" style={{color:'#5F5E5A'}}>{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map(t => (
                  <span key={t} className="font-mono text-xs px-2 py-1 rounded-full" style={{background:'#262624', color:'#B4B2A9', border:'0.5px solid #3A3A38'}}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }