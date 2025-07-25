"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Eye, X, FileText, Award, GraduationCap, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Document {
  id: string
  title: string
  category: "resume" | "certificate" | "transcript" | "project" | "recommendation"
  description: string
  imageUrl: string
  downloadUrl: string
  previewUrl?: string
  date: string
  issuer?: string
}

const documents: Document[] = [
  {
    id: "resume",
    title: "Professional Resume",
    category: "resume",
    description: "Latest version of my professional resume highlighting experience and skills",
    imageUrl: "/placeholder.svg?height=400&width=300",
    downloadUrl: "/documents/raj-awasthi-resume.pdf",
    previewUrl: "/documents/raj-awasthi-resume.pdf",
    date: "2024",
    issuer: "Personal",
  },
  {
    id: "varidus-certificate",
    title: "Varidus Capital Internship Certificate",
    category: "certificate",
    description: "Certificate of completion for Startup Advisor Internship",
    imageUrl: "/placeholder.svg?height=400&width=300",
    downloadUrl: "/documents/varidus-certificate.pdf",
    date: "August 2024",
    issuer: "Varidus Capital",
  },
  {
    id: "bit-transcript",
    title: "Academic Transcript",
    category: "transcript",
    description: "Official transcript from BIT Mesra",
    imageUrl: "/placeholder.svg?height=400&width=300",
    downloadUrl: "/documents/bit-transcript.pdf",
    date: "2024",
    issuer: "BIT Mesra",
  },
  {
    id: "financial-modeling-cert",
    title: "Financial Modeling Certification",
    category: "certificate",
    description: "Advanced Financial Modeling and Valuation certification",
    imageUrl: "/placeholder.svg?height=400&width=300",
    downloadUrl: "/documents/financial-modeling-cert.pdf",
    date: "2024",
    issuer: "Financial Edge",
  },
]

const categoryIcons = {
  resume: FileText,
  certificate: Award,
  transcript: GraduationCap,
  project: Briefcase,
  recommendation: FileText,
}

const categoryColors = {
  resume: "from-blue-500 to-cyan-500",
  certificate: "from-yellow-500 to-orange-500",
  transcript: "from-green-500 to-emerald-500",
  project: "from-purple-500 to-pink-500",
  recommendation: "from-red-500 to-rose-500",
}

export function DocumentGallery() {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const filteredDocs = filter === "all" ? documents : documents.filter((doc) => doc.category === filter)

  const categories = ["all", ...Array.from(new Set(documents.map((doc) => doc.category)))]

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(category)}
            className={`capitalize ${
              filter === category
                ? "bg-gradient-to-r from-[#0D7377] to-[#32E0C4] text-white border-0"
                : "border-zinc-700 text-zinc-400 hover:text-white hover:border-[#0D7377]/50 bg-transparent"
            }`}
          >
            {category === "all" ? "All Documents" : category.replace("-", " ")}
          </Button>
        ))}
      </div>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredDocs.map((doc) => {
            const IconComponent = categoryIcons[doc.category]
            return (
              <motion.div
                key={doc.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:border-[#0D7377]/50 hover:shadow-xl hover:shadow-[#0D7377]/20">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0D7377]/10 to-[#32E0C4]/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                  <div className="relative">
                    {/* Document Preview Image */}
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={doc.imageUrl || "/placeholder.svg"}
                        alt={doc.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Overlay Actions */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          {doc.previewUrl && (
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => setSelectedDoc(doc)}
                              className="bg-black/70 hover:bg-black/90 text-white border-0"
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              Preview
                            </Button>
                          )}
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-[#0D7377] to-[#32E0C4] hover:from-[#32E0C4] hover:to-[#0D7377] border-0"
                            asChild
                          >
                            <a href={doc.downloadUrl} download target="_blank" rel="noopener noreferrer">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Document Info */}
                    <div className="p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-r ${categoryColors[doc.category]} flex items-center justify-center`}
                          >
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <Badge variant="secondary" className="bg-zinc-700/50 text-zinc-300 text-xs">
                            {doc.category}
                          </Badge>
                        </div>
                        <div className="text-xs text-zinc-500">{doc.date}</div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-white mb-1">{doc.title}</h3>
                        <p className="text-sm text-zinc-400 line-clamp-2">{doc.description}</p>
                        {doc.issuer && <p className="text-xs text-zinc-500 mt-1">Issued by: {doc.issuer}</p>}
                      </div>

                      <div className="flex gap-2 pt-2">
                        {doc.previewUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedDoc(doc)}
                            className="flex-1 border-zinc-700 text-zinc-400 hover:text-white hover:border-[#0D7377]/50 bg-transparent text-xs"
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            Preview
                          </Button>
                        )}
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-[#0D7377] to-[#32E0C4] hover:from-[#32E0C4] hover:to-[#0D7377] border-0 text-xs"
                          asChild
                        >
                          <a href={doc.downloadUrl} download target="_blank" rel="noopener noreferrer">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Document Preview Modal */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDoc(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-zinc-900 rounded-xl border border-zinc-700 max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-zinc-700">
                <div>
                  <h3 className="text-lg font-semibold text-white">{selectedDoc.title}</h3>
                  <p className="text-sm text-zinc-400">
                    {selectedDoc.issuer} • {selectedDoc.date}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#0D7377] to-[#32E0C4] hover:from-[#32E0C4] hover:to-[#0D7377] border-0"
                    asChild
                  >
                    <a href={selectedDoc.downloadUrl} download target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setSelectedDoc(null)}
                    className="text-zinc-400 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Document Preview */}
              <div className="p-4">
                {selectedDoc.previewUrl ? (
                  <iframe
                    src={selectedDoc.previewUrl}
                    className="w-full h-[70vh] rounded-lg border border-zinc-700"
                    title={selectedDoc.title}
                  />
                ) : (
                  <div className="flex items-center justify-center h-[70vh] bg-zinc-800 rounded-lg">
                    <div className="text-center">
                      <FileText className="h-16 w-16 text-zinc-500 mx-auto mb-4" />
                      <p className="text-zinc-400">Preview not available</p>
                      <Button
                        className="mt-4 bg-gradient-to-r from-[#0D7377] to-[#32E0C4] hover:from-[#32E0C4] hover:to-[#0D7377] border-0"
                        asChild
                      >
                        <a href={selectedDoc.downloadUrl} download target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-2" />
                          Download Document
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
