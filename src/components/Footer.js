"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Youtube } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'
import { Button } from "@/components/ui/button"

const socialLinks = [
  { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, url: 'https://www.instagram.com/voluntred.mx/' },
  { name: 'YouTube', icon: <Youtube className="w-6 h-6" />, url: 'https://www.youtube.com/@VoluntRED' },
  { name: 'TikTok', icon: <FaTiktok className="w-6 h-6" />, url: 'https://www.tiktok.com/@voluntred' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 text-transparent bg-clip-text">
            Volunt
          </span>
          <span className="text-red-500">RED</span>
        </motion.h2>

        <div className="flex space-x-4 mb-8">
          {socialLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="bg-gray-800/50 hover:bg-gray-700/50 text-white border border-blue-500/20"
                asChild
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visita nuestro perfil de ${link.name}`}
                >
                  {link.icon}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-sm sm:text-base text-center text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          © {new Date().getFullYear()} VoluntRED. Todos los derechos reservados.
        </motion.p>
      </div>
    </footer>
  )
}