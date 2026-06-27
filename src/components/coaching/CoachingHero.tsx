"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { Button } from "../ui/Button"

export default function CoachingHero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact-card")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image - Reusing turf image with different overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/coaching/coaching-hero.webp"
          alt="SuperOver Coaching"
          fill
          priority
          className="object-cover object-bottom"
        />
        {/* Darker, greener gradient overlay to differentiate from home hero */}
        <div className="absolute inset-0 bg-gradient-to-t from-pitch-black via-pitch-black/70 to-turf-green-dark/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-pitch-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1 variants={fadeUp} className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-chalk-white uppercase">
            Professional Cricket & <span className="text-turf-green drop-shadow-md">Football Coaching</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg sm:text-xl text-chalk-white/90 font-medium max-w-2xl mx-auto">
            Train with experienced coaches and improve your game.
          </motion.p>

          <motion.div variants={fadeUp} className="pt-6">
            <Button size="lg" className="w-full sm:w-auto text-lg px-10" onClick={scrollToContact}>
              Enroll Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
