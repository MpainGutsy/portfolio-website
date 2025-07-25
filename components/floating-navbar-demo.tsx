"use client"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react"

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-zinc-400" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-zinc-400" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-zinc-400" />,
    },
  ]

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  )
}

const DummyContent = () => {
  return (
    <div className="grid grid-cols-1 h-[40rem] w-full bg-black relative border border-zinc-800 rounded-md">
      <p className="text-white text-center text-4xl mt-40 font-bold">Scroll back up to reveal Navbar</p>
      <div className="inset-0 absolute bg-grid-white/[0.05]" />
    </div>
  )
}
