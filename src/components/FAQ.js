"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Smartphone, Building2, HelpCircle, GraduationCap, Briefcase } from 'lucide-react'

const faqCategories = [
  {
    category: 'Voluntarios',
    icon: <Users className="w-6 h-6" />,
    color: 'text-red-500',
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/50',
    questions: [
      {
        question: '¿Cómo me registro como voluntario?',
        answer: 'Registrarse es fácil y gratuito. Solo debes proporcionar algunos datos básicos, crear un nombre de usuario y contraseña, y listo. Una vez registrado, puedes buscar y aplicar a oportunidades de voluntariado.',
      },
      {
        question: '¿Puedo buscar eventos según mis intereses?',
        answer: '¡Sí! La plataforma te permite encontrar y filtrar eventos de acuerdo a tus causas favoritas, horarios, ubicación y más. Así puedes identificar fácilmente oportunidades alineadas.',
      },
      {
        question: '¿Cómo valido mi asistencia a eventos?',
        answer: 'Durante el evento, la organización te proporcionará un código único de validación. Debes ingresar este código en la app en un plazo de 72 hrs después de finalizado el evento para confirmar tu asistencia.',
      },
    ],
  },
  {
    category: 'Aplicación Móvil',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/20',
    borderColor: 'border-blue-400/50',
    questions: [
      {
        question: '¿Dónde puedo descargar la app VoluntRED?',
        answer: 'La aplicación VoluntRED estará disponible de forma gratuita tanto en Google Play para dispositivos Android como en App Store para iOS. Solo busca "VoluntRED" en la tienda de apps de tu preferencia.',
      },
      {
        question: '¿Puedo usar la aplicación en mi computadora?',
        answer: 'Por el momento, VoluntRED solo está disponible en dispositivos móviles. No existe una versión de escritorio de la aplicación. Sin embargo, puedes visitar nuestro sitio web desde cualquier computadora.',
      },
    ],
  },
  {
    category: 'ONGs',
    icon: <Building2 className="w-6 h-6" />,
    color: 'text-green-400',
    bgColor: 'bg-green-400/20',
    borderColor: 'border-green-400/50',
    questions: [
      {
        question: '¿Las Asociaciones/ONG\'s deben cumplir requisitos para unirse?',
        answer: 'Sí, todas las asociaciones deben estar legalmente constituidas y proporcionar documentación que valide su estado para unirse. Esto asegura seriedad.',
      },
      {
        question: '¿Las publicaciones de eventos tienen algún costo?',
        answer: 'No, las organizaciones pueden publicar eventos y oportunidades de forma completamente gratuita en VoluntRED.',
      },
    ],
  },
  {
    category: 'Universidades',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/20',
    borderColor: 'border-purple-400/50',
    questions: [
      {
        question: '¿Cómo pueden las universidades colaborar con VoluntRED?',
        answer: 'Las universidades pueden asociarse con VoluntRED para ofrecer oportunidades de servicio social a sus estudiantes, organizar eventos de voluntariado en el campus y promover la participación cívica.',
      },
      {
        question: '¿Hay beneficios para los estudiantes que participan a través de su universidad?',
        answer: 'Sí, los estudiantes pueden obtener reconocimientos, certificados de participación y, en algunos casos, créditos académicos por su trabajo voluntario, dependiendo de los acuerdos con cada universidad.',
      },
    ],
  },
  {
    category: 'Empresas',
    icon: <Briefcase className="w-6 h-6" />,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/20',
    borderColor: 'border-yellow-400/50',
    questions: [
      {
        question: '¿Cómo pueden las empresas participar en VoluntRED?',
        answer: 'Las empresas pueden crear programas de voluntariado corporativo, patrocinar eventos, y fomentar la participación de sus empleados en actividades de responsabilidad social a través de VoluntRED.',
      },
      {
        question: '¿Qué beneficios obtienen las empresas al colaborar con VoluntRED?',
        answer: 'Las empresas pueden mejorar su imagen corporativa, aumentar el compromiso de los empleados, y contribuir significativamente a causas sociales, fortaleciendo su responsabilidad social empresarial.',
      },
    ],
  },
  {
    category: 'Dudas Generales',
    icon: <HelpCircle className="w-6 h-6" />,
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/20',
    borderColor: 'border-orange-400/50',
    questions: [
      {
        question: '¿Cómo funciona la plataforma de voluntariado?',
        answer: 'La plataforma conecta a voluntarios con ong\'s que buscan apoyo para sus causas (asociaciones). Los voluntarios se registran y buscan eventos según sus intereses. Las asociaciones publican oportunidades de voluntariado abiertas.',
      },
      {
        question: '¿Hay algún costo por usar la plataforma?',
        answer: 'No, la aplicación y plataforma de VoluntRED son 100% gratuitas para voluntarios y organizaciones sin fines de lucro. No hay tarifas, comisiones o costos ocultos.',
      },
      {
        question: '¿VoluntRED es una organización sin fines de lucro?',
        answer: 'Sí, VoluntRED es una plataforma creada como una iniciativa de impacto social positivo, sin buscar beneficio económico.',
      },
    ],
  },
]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].category)

  return (
    <div id="preguntas-frecuentes" className="w-full bg-gradient-to-b from-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8 font-['Poppins']">
      <div className="max-w-7xl mx-auto">
      <motion.h2 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-green-400 to-red-500 text-transparent bg-clip-text">
            Preguntas Frecuentes
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
          {faqCategories.map((cat) => (
            <motion.div key={cat.category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className={`w-full h-full flex flex-col items-center justify-center p-4 ${
                  activeCategory === cat.category 
                    ? `${cat.bgColor} ${cat.color} ${cat.borderColor}` 
                    : 'bg-gray-800/30 text-gray-400 border-gray-700 hover:bg-gray-700/50 hover:text-gray-200 hover:border-gray-600'
                } border-2 transition-all duration-300`}
                onClick={() => setActiveCategory(cat.category)}
              >
                {cat.icon}
                <span className="mt-2 text-sm">{cat.category}</span>
              </Button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gray-800/50 border-blue-500/20 overflow-hidden">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqCategories.find(cat => cat.category === activeCategory).questions.map((q, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                      <AccordionTrigger className="text-lg font-semibold text-gray-200 hover:text-white hover:no-underline">
                        {q.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 text-base">
                        {q.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}