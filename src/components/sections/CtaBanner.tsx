"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/motion"
import { Button } from "../ui/Button"

export default function CtaBanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with radial glow */}
      <div className="absolute inset-0 bg-slate-card z-0" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--color-turf-green-dark)_0%,_transparent_70%)] opacity-10 pointer-events-none" />
      
      <div className="container relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-8"
        >
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-chalk-white tracking-tight">
            READY TO PLAY?
          </h2>
          <p className="text-lg text-chalk-white/80 max-w-2xl mx-auto">
            Book your slot now and experience the best turf in the city. Slots fill up fast!
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto text-lg px-12">
              <Link href="/booking">Book Your Slot</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
