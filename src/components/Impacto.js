"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import ODSCard from './ODSCard'

// Importa los íconos que deseas de Lucide
import { User, Globe, DollarSign, Bird } from 'lucide-react'

import { categories, odsItems } from '../data/Impacto';

const Impacto = () => {
  return (
    <section id="impacto" className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-4 sm:p-8 pt-16 sm:pt-24 font-['Poppins']">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-green-400 to-red-500 text-transparent bg-clip-text">
            Impacto
          </span>
        </motion.h2>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Card className="bg-gray-800/90 border-2 border-blue-500/30 rounded-3xl overflow-hidden backdrop-blur-sm shadow-lg shadow-blue-500/20">
            <CardContent className="p-8 sm:p-10">
              <p className="text-gray-200 text-xl sm:text-2xl md:text-3xl leading-relaxed mb-8">
                En VoluntRED estamos dedicados a promover los Objetivos de Desarrollo Sostenible (ODS) mediante nuestro trabajo.
              </p>
              <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed">
                Conectamos a voluntarios con organizaciones sociales que se enfocan en causas alineadas con los 17 ODS. Clasificamos cada proyecto según el ODS al que contribuyen, permitiendo a nuestros usuarios seleccionar el objetivo global al que desean aportar su tiempo y habilidades.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="space-y-16"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {Object.entries(categories).map(([key, category]) => (
            <motion.div 
              key={key} 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-6">
                <div 
                  className="h-1.5 flex-1 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold px-6 py-3 rounded-full flex items-center gap-3"
                  style={{ backgroundColor: `${category.color}20`, color: category.color }}
                >
                  {
                    // Asigna un ícono de Lucide a cada categoría
                    key === 'personas' ? <User size={32} /> :
                    key === 'planeta' ? <Globe size={32} /> :
                    key === 'prosperidad' ? <DollarSign size={32} /> :
                    <Bird size={32} />  // Por defecto, si no coincide con ningún key anterior
                  }
                  {category.title}
                </h3>
                <div 
                  className="h-1.5 flex-1 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {category.items.map((index) => (
                  <ODSCard 
                    key={index} 
                    {...odsItems[index - 1]} 
                    index={index - 1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Impacto