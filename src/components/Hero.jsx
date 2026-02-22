import { useEffect, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import { asset } from '../utils/asset'

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    const COUNT = 70
    const MOUSE_RADIUS = 150
    const REPEL_FORCE = 5
    const mouse = { x: -9999, y: -9999 }

    function resize() {
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
    }

    const heroSection = canvas.closest('.hero')

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    function onMouseLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2.5 + 1
        this.baseVx = (Math.random() - 0.5) * 1.2
        this.baseVy = (Math.random() - 0.5) * 1.2
        this.vx = this.baseVx
        this.vy = this.baseVy
        this.opacity = Math.random() * 0.3 + 0.15
      }
      update() {
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < MOUSE_RADIUS) {
          const angle = Math.atan2(dy, dx)
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * REPEL_FORCE
          this.vx -= Math.cos(angle) * force
          this.vy -= Math.sin(angle) * force
        } else {
          this.vx += (this.baseVx - this.vx) * 0.02
          this.vy += (this.baseVy - this.vy) * 0.02
        }

        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) { this.vx *= -1; this.baseVx *= -1 }
        if (this.y < 0 || this.y > canvas.height) { this.vy *= -1; this.baseVy *= -1 }

        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(230,57,70,${this.opacity})`
        ctx.fill()
      }
    }

    function init() {
      particles = Array.from({ length: COUNT }, () => new Particle())
    }

    function connect() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(230,57,70,${(1 - dist / 150) * 0.15})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => { p.update(); p.draw() })
      connect()
      animId = requestAnimationFrame(animate)
    }

    resize()
    init()
    animate()
    window.addEventListener('resize', resize, { passive: true })
    heroSection.addEventListener('mousemove', onMouseMove, { passive: true })
    heroSection.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      heroSection.removeEventListener('mousemove', onMouseMove)
      heroSection.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
}

export default function Hero() {
  const r1 = useScrollReveal()
  const r2 = useScrollReveal()
  const r3 = useScrollReveal()
  const r4 = useScrollReveal()
  const r5 = useScrollReveal()

  const handleScroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-particles">
        <ParticleCanvas />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle reveal" ref={r1}>UGM Wheeled Soccer Robot Team</p>
          <h1 className="hero-title reveal" ref={r2}>
            <span className="title-fuku">FUKU</span>
            <span className="title-ro">RO</span>
          </h1>
          <p className="hero-desc reveal" ref={r3}>
            Developing autonomous wheeled soccer robots powered by AI, omnivision, and advanced control systems.
          </p>
          <div className="hero-buttons reveal" ref={r4}>
            <a href="#about" className="btn btn-primary" onClick={(e) => handleScroll(e, '#about')}>
              About Us
            </a>
            <a href="#research" className="btn btn-outline" onClick={(e) => handleScroll(e, '#research')}>
              Our Research
            </a>
          </div>
        </div>
        <div className="hero-image reveal" ref={r5}>
          <div className="robot-glow" />
          <img src={asset('robot.png')} alt="Robot Fukuro" />
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow" />
      </div>
    </section>
  )
}
