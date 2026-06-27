import * as React from "react"

export function FootballIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 12 7.5 9" />
      <path d="m12 12 4.5-3" />
      <path d="M12 12v5" />
      <path d="M7.5 9 4.8 11.2" />
      <path d="m16.5 9 2.7 2.2" />
      <path d="M12 17l-3 3" />
      <path d="m12 17 3 3" />
      <path d="M7.5 9h9" />
    </svg>
  )
}
