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
              title="BCN-Bain Wars Case Study"
              description="Optimized COGS across 3 Indian cities by uncovering supply chain efficiencies post-AutoAI acquisition."
              image="/images/Bain_Logo.png"
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
              title="Sesame International Power BI Project"
              description="Real-time analytics platform for tracking sesame international engagement and performance metrics"
              image="\images\Sesame.png"
              tags={["Data Analytics", "Growth Metrics", "Performance Tracking"]}
              previewUrl="https://github.com/MpainGutsy/Celebal_Summer_Internship_submission/tree/main/Sesame%20International%20Capstone%20Project"
              showPreview={true}
            />
            <ProjectCard
              title="Employee Database Management Project"
              description="A comprehensive Power BI dashboard designed to provide insightful analytics on employee productivity, project allocation, and manager performance across departments"
              image="\images\Employee.png"
              tags={["Market Research","Employee Analytics","Project Allocation","Manager Performance"]}
              previewUrl="https://github.com/MpainGutsy/PowerBi-Projects/tree/main/Employee%20Database%20Management%20Projecthttps://example.com/market-analysis.p"
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
              title="Matiks Product Teardown"
              description="A detailed analysis of the Matiks product, including its features, user experience, and market positioning."
              image="\images\Matiks.png"
              tags={["Product Teardown", "Market Research", "Competitive Analysis"]}
              showPreview={true}
              demoUrl="public\images\Matiks.png"
              repoUrl="https://github.com/example/fintech-dashboardhttps://github.com/MpainGutsy/Case-Studies/blob/main/Matiks_product_teardown1.pdf"
            />
            <ProjectCard
              title="Spotify Product Teardown"
              description="Spotify is a music streaming platform that allows users to listen to millions of songs for free. It is one of the most popular music streaming platforms in the world, and it has a large user base."
              image="\images\Spotify.jpg"
              tags={["Product Teardown", "Market Research", "Competitive Analysis"]}
              demoUrl="public\images\Spotify.jpg"
              repoUrl="https://github.com/MpainGutsy/Case-Studies/blob/main/Spotify%20Product%20Teardown.pdf"
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
              title="Portfolio Website"
              description="Portfolio Website"
              image="/placeholder.svg?height=200&width=300"
              tags={["Vercel","Next.js","Tailwind CSS","Shadcn UI"]}
              demoUrl=""
              repoUrl="https://github.com/MpainGutsy/portfolio-website"
            />
            <ProjectCard
              title="CaseHats-AI"
              description="An AI Case Scenarios and Interviews preparation platform"
              image="/placeholder.svg?height=200&width=300"
              tags={["Leadership", "Training", "Community Service"]}
              demoUrl=""
              repoUrl=""
            />
          </div>
        </div>
      ),
    },
  ]

  console.log(tabs)

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  )
}
