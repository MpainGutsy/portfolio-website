"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Celebal Technologies",
    period: "June 2025 – August 2025",
    description:
      "Performed EDA and debugged SQL in MySQL Workbench for accurate data extraction. Automated reporting and built dashboards in Power BI, Excel, and Tableau, reducing manual effort and enhancing accuracy. Delivered actionable insights through stakeholder-focused, customizable dashboards.",
  },
  {
    title: "Startup Advisor Intern",
    company: "Varidus Capital, Singapore",
    period: "March 2024 - August 2024",
    description:
      "Developed financial models and risk management strategies for long-term startup investments. Managed pipeline of 60+ investor leads across 10+ demographics with 28% engagement rate. Conducted in-depth market analysis and financial trend evaluations.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-[#0D7377]/50 hover:shadow-lg hover:shadow-[#0D7377]/20">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0D7377]/10 to-[#32E0C4]/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-[#0D7377] to-[#32E0C4] z-10 flex items-center justify-center shadow-lg shadow-[#0D7377]/30"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
