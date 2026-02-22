import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import { LightboxProvider } from './hooks/useLightbox'
import { ThemeProvider } from './hooks/useTheme'

export default function App() {
  return (
    <ThemeProvider>
      <LightboxProvider>
        <Navbar />
        <Hero />
        <About />
        <Research />
        <Gallery />
        <Contact />
        <Footer />
        <Lightbox />
      </LightboxProvider>
    </ThemeProvider>
  )
}
