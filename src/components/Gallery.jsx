import { useScrollRevealGroup } from '../hooks/useScrollReveal'
import useScrollReveal from '../hooks/useScrollReveal'
import { useLightbox } from '../hooks/useLightbox'

const GALLERY_ITEMS = [
  { id: 1, src: '/dokum/foto_tim.webp', alt: 'Team Fukuro', label: 'Team Fukuro', className: 'gallery-large' },
  { id: 2, src: '/dokum/robot1.webp', alt: 'Fukuro Robot', label: 'Fukuro Robot' },
  { id: 3, src: '/dokum/dribble.webp', alt: 'Dribble Test', label: 'Dribble Test' },
  { id: 4, src: '/dokum/developing.webp', alt: 'Development', label: 'Development' },
  { id: 5, src: '/dokum/learning.webp', alt: 'Learning', label: 'Learning' },
  { id: 6, src: '/dokum/robot2.webp', alt: 'Fukuro Robot 2', label: 'Fukuro Robot 2', className: 'gallery-mobile-only' },
]

export default function Gallery() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollRevealGroup()
  const { open } = useLightbox()

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-tag">Documentation</span>
          <h2 className="section-title">Photo <span className="text-red">Gallery</span></h2>
          <p className="section-desc">Documenting the activities and development of Team Fukuro.</p>
        </div>
        <div className="gallery-grid" ref={gridRef}>
          {GALLERY_ITEMS.map((item) => (
            <div
              className={`gallery-item reveal${item.className ? ' ' + item.className : ''}`}
              key={item.id}
              onClick={() => open(item.src, item.alt)}
            >
              <img src={item.src} alt={item.alt} />
              <div className="gallery-overlay">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
