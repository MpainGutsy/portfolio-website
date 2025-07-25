"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Button as StatefulButton } from "@/components/ui/stateful-button"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { FlipWords } from "@/components/ui/flip-words"
import { Timeline } from "@/components/timeline"
import { FloatingNav } from "@/components/ui/floating-navbar"
import TabsDemo from "@/components/tabs-demo"
import { IconHome, IconBriefcase, IconFileText } from "@tabler/icons-react"

export default function Portfolio() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-zinc-400" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconBriefcase className="h-4 w-4 text-zinc-400" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <IconFileText className="h-4 w-4 text-zinc-400" />,
    },
  ]

  const flipWords = ["Raj Awasthi.", "Financial Analyst.", "Strategy Consultant.", "Product Enthusiast."]
  const contactFlipWords = ["remarkable.", "valuable.", "unique."]

  // Handle resume download
  const handleResumeDownload = () => {
    return new Promise((resolve) => {
      // Simulate download process
      setTimeout(() => {
        // Create a link and trigger download
        const link = document.createElement("a")
        link.href = "/documents/raj-awasthi-resume.pdf"
        link.download = "raj-awasthi-resume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        resolve(undefined)
      }, 2000)
    })
  }

  return (
    <div className="min-h-screen grid-dot-background text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />

      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0D7377] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#32E0C4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[#0D7377] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-center text-center">
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block mb-4">Hi, I&apos;m</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0D7377] to-[#32E0C4]">
                <FlipWords words={flipWords} duration={2500} className="text-5xl md:text-7xl font-bold" />
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px] mx-auto">
              Transforming complex financial landscapes into strategic opportunities. I craft data-driven narratives
              that bridge the gap between numbers and innovation, turning market insights into compelling investment
              stories and product visions.
            </p>

            {/* Resume Button - Centered */}
            <div className="flex justify-center pt-6">
              <StatefulButton
                onClick={handleResumeDownload}
                loadingContent={<Download className="w-4 h-4" />}
                className="bg-gradient-to-r from-[#0D7377] to-[#32E0C4] hover:from-[#32E0C4] hover:to-[#0D7377] hover:ring-[#32E0C4]/50 shadow-lg shadow-[#0D7377]/25 hover:shadow-[#32E0C4]/40 hover:shadow-xl transition-all duration-300 min-w-[160px] px-6 py-3 text-base font-semibold"
              >
                My Resume
              </StatefulButton>
            </div>

            <div className="flex gap-4 pt-4 justify-center">
              <Link href="https://github.com/MpainGutsy" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/30 hover:bg-black/50 text-zinc-400 hover:text-white hover:shadow-lg hover:shadow-[#0D7377]/20 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/raj2203/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/30 hover:bg-black/50 text-zinc-400 hover:text-white hover:shadow-lg hover:shadow-[#0D7377]/20 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="tel:+917874388753">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/30 hover:bg-black/50 text-zinc-400 hover:text-white hover:shadow-lg hover:shadow-[#0D7377]/20 transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Phone</span>
                </Button>
              </Link>
              <Link href="mailto:rajawasthi2203@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/30 hover:bg-black/50 text-zinc-400 hover:text-white hover:shadow-lg hover:shadow-[#0D7377]/20 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#0D7377] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#32E0C4] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="flex justify-center mt-12">
            <div className="max-w-4xl">
              <GlassmorphicCard>
                <div className="text-center">
                  <p className="text-lg text-zinc-300 leading-relaxed">
                    I&apos;m a finance-driven product strategist passionate about turning complex data into business
                    clarity. I operate where analytics meets strategy — shaping product decisions, uncovering growth
                    opportunities, and driving market-fit through insights. I love building scalable, data-backed
                    solutions that not only solve problems but also create measurable value. Whether it&apos;s
                    optimizing a business model or steering product direction, I&apos;m focused on impact, execution,
                    and unlocking the next strategic advantage.
                  </p>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-[#32E0C4] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#0D7377] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Explore my work across different domains" />

          <div className="mt-12">
            <TabsDemo />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#0D7377] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#32E0C4] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Experience" subtitle="Professional journey" />

          <div className="mt-12">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#32E0C4] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#0D7377] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10 text-center my-[0]">
          {/* Status and Location */}
          <div className="flex justify-between items-start mb-16">
            <div className="flex items-center gap-2">
              
              
            </div>
            
          </div>

          {/* Main Heading */}
          <div className="max-w-5xl mx-auto mb-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Turn your vision into
              <br />
              something{" "}
              <FlipWords
                words={contactFlipWords}
                duration={2500}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
              />
            </h2>
          </div>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Let&apos;s discuss your business challenges and growth opportunities. Whether you need financial analysis,
              product strategy, or market insights, I&apos;m here to help transform your vision into measurable results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="tel:+917874388753">
              <Button
                variant="outline"
                size="lg"
                className="group relative px-8 py-4 text-base font-medium border-2 border-zinc-600 text-white hover:border-[#32E0C4] hover:text-[#32E0C4] transition-all duration-300 bg-transparent hover:bg-transparent min-w-[200px]"
              >
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-[#32E0C4] rounded-md transition-all duration-300"></span>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-zinc-600 group-hover:border-[#32E0C4] transition-all duration-300"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-zinc-600 group-hover:border-[#32E0C4] transition-all duration-300"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-zinc-600 group-hover:border-[#32E0C4] transition-all duration-300"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-zinc-600 group-hover:border-[#32E0C4] transition-all duration-300"></span>
                SCHEDULE A CALL
              </Button>
            </Link>

            <Link href="mailto:rajawasthi2203@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="group relative px-8 py-4 text-base font-medium border-2 border-zinc-600 text-white hover:border-[#32E0C4] hover:text-[#32E0C4] transition-all duration-300 bg-transparent hover:bg-transparent min-w-[200px]"
              >
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-[#32E0C4] rounded-md transition-all duration-300"></span>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-zinc-600 group-hover:border-[#32E0C4] transition-all duration-300"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-zinc-600 group-hover:border-[#32E0C4] transition-all duration-300"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-zinc-600 group-hover:border-[#32E0C4] transition-all duration-300"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-zinc-600 group-hover:border-[#32E0C4] transition-all duration-300"></span>
                SEND ME A MESSAGE
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mt-12">
            <Link href="https://github.com/MpainGutsy" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/30 hover:bg-black/50 text-zinc-400 hover:text-[#32E0C4] hover:shadow-lg hover:shadow-[#32E0C4]/20 transition-all duration-300"
              >
                
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/raj2203/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/30 hover:bg-black/50 text-zinc-400 hover:text-[#32E0C4] hover:shadow-lg hover:shadow-[#32E0C4]/20 transition-all duration-300"
              >
                
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0D7377] to-[#32E0C4]">Raj</span>
              <span className="text-white">Awasthi</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">© {new Date().getFullYear()} Raj Awasthi. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/MpainGutsy" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/30 hover:bg-black/50 text-zinc-400 hover:text-white hover:shadow-lg hover:shadow-[#0D7377]/20 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/raj2203/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/30 hover:bg-black/50 text-zinc-400 hover:text-white hover:shadow-lg hover:shadow-[#0D7377]/20 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="tel:+917874388753">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/30 hover:bg-black/50 text-zinc-400 hover:text-white hover:shadow-lg hover:shadow-[#0D7377]/20 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Button>
            </Link>
            <Link href="mailto:rajawasthi2203@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/30 hover:bg-black/50 text-zinc-400 hover:text-white hover:shadow-lg hover:shadow-[#0D7377]/20 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
