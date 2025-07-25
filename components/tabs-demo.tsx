"use client"

import { Tabs } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"

export default function TabsDemo() {
  const tabs = [
    {
      title: "Business Case Studies",
      value: "business",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 bg-gradient-to-br from-[#0D7377]/80 to-[#32E0C4]/80 backdrop-blur-sm border border-zinc-700/50 shadow-2xl shadow-[#0D7377]/30">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Business Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Ditto Insurance Case Study"
              description="Comprehensive analysis of Ditto Insurance's digital transformation strategy, examining their innovative approach to simplifying insurance processes through technology. This case study explores market positioning, customer acquisition strategies, and the impact of their digital-first model on traditional insurance paradigms."
              image="/images/ditto-case-study.png"
              tags={["Insurance", "Digital Strategy", "Market Analysis", "Business Model"]}
              previewUrl="https://github.com/MpainGutsy/Case-Studies/blob/main/Ditto_Insurance_CaseStudy.pdf"
              showPreview={true}
            />
            <ProjectCard
              title="Investment Portfolio Analysis"
              description="Comprehensive analysis of investment strategies and risk management for high-net-worth individuals"
              image="/placeholder.svg?height=200&width=300"
              tags={["Financial Analysis", "Risk Management", "Portfolio Optimization"]}
              previewUrl="https://github.com/MpainGutsy/Case-Studies/blob/main/Bain_Wars_Submission.pdf"
              showPreview={true}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Analytics Reports",
      value: "analytics",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 bg-gradient-to-br from-[#0D7377]/60 to-[#32E0C4]/60 backdrop-blur-sm border border-zinc-700/50 shadow-xl shadow-[#0D7377]/25">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Analytics Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Investor Relations Dashboard"
              description="Real-time analytics platform for tracking investor engagement and portfolio performance metrics"
              image="/placeholder.svg?height=200&width=300"
              tags={["Data Analytics", "Investor Relations", "Performance Tracking"]}
              previewUrl="https://example.com/investor-dashboard.pdf"
              showPreview={true}
            />
            <ProjectCard
              title="Market Positioning Analysis"
              description="Comprehensive market research and positioning strategy for financial services sector"
              image="/placeholder.svg?height=200&width=300"
              tags={["Market Research", "Positioning", "Competitive Intelligence"]}
              previewUrl="https://example.com/market-analysis.pdf"
              showPreview={true}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Product Teardowns",
      value: "teardowns",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 bg-gradient-to-br from-[#0D7377]/40 to-[#32E0C4]/40 backdrop-blur-sm border border-zinc-700/50 shadow-lg shadow-[#0D7377]/20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Product Teardowns</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="FinTech Dashboard Development"
              description="Modern financial dashboard with real-time data visualization and portfolio management features"
              image="/placeholder.svg?height=200&width=300"
              tags={["FinTech", "Dashboard", "Data Visualization"]}
              demoUrl="https://example.com/fintech-demo"
              repoUrl="https://github.com/example/fintech-dashboard"
            />
            <ProjectCard
              title="Analytics Platform"
              description="Comprehensive analytics platform for financial data processing and reporting"
              image="/placeholder.svg?height=200&width=300"
              tags={["Analytics", "Data Processing", "Reporting"]}
              demoUrl="https://example.com/analytics-demo"
              repoUrl="https://github.com/example/analytics-platform"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Product Prototypes",
      value: "prototypes",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 bg-gradient-to-br from-[#0D7377]/20 to-[#32E0C4]/20 backdrop-blur-sm border border-zinc-700/50 shadow-md shadow-[#0D7377]/15">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Product Prototypes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Dramatics Society Leadership"
              description="Led university dramatics society with 200+ members, organizing major cultural events and productions"
              image="/placeholder.svg?height=200&width=300"
              tags={["Leadership", "Event Management", "Team Building"]}
              demoUrl="https://example.com/dramatics-portfolio"
              repoUrl="https://github.com/example/dramatics-society"
            />
            <ProjectCard
              title="NCC Leadership Role"
              description="Served as senior cadet in National Cadet Corps, leading training programs and community service initiatives"
              image="/placeholder.svg?height=200&width=300"
              tags={["Leadership", "Training", "Community Service"]}
              demoUrl="https://example.com/ncc-portfolio"
              repoUrl="https://github.com/example/ncc-leadership"
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  )
}
