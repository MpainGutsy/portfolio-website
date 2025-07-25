"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  repoUrl?: string
  previewUrl?: string
  showPreview?: boolean
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl,
  previewUrl,
  showPreview = false,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>

        <p className="text-zinc-400 text-sm mb-4 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {showPreview ? (
          <div className="flex justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Preview
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        ) : (
          <div className="flex gap-2">
            {demoUrl && (
              <Button
                asChild
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0"
              >
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            )}

            {repoUrl && (
              <Button
                asChild
                variant="outline"
                className="flex-1 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white bg-transparent"
              >
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
