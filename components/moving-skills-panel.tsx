"use client"

import { motion } from "framer-motion"

const techStack = [
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "🗃️" },
  { name: "Excel", icon: "📊" },
  { name: "Power BI", icon: "📈" },
  { name: "Tableau", icon: "📉" },
  { name: "R", icon: "📊" },
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Git", icon: "🔧" },
]

export function MovingSkillsPanel() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: [0, -100 * techStack.length],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-black/30 backdrop-blur-sm border border-zinc-700/50 hover:border-[#0D7377]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#0D7377]/20 min-w-fit"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-white font-medium">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
