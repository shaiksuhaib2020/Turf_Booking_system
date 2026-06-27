"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { Card, CardContent } from "../ui/Card"

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-pitch-black">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div className="space-y-6">
            <motion.h2 variants={fadeUp} className="font-display text-[clamp(2rem,4vw,3rem)] leading-none text-chalk-white tracking-tight">
              A PLAYING EXPERIENCE <br />
              <span className="text-turf-green">BUILT FOR PLAYERS</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-chalk-white/80 leading-relaxed">
              SuperOver is a premium synthetic box cricket and football arena built for players who expect quality. Whether you&apos;re here with friends, running a tournament, or training seriously, you get a clean, well-maintained, professional-grade surface every time.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="relative">
            <Card className="border border-boundary-line bg-slate-card/50 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <div className="w-32 h-32 rounded-full border-4 border-turf-green" />
              </div>
              <CardContent className="p-8 md:p-12 space-y-8 relative z-10">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="font-mono text-4xl font-bold text-turf-green mb-2">24/7</div>
                    <div className="text-sm font-semibold text-chalk-white uppercase tracking-wider">Access</div>
                  </div>
                  <div>
                    <div className="font-mono text-4xl font-bold text-turf-green mb-2">FIFA</div>
                    <div className="text-sm font-semibold text-chalk-white uppercase tracking-wider">Grade Turf</div>
                  </div>
                  <div>
                    <div className="font-mono text-4xl font-bold text-turf-green mb-2">LED</div>
                    <div className="text-sm font-semibold text-chalk-white uppercase tracking-wider">Floodlights</div>
                  </div>
                  <div>
                    <div className="font-mono text-4xl font-bold text-turf-green mb-2">Pro</div>
                    <div className="text-sm font-semibold text-chalk-white uppercase tracking-wider">Coaches</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
