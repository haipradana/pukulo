import useScrollReveal, { useScrollRevealGroup } from '../hooks/useScrollReveal'

const STATS = [
  { number: '2017', label: 'Established' },
  { number: '3', label: 'Robots' },
  { number: '360°', label: 'Omnivision' },
  { number: 'AI', label: 'Powered' },
]

const FEATURES = [
  {
    title: 'Omni Wheel',
    desc: 'Omni wheel system enables the robot to move in any direction with high precision.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: 'Omnivision 360°',
    desc: 'Omnivision camera provides a full 360-degree field of view for complete environmental awareness.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Artificial Intelligence',
    desc: 'Equipped with advanced AI for real-time decision making on the field.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
]

export default function About() {
  const headerRef = useScrollReveal()
  const contentRef = useScrollReveal()
  const statsRef = useScrollReveal()
  const featuresRef = useScrollRevealGroup()

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-tag">Introduction</span>
          <h2 className="section-title">About <span className="text-red">Fukuro</span></h2>
        </div>
        <div className="about-grid">
          <div className="about-content reveal" ref={contentRef}>
            <p>
              Fukuro is UGM's wheeled soccer robot team, established in <strong>2017</strong>.
              We compete in the Indonesian Wheeled Soccer Robot Contest (KRSBI-B), which follows
              the <strong>RoboCup Middle Size League (MSL)</strong> standard, an international competition
              where teams of fully autonomous robots play soccer with a regular-size FIFA ball.
            </p>
            <p>
              The name <em>fukuro</em> comes from Japanese, written as <strong>梟</strong> (romaji: Fukuro),
              meaning <strong>owl</strong>.
            </p>
            <p>
              Fukuro develops wheeled soccer robots with <strong>2 field players</strong> and{' '}
              <strong>1 goalkeeper</strong>. Our primary goal is to score as many goals as possible
              against the opponent.
            </p>
          </div>
          <div className="about-stats reveal" ref={statsRef}>
            {STATS.map(({ number, label }) => (
              <div className="stat-card" key={label}>
                <span className="stat-number">{number}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-features" ref={featuresRef}>
          {FEATURES.map(({ title, desc, icon }) => (
            <div className="feature reveal" key={title}>
              <div className="feature-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
