const common = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
}

export function EmailIcon(props) {
  return (
    <svg {...common} {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 7 8.5-7" />
    </svg>
  )
}

export function LocationIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M12 21.5s7-6.1 7-11.7a7 7 0 1 0-14 0c0 5.6 7 11.7 7 11.7Z" />
      <circle cx="12" cy="9.8" r="2.4" />
    </svg>
  )
}

export function BehanceIcon(props) {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 34 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <text x="0" y="15" fontSize="18" style={{ fontFamily: 'var(--font-serif)' }} fill="currentColor" stroke="none">
        Be
      </text>
      <path d="M22 6h9" strokeLinecap="round" />
    </svg>
  )
}

export function ResumeIcon(props) {
  return (
    <svg {...common} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="9.5" cy="9" r="1.8" />
      <path d="M6.5 14.2c.6-1.6 1.7-2.4 3-2.4s2.4.8 3 2.4" />
      <path d="M14.5 8.5h3.2" />
      <path d="M14.5 12h3.2" />
      <path d="M14.5 15.5h3.2" />
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M3.5 6.5h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 17.5h17" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="m5 5 14 14" />
      <path d="m19 5-14 14" />
    </svg>
  )
}
