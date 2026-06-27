import TurfInfoCard from "@/components/booking/TurfInfoCard"
import BookingForm from "@/components/booking/BookingForm"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-pitch-black pt-28 pb-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="space-y-4 text-center md:text-left">
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-chalk-white uppercase tracking-tight">
            Book Your Turf
          </h1>
          <p className="text-lg text-chalk-white/80 max-w-2xl">
            Pick a date, pick a slot, lock it in.
          </p>
        </header>

        <TurfInfoCard />

        <main>
          <BookingForm />
        </main>
      </div>
    </div>
  )
}
