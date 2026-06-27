"use client"

import * as React from "react"
import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"
import { whyChooseUs } from "@/lib/data"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { Card, CardContent } from "../ui/Card"

export default function WhyChoose() {
  return (
    <section className="py-20 bg-[#0a101d] border-t border-boundary-line/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-[clamp(2rem,4vw,3rem)] leading-none text-chalk-white tracking-tight"
          >
            WHY CHOOSE SUPEROVER
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg text-chalk-white/80"
          >
            Whether you&apos;re looking for coaching for your child, personal training, or group sessions, SuperOver has a program built for every age and skill level.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          // 7 items: we can use a flex layout with wrapping, centered, or a grid that handles odd numbers cleanly.
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {whyChooseUs.map((reason, idx) => {
            const IconComponent = (LucideIcons as any)[reason.icon] || LucideIcons.CheckCircle

            return (
              <motion.div key={idx} variants={fadeUp} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm">
                <Card className="h-full border border-boundary-line/30 bg-slate-card hover:border-turf-green/50 transition-colors">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0 text-turf-green mt-1">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <p className="font-semibold text-chalk-white leading-snug">
                      {reason.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
