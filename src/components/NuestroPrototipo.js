"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Building2, Handshake, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function NuestroPrototipo() {
  const steps = [
    { icon: <Building2 className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500" />, text: "ONG publica evento" },
    { icon: <Users className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" />, text: "Voluntarios se inscriben" },
    { icon: <Handshake className="w-12 h-12 sm:w-16 sm:h-16 text-red-500" />, text: "Colaboración exitosa" },
  ]

  return (
    <section id ="prototipo" className="bg-gradient-to-b from-gray-900 to-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-['Poppins']">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-green-400 to-red-500 text-transparent bg-clip-text">
            Nuestro Prototipo
          </span>
        </motion.h2>

        <motion.p 
          className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Este prototipo conceptual ilustra el flujo de interacción entre ONGs y voluntarios en nuestra plataforma.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center w-full md:w-72 h-64 sm:h-72"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {step.icon}
                <p className="mt-4 sm:mt-6 text-center text-white font-semibold text-lg sm:text-xl">{step.text}</p>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:block"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 text-gray-500" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.p 
          className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl mt-12 sm:mt-16 text-center mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Este flujo simplificado representa la esencia de cómo VoluntRED facilita la conexión entre organizaciones y voluntarios, 
          promoviendo una colaboración efectiva y un impacto social positivo.
        </motion.p>

        <motion.div
          className="flex justify-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button
            className="bg-gradient-to-r from-blue-500 via-green-500 to-red-500 text-white font-extrabold text-xl sm:text-2xl md:text-3xl hover:opacity-90 transition-opacity rounded-full px-8 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            onClick={() => window.open("https://voluntred-prototype.vercel.app/", "_blank")}
          >
            Ver Prototipo
          </Button>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p className="text-gray-300 text-lg sm:text-xl mb-4">
            Tu opinión es importante para nosotros
          </p>
          <div className="flex items-center justify-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
            <MessageSquare className="w-6 h-6 mr-2" />
            <span className="font-medium">Déjanos tu feedback en el formulario de abajo</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}