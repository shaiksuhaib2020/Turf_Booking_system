"use client"

import * as React from "react"
import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"
import { amenities } from "@/lib/data"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { Card, CardContent } from "../ui/Card"
import { CricketIcon } from "../icons/CricketIcon"
import { FootballIcon } from "../icons/FootballIcon"

export default function Amenities() {
  return (
    <section className="py-20 md:py-28 bg-[#0a101d] border-y border-boundary-line/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-[clamp(2rem,4vw,3rem)] leading-none text-chalk-white tracking-tight"
          >
            WORLD-CLASS FACILITIES
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {amenities.map((amenity, idx) => {
            let IconComponent: React.ElementType;
            if (amenity.icon === "CricketIcon") {
              IconComponent = CricketIcon;
            } else if (amenity.icon === "FootballIcon") {
              IconComponent = FootballIcon;
            } else {
              IconComponent = (LucideIcons as any)[amenity.icon] || LucideIcons.CheckCircle;
            }

            return (
              <motion.div key={idx} variants={fadeUp}>
                <Card className="h-full group hover:-translate-y-1 transition-all duration-300 border border-boundary-line/30 hover:border-turf-green/50 bg-slate-card">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4 h-full">
                    <div className="text-chalk-white/60 group-hover:text-turf-green transition-colors duration-300">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-sm md:text-base text-chalk-white leading-tight">
                      {amenity.name}
                    </h3>
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
