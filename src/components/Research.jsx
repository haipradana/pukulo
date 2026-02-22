import useScrollReveal, { useScrollRevealGroup } from '../hooks/useScrollReveal'
import { Brain } from 'lucide-react'

const CARDS = [
  {
    title: 'Mechanical Design & Electronics',
    desc: 'Precision mechanical design and integrated electronics for optimal robot performance on the field.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="8" width="48" height="48" rx="4" />
        <circle cx="20" cy="20" r="4" /><circle cx="44" cy="20" r="4" />
        <circle cx="20" cy="44" r="4" /><circle cx="44" cy="44" r="4" />
        <line x1="24" y1="20" x2="40" y2="20" /><line x1="24" y1="44" x2="40" y2="44" />
        <line x1="20" y1="24" x2="20" y2="40" /><line x1="44" y1="24" x2="44" y2="40" />
        <circle cx="32" cy="32" r="6" />
      </svg>
    ),
  },
  {
    title: 'Localization',
    desc: 'Real-time localization system using omnivision and sensor fusion to accurately determine robot position.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="32" r="24" /><circle cx="32" cy="32" r="8" />
        <line x1="32" y1="8" x2="32" y2="16" /><line x1="32" y1="48" x2="32" y2="56" />
        <line x1="8" y1="32" x2="16" y2="32" /><line x1="48" y1="32" x2="56" y2="32" />
        <path d="M32 24l4 8-4 8-4-8z" />
      </svg>
    ),
  },
  {
    title: 'Vision System',
    desc: 'Omnivision 360° camera with intelligent image processing for ball, goal, and opponent detection.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="28" r="12" />
        <path d="M20 28c0 0 4 20 12 20s12-20 12-20" />
        <line x1="32" y1="16" x2="32" y2="12" /><line x1="24" y1="20" x2="20" y2="16" />
        <line x1="40" y1="20" x2="44" y2="16" /><line x1="22" y1="28" x2="18" y2="28" />
        <line x1="42" y1="28" x2="46" y2="28" />
        <circle cx="28" cy="26" r="2" /><circle cx="36" cy="26" r="2" />
      </svg>
    ),
  },
  {
    title: 'Strategy & Path Planning',
    desc: 'Game strategy algorithms and path planning for effective team coordination.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 48L20 20L32 36L44 12L56 32" />
        <circle cx="20" cy="20" r="3" /><circle cx="32" cy="36" r="3" />
        <circle cx="44" cy="12" r="3" /><circle cx="56" cy="32" r="3" />
        <line x1="8" y1="56" x2="56" y2="56" /><line x1="8" y1="56" x2="8" y2="8" />
      </svg>
    ),
  },
  {
    title: 'Motion Control',
    desc: 'High-precision motion control system using PID and adaptive control algorithms.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="16" y="8" width="32" height="48" rx="4" />
        <circle cx="32" cy="32" r="10" />
        <path d="M28 28l4 4 4-4" /><path d="M28 36l4-4 4 4" />
        <line x1="24" y1="14" x2="40" y2="14" /><circle cx="32" cy="52" r="2" />
      </svg>
    ),
  },
  {
    title: 'AI & Decision Making',
    desc: 'Artificial intelligence for autonomous decision making and real-time strategy adaptation.',
    icon: (
      <Brain size={64} strokeWidth={1.5} />
    ),
  },
]

export default function Research() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollRevealGroup()

  return (
    <section className="section research" id="research">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-tag">Our Work</span>
          <h2 className="section-title"><span className="text-red">Research</span> Areas</h2>
          <p className="section-desc">
            Fukuro robots are developed through in-depth research across multiple disciplines
            to create reliable and competitive autonomous robot systems.
          </p>
        </div>
        <div className="research-grid" ref={gridRef}>
          {CARDS.map(({ title, desc, icon }) => (
            <div className="research-card reveal" key={title}>
              <div className="research-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
