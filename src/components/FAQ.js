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