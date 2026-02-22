import { createContext, useContext, useState, useCallback } from 'react'

const LightboxContext = createContext(null)

export function LightboxProvider({ children }) {
  const [image, setImage] = useState(null)

  const open = useCallback((src, alt) => {
    setImage({ src, alt })
    document.body.style.overflow = 'hidden'
  }, [])

  const close = useCallback(() => {
    setImage(null)
    document.body.style.overflow = ''
  }, [])

  return (
    <LightboxContext.Provider value={{ image, open, close }}>
      {children}
    </LightboxContext.Provider>
  )
}

export function useLightbox() {
  return useContext(LightboxContext)
}
