"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Target, TrendingUp, Trophy, Users, Calendar, UserCheck } from "lucide-react"
import { coachingPrograms } from "@/lib/data"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/Card"

// Map specific icons to programs based on their id or name
const iconMap: Record<string, React.ElementType> = {
  "kids-cricket": Target,
  "advanced-cricket": TrendingUp,
  "football-academy": Trophy,
  "weekend-batches": Calendar,
  "personal-coaching": UserCheck,
  "group-coaching": Users,
}

export default function ProgramsGrid() {
  return (
    <section className="py-20 bg-pitch-black">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-[clamp(2rem,4vw,3rem)] leading-none text-chalk-white tracking-tight"
          >
            COACHING PROGRAMS
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {coachingPrograms.map((program, idx) => {
            const Icon = iconMap[program.icon] || Target

            return (
              <motion.div key={idx} variants={fadeUp}>
                <Card className="h-full hover:-translate-y-1 transition-transform duration-300 border border-boundary-line/30 flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-turf-green/10 flex items-center justify-center mb-4 text-turf-green">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl text-chalk-white">{program.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-base text-chalk-white/70 leading-relaxed">
                      {program.description}
                    </CardDescription>
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
