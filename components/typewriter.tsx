"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterProps {
  text: string
  delay?: number
  speed?: number
  className?: string
  cursorStyle?: "block" | "line" | "underline" | "box" | "dot"
}

export function Typewriter({ text, delay = 0, speed = 100, className = "", cursorStyle = "line" }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!isStarted) return

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed, isStarted])

  const getCursorStyles = () => {
    const baseClasses = "bg-gradient-to-b from-[#0D7377] to-[#32E0C4]"

    switch (cursorStyle) {
      case "block":
        return {
          className: `inline-block w-[0.6em] h-[1em] ${baseClasses} ml-1 rounded-sm`,
          style: { verticalAlign: "baseline" },
        }
      case "line":
        return {
          className: `inline-block w-0.5 h-[1em] ${baseClasses} ml-1 rounded-sm`,
          style: { verticalAlign: "baseline" },
        }
      case "underline":
        return {
          className: `inline-block w-[0.8em] h-0.5 ${baseClasses} ml-1 rounded-sm`,
          style: { verticalAlign: "baseline", marginTop: "0.8em" },
        }
      case "box":
        return {
          className: `inline-block w-[0.6em] h-[1em] border-2 border-[#0D7377] ml-1 rounded-sm`,
          style: { verticalAlign: "baseline", background: "transparent" },
        }
      case "dot":
        return {
          className: `inline-block w-2 h-2 ${baseClasses} ml-1 rounded-full`,
          style: { verticalAlign: "middle" },
        }
      default:
        return {
          className: `inline-block w-0.5 h-[1em] ${baseClasses} ml-1 rounded-sm`,
          style: { verticalAlign: "baseline" },
        }
    }
  }

  const getGlowAnimation = () => {
    switch (cursorStyle) {
      case "block":
        return {
          opacity: [1, 0],
          boxShadow: [
            "0 0 20px rgba(13, 115, 119, 1), 0 0 40px rgba(13, 115, 119, 0.8), 0 0 60px rgba(50, 224, 196, 0.6), 0 0 80px rgba(50, 224, 196, 0.4)",
            "0 0 10px rgba(13, 115, 119, 0.6), 0 0 20px rgba(13, 115, 119, 0.4), 0 0 30px rgba(50, 224, 196, 0.3), 0 0 40px rgba(50, 224, 196, 0.2)",
          ],
        }
      case "underline":
        return {
          opacity: [1, 0],
          boxShadow: [
            "0 0 15px rgba(13, 115, 119, 1), 0 0 30px rgba(13, 115, 119, 0.8), 0 0 45px rgba(50, 224, 196, 0.6)",
            "0 0 8px rgba(13, 115, 119, 0.6), 0 0 16px rgba(13, 115, 119, 0.4), 0 0 24px rgba(50, 224, 196, 0.3)",
          ],
        }
      case "box":
        return {
          opacity: [1, 0],
          borderColor: ["rgba(13, 115, 119, 1)", "rgba(13, 115, 119, 0.4)"],
          boxShadow: [
            "0 0 15px rgba(13, 115, 119, 0.9), 0 0 30px rgba(13, 115, 119, 0.7), 0 0 45px rgba(50, 224, 196, 0.5)",
            "0 0 8px rgba(13, 115, 119, 0.5), 0 0 16px rgba(13, 115, 119, 0.3), 0 0 24px rgba(50, 224, 196, 0.2)",
          ],
        }
      case "dot":
        return {
          opacity: [1, 0],
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 12px rgba(13, 115, 119, 1), 0 0 24px rgba(13, 115, 119, 0.8), 0 0 36px rgba(50, 224, 196, 0.6)",
            "0 0 6px rgba(13, 115, 119, 0.6), 0 0 12px rgba(13, 115, 119, 0.4), 0 0 18px rgba(50, 224, 196, 0.3)",
          ],
        }
      default: // line cursor
        return {
          opacity: [1, 0],
          boxShadow: [
            "0 0 15px rgba(13, 115, 119, 1), 0 0 30px rgba(13, 115, 119, 0.9), 0 0 45px rgba(50, 224, 196, 0.7), 0 0 60px rgba(50, 224, 196, 0.5)",
            "0 0 8px rgba(13, 115, 119, 0.6), 0 0 16px rgba(13, 115, 119, 0.4), 0 0 24px rgba(50, 224, 196, 0.3), 0 0 32px rgba(50, 224, 196, 0.2)",
          ],
        }
    }
  }

  const cursorConfig = getCursorStyles()

  return (
    <span className={`${className} whitespace-nowrap`}>
      {displayText}
      <motion.span
        className={cursorConfig.className}
        style={cursorConfig.style}
        animate={getGlowAnimation()}
        transition={{
          duration: 0.8,
          repeat: currentIndex < text.length ? Number.POSITIVE_INFINITY : 3,
          ease: "easeInOut",
        }}
      />
    </span>
  )
}
