import './SectionHeading.css'

export default function SectionHeading({ children, align = 'center', as: Tag = 'h2', className = '' }) {
  return (
    <Tag className={`section-heading section-heading--${align} ${className}`.trim()}>
      {children}
    </Tag>
  )
}
