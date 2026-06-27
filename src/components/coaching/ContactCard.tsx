"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { fadeUp } from "@/lib/motion"
import { Card, CardContent } from "../ui/Card"
import { Button } from "../ui/Button"

export default function ContactCard() {
  return (
    <section id="contact-card" className="py-24 bg-pitch-black">
      <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Card className="border border-turf-green/30 bg-gradient-to-br from-slate-card to-pitch-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-turf-green-dark)_0%,_transparent_50%)] opacity-20 pointer-events-none" />
            <CardContent className="p-10 md:p-14 text-center space-y-8 relative z-10">
              <div className="space-y-4">
                <h3 className="font-display text-3xl md:text-4xl text-chalk-white uppercase tracking-tight">
                  Call or WhatsApp
                </h3>
                <p className="text-chalk-white/80 text-lg">
                  Get in touch with our team to find the perfect coaching program.
                </p>
              </div>

              <div className="font-mono text-3xl md:text-5xl font-bold text-turf-green tracking-tight">
                +91 93907 32277
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 gap-2">
                  <a 
                    href="https://wa.me/919390732277" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contact on WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
