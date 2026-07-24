const common = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
}

export function UiDesignIcon(props) {
  return (
    <svg {...common} {...props}>
      <rect x="2.5" y="4.5" width="19" height="12" rx="1.5" />
      <path d="M8.5 20.5h7" />
      <path d="M12 16.5v4" />
      <text x="12" y="12.5" textAnchor="middle" fontSize="6" style={{ fontFamily: 'var(--font-serif)' }} fill="currentColor" stroke="none">
        UI
      </text>
    </svg>
  )
}

export function UxResearchIcon(props) {
  return (
    <svg {...common} {...props}>
      <circle cx="10.5" cy="9" r="7" />
      <circle cx="10.5" cy="7.6" r="2.2" />
      <path d="M6.7 12.6c.7-1.6 2.1-2.4 3.8-2.4s3.1.8 3.8 2.4" />
      <path d="M15.6 14.6 20.5 19.5" />
    </svg>
  )
}

export function WireframingIcon(props) {
  return (
    <svg {...common} {...props}>
      <circle cx="5" cy="7" r="1.6" />
      <circle cx="12" cy="14" r="1.6" />
      <circle cx="19" cy="7" r="1.6" fill="none" />
      <path d="M5 8.6c0 3.4 2 4.8 5.5 4.8" />
      <path d="M13.6 14H16c2 0 3-1.2 3-3.2V8.6" />
    </svg>
  )
}

export function DesignSystemsIcon(props) {
  return (
    <svg {...common} {...props}>
      <rect x="3" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="3" y="13.5" width="7" height="7" rx="1.2" />
      <rect x="13" y="13.5" width="7" height="7" rx="1.2" />
      <rect x="12.4" y="2.8" width="8" height="8" rx="1.4" transform="rotate(45 16.4 6.8)" />
    </svg>
  )
}

export function PrototypingIcon(props) {
  return (
    <svg {...common} {...props}>
      <rect x="4" y="3" width="12" height="17" rx="1.4" />
      <path d="M7 8h6" />
      <path d="M7 11.2h6" />
      <path d="M7 14.4h3.5" />
      <path d="M16 17.5h3.5" />
      <path d="M17.4 15.9 20.9 17.5 17.4 19.1" />
    </svg>
  )
}

export function VisualDesignIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M14.5 3.5 20.5 9.5 9 21H3v-6Z" />
      <path d="M12.7 5.3 18.7 11.3" />
      <rect x="13.2" y="13.2" width="6.5" height="6.5" rx="1.2" />
    </svg>
  )
}
