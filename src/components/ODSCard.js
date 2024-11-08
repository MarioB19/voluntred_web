import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

const ODSCard = ({ color, image, title, description }) => {
  return (
    <div className="relative aspect-square perspective-1000">
      <motion.div
        className="w-full h-full preserve-3d cursor-pointer"
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of the card */}
        <motion.div
          className="absolute w-full h-full backface-hidden"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 0 }}
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
                  unoptimized={false}
                />
              </div>
              <div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2"
              >
                <p className="text-xs sm:text-sm text-center text-white font-bold">{title}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Back of the card */}
        <motion.div
          className="absolute w-full h-full backface-hidden"
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 180 }}
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
      </motion.div>
    </div>
  )
}

export default ODSCard