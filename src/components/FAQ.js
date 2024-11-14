"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqCategories } from '@/data/FAQ'

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].category)

  return (
    <section id="preguntas-frecuentes" className="w-full bg-gradient-to-b from-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8 font-['Poppins']">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-green-400 to-red-500 text-transparent bg-clip-text">
            Preguntas Frecuentes
          </span>
        </motion.h2>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqCategories.map((cat, index) => (
            <motion.div 
              key={cat.category} 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button
                group
                variant="outline"
                className={`
                  w-40 h-24 flex flex-col items-center justify-center p-2 rounded-xl
                  border-2 transition-all duration-300
                  ${activeCategory === cat.category 
                    ? `bg-opacity-90 text-white border-white shadow-lg ${cat.bgColor} hover:bg-opacity-100 hover:shadow-xl` 
                    : 'bg-gray-800/30 text-gray-300 border-gray-700 hover:bg-gray-700/50 hover:text-white hover:border-white'
                  }
                `}
                onClick={() => setActiveCategory(cat.category)}
              >
                <div className={`text-3xl mb-2 ${activeCategory === cat.category ? 'text-white' : 'group-hover:text-white'}`}>
                  {cat.icon}
                </div>
                <span className={`text-sm font-medium text-center ${activeCategory === cat.category ? 'text-white' : 'group-hover:text-white'}`}>
                  {cat.category}
                </span>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-blue-500/20 overflow-hidden rounded-2xl shadow-2xl">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqCategories.find(cat => cat.category === activeCategory).questions.map((q, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700 last:border-b-0">
                      <AccordionTrigger className="text-lg font-semibold text-gray-200 hover:text-white hover:bg-gray-800/50 py-4 px-2 rounded-lg transition-all duration-300">
                        <span className="text-left">{q.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 text-base mt-2 pb-4">
                        <div className="bg-gray-800/30 p-4 rounded-lg">
                          {q.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}