"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { HeartHandshake, Building2, GraduationCap, Briefcase, Building, School } from 'lucide-react'

const beneficios = {
  voluntarios: [
    "Contribuir a causas sociales que te apasionen y marcar una diferencia real.",
    "Desarrollar tus habilidades y obtener nuevas experiencias.",
    "Conocer nuevas personas y crear vínculos significativos.",
    "Sentirte parte de algo más grande que tú mismo.",
    "Crecer como persona a través del servicio desinteresado."
  ],
  asociaciones: [
    "Encontrar voluntarios comprometidos para tus proyectos.",
    "Aumentar tu capacidad operativa con talento donado.",
    "Tener mayor visibilidad y atraer más personas a tu causa.",
    "Optimizar tus procesos de gestión de voluntarios.",
    "Potenciar tu impacto y llegar a más beneficiarios."
  ],
  universitarios: [
    "Ganar experiencia práctica en tu campo de estudio.",
    "Desarrollar habilidades de liderazgo y trabajo en equipo.",
    "Crear una red de contactos profesionales.",
    "Explorar diferentes áreas de interés para tu carrera.",
    "Enriquecer tu currículum con experiencias relevantes."
  ],
  empleados: [
    "Desarrollar nuevas habilidades fuera de tu entorno laboral.",
    "Mejorar tu satisfacción personal y laboral.",
    "Fortalecer el trabajo en equipo con tus compañeros.",
    "Ampliar tu red profesional más allá de tu industria.",
    "Contribuir a la responsabilidad social de tu empresa."
  ],
  empresas: [
    "Mejorar la imagen y reputación corporativa.",
    "Aumentar el compromiso y la retención de los empleados.",
    "Desarrollar habilidades de liderazgo en tu equipo.",
    "Fortalecer las relaciones con la comunidad local.",
    "Contribuir al cumplimiento de objetivos de sostenibilidad."
  ],
  universidades: [
    "Fomentar la responsabilidad social en los estudiantes.",
    "Crear alianzas con organizaciones y empresas locales.",
    "Mejorar la reputación y el impacto social de la institución.",
    "Ofrecer oportunidades de aprendizaje experiencial.",
    "Desarrollar proyectos de investigación con impacto social."
  ]
}

const Beneficios = () => {
  return (
    <section id="beneficios" className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-8 pt-24 font-['Poppins']">
  
      <motion.h2 
        className="text-5xl md:text-6xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          Beneficios
        </span>
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
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
        <BeneficiosCard
          title="Voluntarios"
          benefits={beneficios.voluntarios}
          icon={<HeartHandshake className="w-10 h-10" />}
          color="from-green-400 to-green-600"
        />
        <BeneficiosCard
          title="Asociaciones"
          benefits={beneficios.asociaciones}
          icon={<Building2 className="w-10 h-10" />}
          color="from-blue-400 to-blue-600"
        />
        <BeneficiosCard
          title="Universitarios"
          benefits={beneficios.universitarios}
          icon={<GraduationCap className="w-10 h-10" />}
          color="from-purple-400 to-purple-600"
        />
        <BeneficiosCard
          title="Empleados"
          benefits={beneficios.empleados}
          icon={<Briefcase className="w-10 h-10" />}
          color="from-orange-400 to-orange-600"
        />
        <BeneficiosCard
          title="Empresas"
          benefits={beneficios.empresas}
          icon={<Building className="w-10 h-10" />}
          color="from-red-400 to-red-600"
        />
        <BeneficiosCard
          title="Universidades"
          benefits={beneficios.universidades}
          icon={<School className="w-10 h-10" />}
          color="from-yellow-400 to-yellow-600"
        />
      </motion.div>
    </section>
  )
}

const BeneficiosCard = ({ title, benefits, icon, color }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75`} />
      <Card className="relative bg-gray-900/90 border-2 border-blue-500/30 rounded-3xl overflow-hidden backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="bg-white p-2 rounded-full">
              {icon}
            </div>
            <h3 className="text-3xl font-bold text-white">{title}</h3>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start text-gray-200"
              >
                <span className="mr-2 mt-1 text-blue-400">•</span>
                <p className="text-lg">{benefit}</p>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Beneficios