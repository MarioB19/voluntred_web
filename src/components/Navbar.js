"use client"

import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const menuItems = [
  { text: 'Inicio', to: 'inicio' },
  { text: 'Beneficios', to: 'beneficios' },
  { text: 'Preguntas Frecuentes', to: 'preguntas-frecuentes' },
  { text: 'Impacto', to: 'impacto' },
  { text: 'Aliados', to: 'aliados' },
  { text: 'Nuestro Equipo', to: 'equipo' },
  { text: 'Involúcrate', to: 'involucrate' },
  { text: 'Contáctanos', to: 'contacto' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset
      for (const item of menuItems) {
        const element = document.getElementById(item.to)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(item.to)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black border-none"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.h1 
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Volunt</span>
            <span className="text-[#FF0000]">RED</span>
          </motion.h1>

          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <motion.div
                key={item.text}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={1000}
                  spy={true}
                  activeClass="text-[#6BB5FF]"
                  className={`cursor-pointer transition-colors ${
                    activeSection === item.to ? 'text-[#6BB5FF]' : 'text-white hover:text-[#6BB5FF]'
                  }`}
                >
                  {item.text}
                </ScrollLink>
              </motion.div>
            ))}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                {menuItems.map((item) => (
                  <ScrollLink
                    key={item.text}
                    to={item.to}
                    smooth={true}
                    duration={1000}
                    className="text-white hover:text-[#6BB5FF] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.text}
                  </ScrollLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}