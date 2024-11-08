"use client"

import React from "react"
import { Card } from "@/components/ui/card"
import { motion, useAnimationControls } from "framer-motion"
import { Handshake } from 'lucide-react'

const items = [
  {
    icon: "/aliados/redODS.png",
    title: "Red Internacional de Promotores ODS MX",
    link: "https://promotoresods.org/",
  },
  {
    icon: "/aliados/globalShapers.png",
    title: "Hub GDL Global Shapers",
    link: "https://shapersgdl.framer.ai/",
  },

]

export default function Aliados() {
  const controls = useAnimationControls()
  const [width, setWidth] = React.useState(0)
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth)
    }
  }, [])

  React.useEffect(() => {
    if (width > 0) {
      controls.start({
        x: -width,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      })
    }
  }, [controls, width])

  const duplicatedItems = [...items, ...items, ...items]

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-black p-8 font-['Poppins']">
           <motion.h2 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-green-400 to-red-500 text-transparent bg-clip-text">
            Nuestros Aliados
          </span>
        </motion.h2>

      <div className="w-full max-w-6xl mx-auto overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex"
          animate={controls}
          style={{ width: `${duplicatedItems.length * 420}px` }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[400px] mx-2">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <Card className="relative overflow-hidden h-20 bg-gray-900/40 hover:bg-gray-900/60 border border-blue-500/20 rounded-2xl py-2 transition-all duration-300">
                    <div className="flex items-center gap-4 px-6 h-full">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden bg-white/5 p-1">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="text-lg sm:text-xl font-medium text-gray-100 truncate">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-400 truncate">
                          {new URL(item.link).hostname}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </a>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="flex items-center justify-center gap-4 text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto text-center mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Handshake className="w-8 h-8 text-blue-400" />
        <p>
          Colaboramos con organizaciones líderes para crear un impacto positivo en la sociedad
        </p>
      </motion.div>
    </div>
  )
}