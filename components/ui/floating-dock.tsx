"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { IconLayoutNavbarCollapse } from "@tabler/icons-react"
import { AnimatePresence, type MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  desktopClassName?: string
  mobileClassName?: string
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  )
}

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  className?: string
}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={cn("fixed bottom-4 right-4 z-50 block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  scale: 0.8,
                  transition: {
                    delay: idx * 0.03,
                    duration: 0.15,
                  },
                }}
                transition={{
                  delay: (items.length - 1 - idx) * 0.03,
                  duration: 0.2,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-black/90 backdrop-blur-sm border border-[#0D7377]/40 hover:border-[#32E0C4]/60 hover:shadow-lg hover:shadow-[#0D7377]/30 transition-all duration-300"
                  onClick={() => setOpen(false)}
                >
                  <div className="h-5 w-5 text-[#32E0C4]">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-black/90 backdrop-blur-sm border border-[#0D7377]/40 hover:border-[#32E0C4]/60 hover:shadow-lg hover:shadow-[#0D7377]/30 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-[#32E0C4]" />
      </motion.button>
    </div>
  )
}

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  className?: string
}) => {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-black/90 backdrop-blur-md border border-[#0D7377]/40 px-6 pb-3 md:flex shadow-2xl shadow-[#0D7377]/20",
        className,
      )}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  )
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue
  title: string
  icon: React.ReactNode
  href: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  })
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  })

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  })
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  })

  const [hovered, setHovered] = useState(false)

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-[#0D7377]/30 hover:bg-[#0D7377]/50 border border-[#0D7377]/40 hover:border-[#32E0C4]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#0D7377]/40"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.8 }}
              animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
              exit={{ opacity: 0, y: 5, x: "-50%", scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute -top-10 left-1/2 w-fit rounded-lg border border-[#0D7377]/40 bg-black/95 backdrop-blur-sm px-3 py-1.5 text-xs font-medium whitespace-pre text-white shadow-xl shadow-[#0D7377]/30"
            >
              {title}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/95"></div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-[#32E0C4]"
          animate={{ rotate: hovered ? 5 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  )
}
