"use client"

import * as React from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Slot, SlotStatus } from "@/types"

interface SlotGridProps {
  slots: Slot[]
  selectedSlotId: string | null
  onSelectSlot: (slotId: string) => void
}

export default function SlotGrid({ slots, selectedSlotId, onSelectSlot }: SlotGridProps) {
  const [announcement, setAnnouncement] = React.useState("")
  const prefersReducedMotion = useReducedMotion()

  const handleSelect = (slot: Slot) => {
    if (slot.status === "booked") {
      setAnnouncement(`${slot.label} is already booked`)
      return
    }
    onSelectSlot(slot.id)
    setAnnouncement(`${slot.label} selected`)
  }

  return (
    <div className="w-full">
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {slots.map((slot) => {
          const isSelected = selectedSlotId === slot.id
          const isBooked = slot.status === "booked"
          const isAvailable = !isBooked && !isSelected

          return (
            <button
              key={slot.id}
              type="button"
              disabled={isBooked}
              aria-disabled={isBooked}
              aria-pressed={isSelected}
              onClick={() => handleSelect(slot)}
              className={cn(
                "relative flex items-center justify-center h-14 rounded-lg font-mono text-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green focus-visible:ring-offset-2 focus-visible:ring-offset-pitch-black select-none",
                isAvailable && "bg-slate-card text-chalk-white hover:border-turf-green border-2 border-transparent hover:text-turf-green",
                isBooked && "bg-slate-card/30 text-boundary-line cursor-not-allowed border-2 border-transparent line-through decoration-boundary-line decoration-2",
                isSelected && "bg-scoreboard-amber text-pitch-black font-bold border-2 border-scoreboard-amber shadow-[0_0_15px_rgba(245,158,11,0.5)]"
              )}
            >
              {/* Flip/Scale Animation Wrapper for the selected state */}
              <AnimatePresence mode="wait">
                {isSelected && !prefersReducedMotion && (
                  <motion.div
                    key="selected"
                    initial={{ rotateX: 90, scale: 0.8 }}
                    animate={{ rotateX: 0, scale: 1 }}
                    exit={{ rotateX: -90, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center rounded-md"
                  >
                    {slot.label}
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Static Content */}
              <span className={cn(isSelected && !prefersReducedMotion ? "opacity-0" : "opacity-100")}>
                {slot.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
