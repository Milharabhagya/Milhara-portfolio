import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Orb {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 120 + 60
        this.opacity = Math.random() * 0.04 + 0.01
        this.speedX = (Math.random() - 0.5) * 0.15
        this.speedY = (Math.random() - 0.5) * 0.15
        this.color = Math.random() > 0.5 ? '124,92,252' : '91,63,212'
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < -200 || this.x > canvas.width + 200 ||
            this.y < -200 || this.y > canvas.height + 200) {
          this.reset()
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
        }
      }
      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        )
        gradient.addColorStop(0, `rgba(${this.color},${this.opacity})`)
        gradient.addColorStop(1, `rgba(${this.color},0)`)
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    class Dot {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.2 + 0.3
        this.speedX = (Math.random() - 0.5) * 0.25
        this.speedY = (Math.random() - 0.5) * 0.25
        this.opacity = Math.random() * 0.25 + 0.05
        this.isPurple = Math.random() > 0.65
        this.pulseSpeed = Math.random() * 0.02 + 0.005
        this.pulseOffset = Math.random() * Math.PI * 2
        this.life = 0
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life += this.pulseSpeed
        if (this.x < 0 || this.x > canvas.width ||
            this.y < 0 || this.y > canvas.height) {
          this.reset()
        }
      }
      draw() {
        const pulse = Math.sin(this.life + this.pulseOffset) * 0.5 + 0.5
        const currentOpacity = this.opacity * (0.6 + pulse * 0.4)
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.isPurple
          ? `rgba(124,92,252,${currentOpacity})`
          : `rgba(80,80,100,${currentOpacity * 0.6})`
        ctx.fill()
      }
    }

    const drawGrid = () => {
      const spacing = 80
      ctx.strokeStyle = 'rgba(124,92,252,0.025)'
      ctx.lineWidth = 0.5
      for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    const drawConnections = (dots) => {
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(124,92,252,${(1 - dist / 120) * 0.06})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    const orbs = Array.from({ length: 6 }, () => new Orb())
    const dots = Array.from({ length: 50 }, () => new Dot())

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGrid()
      orbs.forEach(o => { o.update(); o.draw() })
      drawConnections(dots)
      dots.forEach(d => { d.update(); d.draw() })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.9 }} />
  )
}