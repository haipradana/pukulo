import { useEffect } from 'react'
import { useLightbox } from '../hooks/useLightbox'

export default function Lightbox() {
  const { image, close } = useLightbox()

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close() }
    if (image) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [image, close])

  return (
    <div
      className={`lightbox${image ? ' active' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
    >
      <button className="lightbox-close" onClick={close}>&times;</button>
      {image && <img src={image.src} alt={image.alt} />}
    </div>
  )
}
