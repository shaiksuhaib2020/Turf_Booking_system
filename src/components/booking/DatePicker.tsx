"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface DatePickerProps {
  selectedDate: Date | null
  onSelect: (date: Date) => void
}

export default function DatePicker({ selectedDate, onSelect }: DatePickerProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const maxDate = new Date(today)
  maxDate.setDate(today.getDate() + 14)

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const isPrevDisabled = currentMonth.getFullYear() === today.getFullYear() && currentMonth.getMonth() === today.getMonth()
  const isNextDisabled = currentMonth.getFullYear() === maxDate.getFullYear() && currentMonth.getMonth() === maxDate.getMonth()

  const days = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="w-10 h-10" />)
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
    const isDisabled = date < today || date > maxDate
    const isSelected = selectedDate?.toDateString() === date.toDateString()

    days.push(
      <button
        key={i}
        type="button"
        disabled={isDisabled}
        onClick={() => onSelect(date)}
        className={cn(
          "w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green",
          isDisabled ? "text-boundary-line cursor-not-allowed" : "cursor-pointer hover:bg-slate-card",
          isSelected ? "bg-turf-green text-chalk-white hover:bg-turf-green-dark" : (!isDisabled && "text-chalk-white"),
          date.toDateString() === today.toDateString() && !isSelected && "border border-turf-green/50 text-turf-green"
        )}
      >
        {i}
      </button>
    )
  }

  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  return (
    <div className="bg-pitch-black border border-boundary-line/50 p-4 rounded-xl w-full max-w-sm select-none">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-chalk-white font-semibold">
          {currentMonth.toLocaleString("default", { month: "long" })} {currentMonth.getFullYear()}
        </h3>
        <div className="flex space-x-1">
          <button
            type="button"
            disabled={isPrevDisabled}
            onClick={handlePrevMonth}
            className="p-1 rounded-md text-chalk-white/70 hover:text-chalk-white hover:bg-slate-card disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            disabled={isNextDisabled}
            onClick={handleNextMonth}
            className="p-1 rounded-md text-chalk-white/70 hover:text-chalk-white hover:bg-slate-card disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {weekDays.map(day => (
          <div key={day} className="text-xs font-semibold text-boundary-line">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days}
      </div>
    </div>
  )
}
