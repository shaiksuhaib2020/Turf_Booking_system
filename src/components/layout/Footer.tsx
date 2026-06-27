import Link from "next/link"
import { Button } from "../ui/Button"

export default function Footer() {
  return (
    <footer className="bg-[#0a101d] pt-16 pb-8 border-t border-boundary-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-baseline space-x-1">
              <span className="font-display text-3xl font-bold tracking-tight text-chalk-white">SuperOver</span>
              <span className="w-2 h-2 rounded-full bg-turf-green" />
            </div>
            <p className="text-boundary-line text-sm max-w-xs leading-relaxed">
              Premium Box Cricket & Football Turf. Experience the best playing surface in Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-chalk-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-boundary-line hover:text-turf-green transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green rounded">Home</Link>
              <Link href="/booking" className="text-sm text-boundary-line hover:text-turf-green transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green rounded">Booking</Link>
              <Link href="/coaching" className="text-sm text-boundary-line hover:text-turf-green transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green rounded">Coaching</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-chalk-white">Contact & Location</h4>
            <p className="text-sm text-boundary-line">
              Hyderabad, Telangana
            </p>
            <p className="text-sm font-mono text-turf-green">
              <a href="tel:+919390732277" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green rounded">+91 93907 32277</a>
            </p>
            <Button asChild variant="outline" size="sm" className="mt-2">
              <a 
                href="https://www.google.com/maps/place/Super+Over+-+Box+Cricket%2FFootball/@17.3718804,78.4286431,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9708fb331a2b:0xf63fc648669cc679!8m2!3d17.3718804!4d78.4286431!16s%2Fg%2F11s855k0yd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>

        </div>
        <div className="mt-16 pt-8 border-t border-boundary-line text-center">
          <p className="text-xs text-boundary-line">
            &copy; {new Date().getFullYear()} SuperOver Turf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
