"use client"

import { motion } from "framer-motion"

export function CreativeHero() {
  return (
    <motion.div
      className="w-full h-[400px] md:h-[500px] relative flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative">
        {/* Simple geometric shapes instead of particle matrix */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-64 h-64 rounded-full border-2 border-blue-500/30"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute w-48 h-48 rounded-full border-2 border-cyan-500/40"
            animate={{
              rotate: -360,
              scale: [1, 0.9, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute w-32 h-32 rounded-full border-2 border-sky-500/50"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
        </div>

        {/* Central glowing orb */}
        <motion.div
          className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 40px rgba(59, 130, 246, 0.8)",
              "0 0 20px rgba(59, 130, 246, 0.5)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/60"
            style={{
              left: `${50 + Math.cos((i * Math.PI * 2) / 8) * 120}px`,
              top: `${50 + Math.sin((i * Math.PI * 2) / 8) * 120}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
