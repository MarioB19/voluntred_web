"use client"

import React, { useState, useEffect } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
  { text: 'Impacto', to: 'impacto' },
  { text: 'Precios', to: 'precios' },
  { text: 'Preguntas Frecuentes', to: 'preguntas-frecuentes' },
  { text: 'Contacto', to: 'contacto' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const observers = []
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    menuItems.forEach(item => {
      const element = document.getElementById(item.to)
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions)
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart'
    })
  }

  const NavLink = ({ item, isMobile = false }) => (
    <ScrollLink
      to={item.to}
      smooth={true}
      duration={800}
      spy={true}
      offset={-80}
      activeClass="active"
      className={`
        cursor-pointer 
        transition-all 
        duration-300 
        text-lg 
        font-semibold 
        relative 
        group
        ${isMobile ? 'text-xl' : ''}
        ${activeSection === item.to 
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-red-500' 
          : 'text-gray-400 hover:text-gray-200'
        }
      `}
      onClick={() => isMobile && setIsOpen(false)}
    >
      {item.text}
      <motion.div
        className={`
          absolute 
          -bottom-1 
          left-0 
          w-full 
          h-0.5 
          bg-gradient-to-r 
          from-blue-400 
          via-green-400 
          to-red-500
          ${activeSection === item.to ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
        `}
        initial={false}
        animate={{
          opacity: activeSection === item.to ? 1 : 0,
          transition: { duration: 0.3 }
        }}
        layoutId="activeSection"
      />
    </ScrollLink>
  )

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 to-black border-b border-blue-500/20 backdrop-blur-sm"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.h1 
            className="text-3xl font-extrabold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
          >
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-red-500 text-transparent bg-clip-text">Volunt</span>
            <span className="text-red-500">RED</span>
          </motion.h1>

          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <motion.div
                key={item.text}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink item={item} />
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-b from-gray-900 to-black border-l border-blue-500/20">
              <SheetHeader>
                <SheetTitle className="text-3xl font-extrabold">
                  <span className="bg-gradient-to-r from-blue-400 via-green-400 to-red-500 text-transparent bg-clip-text">Volunt</span>
                  <span className="text-red-500">RED</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-6 mt-8">
                <AnimatePresence>
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <NavLink item={item} isMobile={true} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}