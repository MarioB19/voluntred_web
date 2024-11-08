"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const PriceCard = ({ title, icon: Icon, price, description, features, buttonText, popular = false }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className="relative group w-full max-w-sm mx-auto"
  >
    <motion.div
      className="absolute -inset-[1px] bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-blue-500/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"
      animate={{
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    <Card className="relative z-10 bg-gradient-to-br from-emerald-950/90 via-teal-950/90 to-slate-950/90 border-0 h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center mb-3">
          <Icon className="w-8 h-8 text-emerald-400" />
          {popular && (
            <Badge className="bg-emerald-500 text-emerald-50 text-sm px-3 py-1">
              Popular
            </Badge>
          )}
        </div>
        <CardTitle className="text-2xl font-bold text-emerald-100 mb-2">{title}</CardTitle>
        <CardDescription className="text-xl font-semibold text-emerald-200">
          {typeof price === 'string' ? price : `$${price} MXN`}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-emerald-300/90 text-base mb-6">{description}</p>
        <ul className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center text-sm text-emerald-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Check className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
              <span>{feature.text}</span>
            </motion.li>
          ))}
        </ul>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white text-base font-medium py-4 border-0">
            {buttonText}
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  </motion.div>
)

export default PriceCard