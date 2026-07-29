import { useEffect, useRef, useState } from 'react'
import { sendContactEmails } from '../../lib/emailjs'
import Toast from '../common/Toast'
import './ContactForm.css'

const TOAST_DURATION = 5000

const initialValues = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.'
  if (!values.message.trim()) errors.message = 'Please enter a message.'
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [toast, setToast] = useState(null)
  const dismissTimer = useRef(null)

  useEffect(() => () => clearTimeout(dismissTimer.current), [])

  const showToast = (message, variant) => {
    clearTimeout(dismissTimer.current)
    setToast({ message, variant })
    dismissTimer.current = setTimeout(() => setToast(null), TOAST_DURATION)
  }

  const dismissToast = () => {
    clearTimeout(dismissTimer.current)
    setToast(null)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('loading')
    try {
      await sendContactEmails(values)
      setStatus('success')
      setValues(initialValues)
      showToast('Thanks — your message has been sent. I’ll reply within 24 hours.', 'success')
    } catch (error) {
      console.error('Failed to send contact form emails:', error)
      setStatus('error')
      showToast('Something went wrong. Please try again.', 'error')
    }
  }

  return (
    <div className="contact-form-card">
      <h3 className="contact-form-card__title">Send a message</h3>
      <p className="contact-form-card__subtitle">
        Looking for a UI/UX Designer? Let&apos;s connect — I&apos;ll reply within 24 hours.
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              autoComplete="name"
            />
            {errors.name && (
              <span id="name-error" className="contact-form__error" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className="contact-form__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              autoComplete="email"
            />
            {errors.email && (
              <span id="email-error" className="contact-form__error" role="alert">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        <div className="contact-form__field">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && (
            <span id="subject-error" className="contact-form__error" role="alert">
              {errors.subject}
            </span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <span id="message-error" className="contact-form__error" role="alert">
              {errors.message}
            </span>
          )}
        </div>

        <button type="submit" className="contact-form__submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Send message'}
        </button>
      </form>

      <Toast message={toast?.message} variant={toast?.variant} onDismiss={dismissToast} />
    </div>
  )
}
