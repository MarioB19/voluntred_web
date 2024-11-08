"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'
import FormularioContacto from './FormularioContacto'

export default function Contacto() {
  return (
    <div id="contacto" className="w-full bg-gradient-to-b from-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8 font-['Poppins']">
      <div className="max-w-7xl mx-auto">
      <motion.h2 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-green-400 to-red-500 text-transparent bg-clip-text">
            Contacto
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <Card className="bg-gray-800/30 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white border-none relative z-10"
                  >
                    <Mail className="w-10 h-10" />
                  </Button>
                </div>
                <motion.p 
                  className="text-2xl sm:text-3xl text-gray-200 mt-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  voluntred@gmail.com
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <FormularioContacto />
          </motion.div>
        </div>
      </div>
    </div>
  )
}