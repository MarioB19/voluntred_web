'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

export default function ODSCard({ color, image, title, description }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="relative aspect-square w-full max-w-sm mx-auto" onClick={handleFlip}>
      <AnimatePresence initial={false} mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full h-full"
          >
            <Card className="w-full h-full overflow-hidden rounded-xl">
              <CardContent className="p-0 flex flex-col items-center justify-between h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                  <p className="text-xs sm:text-sm text-center text-white font-bold">{title}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full h-full"
          >
            <Card 
              className="w-full h-full rounded-xl overflow-hidden backdrop-blur-sm"
              style={{ backgroundColor: color }}
            >
              <CardContent className="p-4 flex items-center justify-center h-full">
                <p className="text-xs sm:text-sm text-center text-white font-medium">
                  {description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

