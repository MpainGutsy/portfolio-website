"use client"

import { useState, useEffect } from "react"
import { Typewriter } from "@/components/typewriter"
import { FlipWords } from "@/components/ui/flip-words"

export function CoordinatedTextAnimation() {
  const [showTypewriter, setShowTypewriter] = useState(true)
  const [showFlipWords, setShowFlipWords] = useState(false)
  const [typewriterKey, setTypewriterKey] = useState(0)

  const flipWords = ["Raj Awasthi.", "Financial Analyst.", "Strategy Consultant.", "Product Manager."]

  useEffect(() => {
    // Start the cycle
    const startCycle = () => {
      setShowTypewriter(true)
      setShowFlipWords(false)

      // After typewriter completes (estimated time), show flip words
      setTimeout(() => {
        setShowTypewriter(false)
        setShowFlipWords(true)

        // After flip words complete one full cycle (4 words * 2.5s each), restart typewriter
        setTimeout(() => {
          setShowFlipWords(false)
          setTypewriterKey((prev) => prev + 1) // Force typewriter to restart
          startCycle()
        }, flipWords.length * 2500) // 4 words * 2.5 seconds each
      }, 2000) // Time for "I'm " to be typed (estimated)
    }

    startCycle()
  }, [])

  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0D7377] to-[#32E0C4]">
      {showTypewriter && (
        <Typewriter
          key={typewriterKey}
          text="I'm "
          delay={500}
          speed={80}
          cursorStyle="line"
          className="text-5xl md:text-7xl font-bold"
        />
      )}
      {showFlipWords && <FlipWords words={flipWords} duration={2500} className="text-5xl md:text-7xl font-bold" />}
    </span>
  )
}
