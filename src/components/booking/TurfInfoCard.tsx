"use client"

import * as React from "react"
import { MapPin } from "lucide-react"
import { turfInfo } from "@/lib/data"
import { Card, CardContent } from "../ui/Card"
import { Badge } from "../ui/Badge"

export default function TurfInfoCard() {
  return (
    <Card className="border border-boundary-line/50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-turf-green/5 rounded-bl-full pointer-events-none" />
      <CardContent className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <h2 className="font-display text-3xl md:text-4xl text-chalk-white uppercase tracking-tight">
              {turfInfo.name}
            </h2>
            <div className="flex space-x-2">
              {turfInfo.sports.map(sport => (
                <Badge key={sport} variant="secondary" className="text-[10px] md:text-xs uppercase tracking-wider">
                  {sport}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center text-sm text-chalk-white/70">
            <MapPin className="w-4 h-4 mr-1.5 text-turf-green" />
            {turfInfo.location} • {turfInfo.surface}
          </div>
        </div>
        
        <div className="flex flex-col items-start md:items-end">
          <div className="text-xs font-semibold text-chalk-white/60 uppercase tracking-widest mb-1">Price</div>
          <div className="flex items-baseline space-x-1 font-mono text-3xl md:text-4xl text-turf-green font-bold tracking-tight">
            <span>₹{turfInfo.pricePerHour}</span>
            <span className="text-lg text-chalk-white/50 font-normal">/hr</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
