"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Building2, GraduationCap, Briefcase, Info, Target, Eye } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Inicio = () => {
  const normalizeTitleToValue = (title) => {
    return title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, '-');
  }

  const sections = [
    {
      title: "Quiénes Somos",
      content: "VoluntRED es una aplicación móvil que conecta a personas interesadas en el voluntariado con asociaciones de carácter social del estado de Jalisco. Impulsamos la participación ciudadana en eventos de voluntariado, actuando como un catalizador para revalorizar y potencializar el voluntariado, logrando que las necesidades de comunidades y grupos vulnerables sean atendidas, contribuyendo al desarrollo de cada uno de los indicadores establecidos en la agenda 2030 por la ONU.",
      icon: <Info className="w-8 h-8" />
    },
    {
      title: "Nuestra Misión",
      content: "Facilitar y fomentar la participación activa de individuos altruistas en eventos de voluntariado, conectando de manera efectiva a personas con causas significativas y a organizaciones sin fines de lucro en la Zona Metropolitana de Guadalajara (ZMG), México. Nos comprometemos a crear una plataforma inclusiva y accesible que contribuya al desarrollo de comunidades locales, promoviendo un espíritu solidario y generando un impacto positivo en la sociedad.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Nuestra Visión",
      content: "Aspiramos a ser la plataforma líder en México para la conexión entre voluntarios y organizaciones sociales, siendo reconocidos por nuestra contribución significativa al aumento de la participación en eventos de voluntariado. Buscamos construir una red sólida y colaborativa que inspire a la comunidad a comprometerse activamente en la construcción de un futuro más sostenible, consciente y equitativo. Nuestra visión es ser un catalizador para el cambio positivo, creando un impacto duradero en la sociedad mexicana.",
      icon: <Eye className="w-8 h-8" />
    }
  ]

  const [activeTab, setActiveTab] = useState(normalizeTitleToValue(sections[0].title))

  const users = [
    {
      type: "Voluntarios",
      icon: <Users className="w-12 h-12 sm:w-16 sm:h-16" />,
      items: ["Ciudadanos", "Universitarios", "Empleados"],
      description: "Personas comprometidas con el cambio social y el desarrollo comunitario."
    },
    {
      type: "ONG's",
      icon: <Building2 className="w-12 h-12 sm:w-16 sm:h-16" />,
      items: ["Asociaciones Civiles", "Fundaciones", "Organizaciones Sociales"],
      description: "Organizaciones dedicadas a causas sociales y desarrollo comunitario."
    },
    {
      type: "Universidades",
      icon: <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16" />,
      items: ["Instituciones Educativas", "Centros de Investigación", "Programas de Servicio Social"],
      description: "Centros educativos comprometidos con la formación integral y el impacto social."
    },
    {
      type: "Empresas",
      icon: <Briefcase className="w-12 h-12 sm:w-16 sm:h-16" />,
      items: ["Corporativos", "PyMEs", "Empresas Socialmente Responsables"],
      description: "Organizaciones que buscan generar un impacto positivo en la sociedad."
    }
  ]

  return (
    <section id= "inicio">
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-8 pt-24 font-['Poppins']">
      <motion.h1 
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center mb-16 sm:mb-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="bg-gradient-to-r from-blue-400 via-green-400 to-red-500 text-transparent bg-clip-text">
          Volunt<span className="text-red-500">RED</span>
        </span>
      </motion.h1>

      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="w-full max-w-5xl mx-auto mb-24"
      >
        <TabsList className="w-full flex flex-row justify-between bg-gray-800/50 rounded-3xl p-2 mb-6 sm:mb-12">
          {sections.map((section) => {
            const tabValue = normalizeTitleToValue(section.title);
            return (
              <TabsTrigger 
                key={section.title} 
                value={tabValue}
                className="flex-1 rounded-full text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold data-[state=active]:bg-gradient-to-r from-blue-500 via-green-500 to-red-500 data-[state=active]:text-black transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6"
              >
                <motion.div 
                  className="flex items-center gap-2 sm:gap-3 justify-center" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.icon}
                  <span className="hidden sm:inline">{section.title}</span>
                </motion.div>
              </TabsTrigger>
            )
          })}
        </TabsList>
        <AnimatePresence mode="wait">
          {sections.map((section) => {
            const tabValue = normalizeTitleToValue(section.title);
            return (
              <TabsContent key={section.title} value={tabValue}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8 sm:p-10 md:p-16 backdrop-blur-lg border border-blue-500/20 shadow-2xl max-w-5xl mx-auto w-full"
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 via-green-400 to-red-500 text-transparent bg-clip-text text-center">
                    {section.title}
                  </h2>
                  <p className="text-gray-200 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-center">
                    {section.content}
                  </p>
                </motion.div>
              </TabsContent>
            )
          })}
        </AnimatePresence>
      </Tabs>

      <motion.h2 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-12 sm:mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          A quién va dirigido
        </span>
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
      >
        {users.map((user) => (
          <motion.div
            key={user.type}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-gray-800/90 border-2 border-blue-500/30 rounded-3xl p-6 sm:p-8 h-full backdrop-blur-sm">
              <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-400"
                >
                  {user.icon}
                </motion.div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-500 text-transparent bg-clip-text">
                  {user.type}
                </h3>
              </div>
              <p className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6">
                {user.description}
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {user.items.map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl flex items-center gap-2 sm:gap-3"
                  >
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </section>
  )
}

export default Inicio