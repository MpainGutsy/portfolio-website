"use client"

import { motion } from "framer-motion"
import { Download, ExternalLink, FileText, Award, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  {
    title: "Resume",
    description: "Download my latest resume",
    icon: FileText,
    url: "/documents/raj-awasthi-resume.pdf",
    type: "download" as const,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Certificates",
    description: "View my professional certificates",
    icon: Award,
    url: "#documents",
    type: "link" as const,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Transcript",
    description: "Academic records from BIT Mesra",
    icon: GraduationCap,
    url: "/documents/transcript.pdf",
    type: "download" as const,
    color: "from-green-500 to-emerald-500",
  },
]

export function QuickLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {quickLinks.map((link, index) => {
        const IconComponent = link.icon
        return (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-[#0D7377]/50 hover:shadow-xl hover:shadow-[#0D7377]/20 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0D7377]/10 to-[#32E0C4]/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center mb-4`}
                >
                  <IconComponent className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">{link.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{link.description}</p>

                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-[#0D7377] to-[#32E0C4] hover:from-[#32E0C4] hover:to-[#0D7377] border-0"
                  asChild
                >
                  {link.type === "download" ? (
                    <a href={link.url} download target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  ) : (
                    <a href={link.url}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </a>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
