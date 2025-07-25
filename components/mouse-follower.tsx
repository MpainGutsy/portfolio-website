"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    // Don't add event listeners on mobile devices
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isMobile])

  // Don't render anything on mobile devices
  if (isMobile) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
      >
        <div className="w-full h-full rounded-full bg-white opacity-50"></div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-white pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 0.5,
          y: mousePosition.y - 0.5,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}
