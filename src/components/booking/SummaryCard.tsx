"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card"
import { Button } from "../ui/Button"
import { turfInfo, slots } from "@/lib/data"

interface SummaryCardProps {
  selectedDate: Date | null
  selectedSlotId: string | null
  isFormValid: boolean
  onBookNow: () => void
}

export default function SummaryCard({ selectedDate, selectedSlotId, isFormValid, onBookNow }: SummaryCardProps) {
  const selectedSlot = slots.find(s => s.id === selectedSlotId)
  
  return (
    <Card className="sticky top-28 border border-boundary-line/50">
      <CardHeader className="bg-slate-card/50 border-b border-boundary-line/50">
        <CardTitle className="text-xl text-chalk-white">Booking Summary</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-chalk-white/70">Date</span>
            <span className="font-mono text-chalk-white font-medium text-right">
              {selectedDate ? selectedDate.toLocaleDateString("en-IN", { day: '2-digit', month: 'short', year: 'numeric' }) : "--"}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-chalk-white/70">Slot</span>
            <span className="font-mono text-chalk-white font-medium text-right">
              {selectedSlot ? selectedSlot.label : "--"}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-chalk-white/70">Duration</span>
            <span className="font-mono text-chalk-white font-medium text-right">1 hour</span>
          </div>

          <div className="flex justify-between items-center pb-4 border-b border-boundary-line/50">
            <span className="text-chalk-white/70">Price/hr</span>
            <span className="font-mono text-chalk-white font-medium text-right">₹{turfInfo.pricePerHour}</span>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-chalk-white font-semibold text-lg">Total</span>
            <span className="font-mono text-turf-green font-bold text-2xl">
              ₹{turfInfo.pricePerHour}
            </span>
          </div>
        </div>

        <Button 
          className="w-full text-lg h-14" 
          disabled={!isFormValid}
          onClick={onBookNow}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  )
}
