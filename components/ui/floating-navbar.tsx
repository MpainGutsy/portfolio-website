"use client"

import { useState } from "react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  type JSX, // Declare JSX variable here
} from "framer-motion"
import { cn } from "@/lib/utils"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-[#0D7377]/30 rounded-full bg-black/90 backdrop-blur-md shadow-2xl shadow-[#0D7377]/20 z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className,
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-zinc-300 items-center flex space-x-1 hover:text-[#32E0C4] transition-colors duration-300",
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
          </a>
        ))}
        <button className="border border-[#0D7377]/40 text-sm font-medium relative text-white px-4 py-2 rounded-full bg-gradient-to-r from-[#0D7377] to-[#32E0C4] hover:from-[#32E0C4] hover:to-[#0D7377] transition-all duration-300 shadow-lg shadow-[#0D7377]/25">
          <span>Resume</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#32E0C4] to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
