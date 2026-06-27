import * as React from "react"

export function CricketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 4.5 9 10" />
      <path d="m11 5 3 3" />
      <path d="m5 11 3 3" />
      <path d="M4.5 14.5 10 9" />
      <path d="M12 18h2" />
      <path d="M16 14v2" />
      <path d="M15.5 18.5a2.12 2.12 0 1 0 3-3 2.12 2.12 0 0 0-3 3z" />
      <path d="M5.5 18.5a2.12 2.12 0 1 0 3-3 2.12 2.12 0 0 0-3 3z" />
      <path d="m3 3 18 18" />
    </svg>
  )
}
