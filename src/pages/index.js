"use client"

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Navbar from '../components/Navbar'
import Inicio from '../components/Inicio'
import Beneficios from '../components/Beneficios'
import Impacto from '../components/Impacto'
import Price from '@/components/Price'
import Contacto from '@/components/Contacto'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import NuestroPrototipo from '@/components/NuestroPrototipo'

const Section = ({ children, id }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const controls = useAnimation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  const variants = isMobile ? {
    hidden: { opacity: 0.8 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  } : {
    hidden: { opacity: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="min-h-screen py-12"
    >
      {children}
    </motion.section>
  )
}

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      <Section id="inicio">
        <Inicio />
      </Section>

      <Section id="beneficios">
        <Beneficios />
      </Section>

      <Section id="impacto">
        <Impacto />
      </Section>

      <Section id="price">
        <Price />
      </Section>

      <Section id="faq">
        <FAQ />
      </Section>

      <Section id="nuestroPrototipo">
        <NuestroPrototipo />
      </Section>

      <Section id="contacto">
        <Contacto />
      </Section>

      <Footer />
    </div>
  )
}