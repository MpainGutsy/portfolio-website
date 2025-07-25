"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
}

export function GlassmorphicCard({ children }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-[#0D7377]/50 hover:shadow-lg hover:shadow-[#0D7377]/20">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#0D7377]/10 to-[#32E0C4]/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">{children}</div>
      </div>
    </motion.div>
  )
}
