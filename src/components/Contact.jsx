import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import useScrollReveal from '../hooks/useScrollReveal'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const CONTACT_INFO = [
  {
    title: 'Location',
    text: 'C20 Research Center\nUniversitas Gadjah Mada\nYogyakarta, Indonesia',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Email',
    text: 'fukuro.ugm@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: 'Social Media',
    text: '@fukuro_ugm',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

export default function Contact() {
  const headerRef = useScrollReveal()
  const infoRef = useScrollReveal()
  const formRef = useScrollReveal()
  const formElement = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formElement.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      formElement.current.reset()
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const buttonText = {
    idle: 'Send Message',
    sending: 'Sending...',
    sent: 'Sent!',
    error: 'Failed — Try Again',
  }

  const buttonClass = {
    idle: 'btn-primary',
    sending: 'btn-primary',
    sent: 'btn-success',
    error: 'btn-error',
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Be Our <span className="text-red">Partner</span></h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal" ref={infoRef}>
            {CONTACT_INFO.map(({ title, text, icon }) => (
              <div className="contact-item" key={title}>
                <div className="contact-icon">{icon}</div>
                <div>
                  <h4>{title}</h4>
                  <p>{text.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < text.split('\n').length - 1 && <br />}</span>
                  ))}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form-wrapper reveal" ref={formRef}>
            <form className="contact-form" ref={formElement} onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="from_name" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="from_email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Message" rows="5" required />
              </div>
              <button
                type="submit"
                className={`btn btn-full ${buttonClass[status]}`}
                disabled={status === 'sending'}
              >
                {buttonText[status]}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
