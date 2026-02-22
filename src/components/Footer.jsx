import { asset } from '../utils/asset'

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-fuku">FUKU</span>
            <span className="logo-ro">RO</span>
            <p>Wheeled Soccer Robot Team<br />Universitas Gadjah Mada</p>
          </div>
          {/* <div className="footer-center">
            <div className="footer-links">
              {NAV_LINKS.map(({ href, label }) => (
                <a key={href} href={href} onClick={(e) => handleNav(e, href)}>
                  {label}
                </a>
              ))}
            </div>
          </div> */}
          <div className="footer-gmrt">
            <span className="gmrt-label">Part of</span>
            <a href="https://www.instagram.com/gmrtugm" target="_blank" rel="noopener noreferrer">
                <img src={asset('gmrt-logo.png')} alt="GMRT" className="gmrt-logo" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fukuro UGM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
