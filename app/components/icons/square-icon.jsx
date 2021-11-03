import * as React from 'react'

function SquareIcon({size = 24}) {
  return (
    <svg fill="currentColor" height={size} viewBox="0 0 24 24" width={size}>
      <rect
        height="12.5"
        rx="1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        width="12.5"
        x="5.75"
        y="5.75"
      />
    </svg>
  )
}

export {SquareIcon}
