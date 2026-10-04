/** Iconos de linea, 1.5px de stroke para que casen con el peso del texto. */
const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconWeb(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
      <path d="M2.5 9h19M6 6.5h.01M9 6.5h.01" />
      <path d="M7.5 13.5L11 17l5.5-6" />
    </svg>
  )
}

export function IconCloud(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 18.5a4 4 0 0 1-.4-7.98 5.5 5.5 0 0 1 10.7-1.2A3.75 3.75 0 0 1 18 18.5H7Z" />
      <path d="M12 12.5v6M9.75 15L12 12.75 14.25 15" />
    </svg>
  )
}

export function IconCustom(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6.5 12 2.5l8 4v11L12 21.5 4 17.5v-11Z" />
      <path d="M4 6.5 12 10.5l8-4M12 10.5v11M8 8.2l8 4" />
    </svg>
  )
}

export function IconArrow(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h13M12.5 6.5 19 12l-6.5 5.5" />
    </svg>
  )
}