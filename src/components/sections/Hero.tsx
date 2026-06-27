"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "../ui/Button"
import { fadeUp, staggerContainer } from "@/lib/motion"

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image_turf.webp"
          alt="SuperOver Turf"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark gradient overlay: 45-60% opacity per brief */}
        <div className="absolute inset-0 bg-gradient-to-b from-pitch-black/40 via-pitch-black/50 to-pitch-black/80" />
      </div>

      {/* Floodlight Sweep Animation */}
      {!prefersReducedMotion && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "200%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
          style={{
            background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.15) 25%, rgba(255,255,255,0.2) 30%, transparent 35%)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <div className="mb-6 space-y-1">
            <motion.h1 variants={fadeUp} className="font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.9] tracking-tight text-chalk-white">
              PLAY HARD.
            </motion.h1>
            <motion.h1 variants={fadeUp} className="font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.9] tracking-tight text-chalk-white">
              BOOK FAST.
            </motion.h1>
            <motion.h1 variants={fadeUp} className="font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.9] tracking-tight text-turf-green drop-shadow-lg">
              WIN BIG.
            </motion.h1>
          </div>
          
          <motion.p variants={fadeUp} className="mt-8 text-lg sm:text-xl text-chalk-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
            Premium box cricket & football turf in Hyderabad—fast online booking, professional coaching, a playing experience worth showing up for.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto text-lg">
              <Link href="/booking">Book Your Slot</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg">
              <Link href="/coaching">Explore Coaching</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-chalk-white/50 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 w-full h-1/2 bg-turf-green"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
