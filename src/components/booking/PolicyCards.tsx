"use client"

import * as React from "react"
import { Clock, ShieldCheck, CigaretteOff, Recycle } from "lucide-react"

export default function PolicyCards() {
  const policies = [
    { text: "Arrive 15 minutes before your slot", icon: Clock },
    { text: "Sports shoes recommended", icon: ShieldCheck },
    { text: "No smoking on premises", icon: CigaretteOff },
    { text: "Keep the turf clean", icon: Recycle },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
      {policies.map((policy, idx) => {
        const Icon = policy.icon
        return (
          <div key={idx} className="bg-slate-card/30 border border-boundary-line/30 rounded-xl p-4 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-slate-card flex items-center justify-center text-turf-green flex-shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium text-chalk-white/80">{policy.text}</p>
          </div>
        )
      })}
    </div>
  )
}
