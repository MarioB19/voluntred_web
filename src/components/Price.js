"use client"

import React from 'react'
import { motion } from 'framer-motion'
import PriceCard from './PriceCard'
import { planes } from "../data/Precios"

const Price = () => {
  return (
    <section id="precios" className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-6 sm:p-10 pt-20 sm:pt-28 font-['Poppins']">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="bg-gradient-to-r from-blue-400 via-green-400 to-red-500 text-transparent bg-clip-text inline-block"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          >
            Nuestros Planes
          </motion.span>
        </motion.h2>

        <motion.p 
          className="text-2xl sm:text-3xl text-center text-gray-300 mb-20 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          En VoluntRED, ofrecemos opciones para todos los actores del cambio social. 
          Desde voluntarios individuales hasta grandes organizaciones, tenemos un plan que se adapta a tus necesidades.
        </motion.p>

        <motion.div 
          className="flex flex-col items-center space-y-10"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            {planes.slice(0, 3).map((plan, index) => (
              <motion.div
                key={plan.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0 }
                }}
                className="w-full"
              >
                <PriceCard {...plan} />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-10 w-full">
            {planes.slice(3).map((plan, index) => (
              <motion.div
                key={plan.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0 }
                }}
                className="w-full md:w-auto"
              >
                <PriceCard {...plan} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Price