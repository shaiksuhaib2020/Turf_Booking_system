"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"
import { Button } from "../ui/Button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Booking", href: "/booking" },
    { name: "Coaching", href: "/coaching" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-pitch-black/80 backdrop-blur-md border-b border-boundary-line" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-baseline space-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green rounded">
            <span className="font-display text-3xl font-bold tracking-tight text-chalk-white">SuperOver</span>
            <span className="w-2 h-2 rounded-full bg-turf-green" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green rounded px-2 py-1",
                  pathname === item.href ? "text-turf-green" : "text-chalk-white hover:text-turf-green"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild>
              <Link href="/booking">Book & Play</Link>
            </Button>
          </nav>

          <div className="md:hidden">
            <MobileDrawer navItems={navItems} pathname={pathname} />
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileDrawer({ navItems, pathname }: { navItems: any[], pathname: string }) {
  const [open, setOpen] = React.useState(false)

  // Close drawer on route change
  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          aria-label="Open Menu"
          className="p-2 -mr-2 text-chalk-white hover:text-turf-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green rounded-md"
        >
          <Menu className="w-6 h-6" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-pitch-black/80 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-pitch-black border-l border-boundary-line p-6 shadow-xl z-50 flex flex-col data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
          <div className="flex justify-end">
            <Dialog.Close asChild>
              <button
                aria-label="Close Menu"
                className="p-2 -mr-2 text-chalk-white hover:text-turf-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green rounded-md"
              >
                <X className="w-6 h-6" />
              </button>
            </Dialog.Close>
          </div>
          <nav className="flex flex-col space-y-6 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-2xl font-display tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turf-green rounded px-2 py-1",
                  pathname === item.href ? "text-turf-green" : "text-chalk-white hover:text-turf-green"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pb-8">
            <Button asChild className="w-full">
              <Link href="/booking">Book & Play</Link>
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
