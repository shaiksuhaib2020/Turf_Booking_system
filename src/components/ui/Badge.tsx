import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-turf-green focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-turf-green text-chalk-white shadow hover:bg-turf-green/80",
        secondary:
          "border-transparent bg-slate-card text-chalk-white hover:bg-slate-card/80",
        destructive:
          "border-transparent bg-scoreboard-amber text-pitch-black shadow hover:bg-scoreboard-amber/80",
        outline: "text-chalk-white border-boundary-line",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
