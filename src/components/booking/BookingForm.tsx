"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { isValidIndianPhone, cn } from "@/lib/utils"
import { slots as initialSlots } from "@/lib/data"
import DatePicker from "./DatePicker"
import SlotGrid from "./SlotGrid"
import SummaryCard from "./SummaryCard"
import PolicyCards from "./PolicyCards"

// Lazy load the confirmation modal
const ConfirmationModal = dynamic(() => import("./ConfirmationModal"), { ssr: false })

export default function BookingForm() {
  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [sport, setSport] = React.useState("Cricket")
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null)
  const [selectedSlotId, setSelectedSlotId] = React.useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  // Validation
  const phoneError = phone.length > 0 && !isValidIndianPhone(phone)
  const isFormValid = name.length >= 2 && isValidIndianPhone(phone) && selectedDate !== null && selectedSlotId !== null

  const handleBookNow = () => {
    if (isFormValid) {
      setIsModalOpen(true)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 pb-24">
      {/* Form Area */}
      <div className="lg:col-span-2 space-y-10">
        
        {/* Player Details */}
        <section className="space-y-6">
          <h3 className="font-display text-2xl text-chalk-white uppercase tracking-tight border-b border-boundary-line/30 pb-2">
            1. Player Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-chalk-white/80">
                Full Name <span className="text-scoreboard-amber">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Virat Kohli"
                className="w-full bg-slate-card border border-boundary-line/50 rounded-lg px-4 py-3 text-chalk-white placeholder:text-chalk-white/30 focus:outline-none focus:ring-2 focus:ring-turf-green focus:border-transparent transition-shadow"
              />
            </div>
            
            <div className="space-y-2 relative">
              <label htmlFor="phone" className="text-sm font-medium text-chalk-white/80">
                Phone Number <span className="text-scoreboard-amber">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-chalk-white/50 font-mono">+91</span>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="9876543210"
                  className={cn(
                    "w-full bg-slate-card border rounded-lg pl-14 pr-4 py-3 text-chalk-white font-mono placeholder:text-chalk-white/30 focus:outline-none focus:ring-2 focus:border-transparent transition-shadow",
                    phoneError ? "border-scoreboard-amber focus:ring-scoreboard-amber" : "border-boundary-line/50 focus:ring-turf-green"
                  )}
                />
              </div>
              {phoneError && (
                <p className="text-xs text-scoreboard-amber absolute -bottom-5 left-0">
                  Please enter a valid 10-digit phone number
                </p>
              )}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="sport" className="text-sm font-medium text-chalk-white/80">
                Sport <span className="text-scoreboard-amber">*</span>
              </label>
              <select
                id="sport"
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                className="w-full bg-slate-card border border-boundary-line/50 rounded-lg px-4 py-3 text-chalk-white focus:outline-none focus:ring-2 focus:ring-turf-green focus:border-transparent transition-shadow appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23F8FAFC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
              >
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
              </select>
            </div>
          </div>
        </section>

        {/* Date Selection */}
        <section className="space-y-6">
          <h3 className="font-display text-2xl text-chalk-white uppercase tracking-tight border-b border-boundary-line/30 pb-2">
            2. Select Date
          </h3>
          <DatePicker selectedDate={selectedDate} onSelect={setSelectedDate} />
        </section>

        {/* Slot Selection */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-boundary-line/30 pb-2">
            <h3 className="font-display text-2xl text-chalk-white uppercase tracking-tight">
              3. Available Slots
            </h3>
            <div className="flex items-center space-x-4 text-xs font-medium text-chalk-white/60 mb-1">
              <div className="flex items-center space-x-1"><span className="w-3 h-3 rounded bg-slate-card border border-transparent"></span><span>Available</span></div>
              <div className="flex items-center space-x-1"><span className="w-3 h-3 rounded bg-slate-card/30 border border-transparent flex items-center justify-center"><div className="w-full h-px bg-boundary-line -rotate-45"></div></span><span>Booked</span></div>
              <div className="flex items-center space-x-1"><span className="w-3 h-3 rounded bg-scoreboard-amber border border-scoreboard-amber"></span><span className="text-scoreboard-amber">Selected</span></div>
            </div>
          </div>
          
          {!selectedDate ? (
            <div className="p-8 text-center bg-slate-card/30 border border-boundary-line/30 border-dashed rounded-xl text-chalk-white/50 font-medium">
              Please select a date first to view slots.
            </div>
          ) : (
            <SlotGrid 
              slots={initialSlots} 
              selectedSlotId={selectedSlotId} 
              onSelectSlot={setSelectedSlotId} 
            />
          )}
        </section>

        {/* Policies */}
        <PolicyCards />
      </div>

      {/* Summary Sidebar */}
      <div className="lg:col-span-1">
        <SummaryCard 
          selectedDate={selectedDate}
          selectedSlotId={selectedSlotId}
          isFormValid={isFormValid}
          onBookNow={handleBookNow}
        />
      </div>

      <ConfirmationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}
