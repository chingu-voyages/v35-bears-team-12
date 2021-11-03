import * as React from "react";

function CodeIcon({ size = 44 }) {
  return (
    <svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <rect
        height="14.5"
        rx="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        width="14.5"
        x="4.75"
        y="4.75"
      />
      <path
        d="M8.75 10.75L11.25 13L8.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export { CodeIcon };
