"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ExpandableCardDemo from "@/components/expandable-card-demo-standard"

const projects = [
  {
    title: "Automotive Plant Cost Benchmarking",
    description:
      "Delivered financial insights on economies of scale, supporting a 35% margin uplift in 5 years. Modeled procurement synergies post acquisitions, unlocking 10% raw material cost savings.",
    tags: ["SQL", "Python", "Power BI", "Excel", "Financial Modeling"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Telemedicine 2.0 Market Strategy",
    description:
      "Analyzed India's $11.82B telemedicine market, forecasted 21.2% CAGR and proposed hybrid revenue model. Built 5-year financial projections achieving profit margin growth from 25% to 35.7%.",
    tags: ["SQL", "Python", "Tableau", "Figma", "Market Analysis"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Startup Investment Pipeline",
    description:
      "Managed a robust pipeline of 60+ investor leads across 10+ demographics, securing 28% engagement via compelling presentation pitches at Varidus Capital.",
    tags: ["Financial Modeling", "Market Research", "Presentation", "Strategy"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Risk Management Strategy",
    description:
      "Developed comprehensive risk management strategies for long-term investments in startups, conducting in-depth market analysis and financial trend evaluations.",
    tags: ["Risk Analysis", "Financial Planning", "Market Research", "Strategy"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: false,
  },
]

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showExpandable, setShowExpandable] = useState(false)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const handleCardClick = () => {
    setShowExpandable(true)
  }

  if (showExpandable) {
    return (
      <div className="relative">
        <Button
          onClick={() => setShowExpandable(false)}
          className="mb-4 bg-gradient-to-r from-[#0D7377] to-[#32E0C4] hover:from-[#32E0C4] hover:to-[#0D7377]"
        >
          ← Back to Projects
        </Button>
        <ExpandableCardDemo />
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevProject}
            className="rounded-full border-zinc-700 text-zinc-400 hover:text-white hover:border-[#0D7377]/50 hover:bg-[#0D7377]/20 bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextProject}
            className="rounded-full border-zinc-700 text-zinc-400 hover:text-white hover:border-[#0D7377]/50 hover:bg-[#0D7377]/20 bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#32E0C4] w-8" : "bg-zinc-600"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <div
              className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:border-[#0D7377]/50 hover:shadow-xl hover:shadow-[#0D7377]/20 cursor-pointer group"
              onClick={handleCardClick}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0D7377]/10 to-[#32E0C4]/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div>
                      {projects[currentIndex].featured && (
                        <Badge className="mb-4 bg-gradient-to-r from-[#0D7377] to-[#32E0C4] text-white border-0">
                          Featured Project
                        </Badge>
                      )}
                      <h3 className="text-2xl font-bold text-white mb-4">{projects[currentIndex].title}</h3>
                      <p className="text-zinc-400 text-lg leading-relaxed">{projects[currentIndex].description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {projects[currentIndex].tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-zinc-700/50 hover:bg-zinc-700 text-zinc-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-zinc-700 text-zinc-400 hover:text-white hover:border-[#0D7377]/50 hover:bg-[#0D7377]/20 bg-transparent"
                        asChild
                      >
                        <a href={projects[currentIndex].repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-[#0D7377] to-[#32E0C4] hover:from-[#32E0C4] hover:to-[#0D7377] border-0 shadow-lg shadow-[#0D7377]/25 hover:shadow-[#32E0C4]/40 transition-all duration-300"
                        asChild
                      >
                        <a href={projects[currentIndex].demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700/50">
                      <img
                        src={projects[currentIndex].image || "/placeholder.svg"}
                        alt={projects[currentIndex].title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-zinc-400 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    Click to explore more projects →
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
