import emailjs from '@emailjs/browser'

export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
export const EMAILJS_TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT
export const EMAILJS_TEMPLATE_AUTOREPLY = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
}

export function isEmailjsConfigured() {
  return Boolean(
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_CONTACT && EMAILJS_TEMPLATE_AUTOREPLY && EMAILJS_PUBLIC_KEY,
  )
}

export async function sendContactEmails({ name, email, subject, message }) {
  const templateParams = {
    name,
    email,
    subject,
    message,
    submitted_at: new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
    page_url: typeof window !== 'undefined' ? window.location.href : '',
  }

  // Notify Karthik of the new enquiry, then send the visitor an auto-reply.
  await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CONTACT, templateParams)
  await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_AUTOREPLY, templateParams)
}
