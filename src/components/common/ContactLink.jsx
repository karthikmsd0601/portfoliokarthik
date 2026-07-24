import './ContactLink.css'

export default function ContactLink({ icon, children, href, external = false }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <a className="contact-link" href={href} {...externalProps}>
      <span className="contact-link__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="contact-link__text">{children}</span>
    </a>
  )
}
