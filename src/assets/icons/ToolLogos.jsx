export function CapCutLogo(props) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M4 10c8 5 8 5 0 10 0 4 4 8 8 8 8-5 8-5 0-10 0-4-4-8-8-8Z"
        fill="#000000"
      />
      <path d="M4 30c8-5 8-5 0-10 0-4 4-8 8-8" fill="none" stroke="#000000" strokeWidth="0" />
      <path
        d="M36 10c-8 5-8 5 0 10 0 4-4 8-8 8-8-5-8-5 0-10 0-4 4-8 8-8Z"
        fill="#000000"
      />
    </svg>
  )
}

export function FigmaLogo(props) {
  return (
    <svg width="30" height="46" viewBox="0 0 24 36" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 0H6a6 6 0 0 0 0 12h6V0Z" fill="#F24E1E" />
      <path d="M12 0h6a6 6 0 0 1 0 12h-6V0Z" fill="#FF7262" />
      <path d="M6 12h6v12H6a6 6 0 0 1 0-12Z" fill="#A259FF" />
      <path d="M12 24a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" fill="#1ABCFE" />
      <path d="M6 24a6 6 0 1 0 12 0v-6H6v6Z" fill="#0ACF83" />
    </svg>
  )
}

export function CanvaLogo(props) {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" aria-hidden="true" focusable="false" {...props}>
      <circle cx="21" cy="21" r="21" fill="#00C4CC" />
      <text
        x="21"
        y="27"
        textAnchor="middle"
        style={{ fontFamily: 'var(--font-serif)' }}
        fontStyle="italic"
        fontSize="16"
        fill="#ffffff"
      >
        Canva
      </text>
    </svg>
  )
}

export function PhotoshopLogo(props) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false" {...props}>
      <rect x="1.5" y="1.5" width="37" height="37" rx="7" fill="#0A0620" stroke="#31A8FF" strokeWidth="1.6" />
      <text x="20" y="27" textAnchor="middle" style={{ fontFamily: 'var(--font-serif)' }} fontWeight="bold" fontSize="18" fill="#31A8FF">
        Ps
      </text>
    </svg>
  )
}

export function IllustratorLogo(props) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false" {...props}>
      <rect x="1.5" y="1.5" width="37" height="37" rx="7" fill="#330000" />
      <text x="20" y="27" textAnchor="middle" style={{ fontFamily: 'var(--font-serif)' }} fontWeight="bold" fontSize="18" fill="#FF9A00">
        Ai
      </text>
    </svg>
  )
}
