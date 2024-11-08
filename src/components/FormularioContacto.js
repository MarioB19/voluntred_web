"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Mail, User, MessageSquare, Loader2 } from 'lucide-react'

const formAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function FormularioContacto() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      nombre: '',
      email: '',
      mensaje: ''
    },
    mode: 'onChange'
  })

  const [isLoading, setIsLoading] = React.useState(false)
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [dialogContent, setDialogContent] = React.useState({ title: '', description: '' })

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'voluntred@gmail.com',
          subject: 'Nuevo mensaje de contacto',
          text: `Nombre: ${data.nombre}\nEmail: ${data.email}\nMensaje: ${data.mensaje}`,
          html: `
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> ${data.nombre}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Mensaje:</strong> ${data.mensaje}</p>
          `
        }),
      })
      if (response.ok) {
        setDialogContent({
          title: "Mensaje enviado",
          description: "Tu mensaje ha sido enviado con éxito."
        })
        reset()
      } else {
        throw new Error('Error al enviar el mensaje')
      }
    } catch (error) {
      setDialogContent({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo."
      })
    } finally {
      setIsLoading(false)
      setDialogOpen(true)
    }
  }

  return (
    <>
      <Card className="w-full max-w-lg mx-auto bg-gray-900/50 border-blue-500/20 overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-3xl font-bold">
            <Mail className="w-8 h-8 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-red-500 text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient">
              Manda un mensaje
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <motion.form 
            onSubmit={handleSubmit(onSubmit)} 
            className="space-y-6"
            variants={formAnimation}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-2" variants={itemAnimation}>
              <Label htmlFor="nombre" className="text-gray-200">Nombre</Label>
              <div className="relative">
                <Input
                  id="nombre"
                  placeholder="Tu nombre"
                  {...register("nombre", {
                    required: 'El nombre es requerido',
                    minLength: { value: 5, message: 'Mínimo 5 caracteres' },
                    maxLength: { value: 50, message: 'Máximo 50 caracteres' }
                  })}
                  className="pl-10 bg-gray-800/50 border-gray-700 text-gray-100 placeholder:text-gray-400 focus:border-blue-500 transition-all duration-300"
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
            </motion.div>

            <motion.div className="space-y-2" variants={itemAnimation}>
              <Label htmlFor="email" className="text-gray-200">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  {...register("email", {
                    required: 'El email es requerido',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  className="pl-10 bg-gray-800/50 border-gray-700 text-gray-100 placeholder:text-gray-400 focus:border-blue-500 transition-all duration-300"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </motion.div>

            <motion.div className="space-y-2" variants={itemAnimation}>
              <Label htmlFor="mensaje" className="text-gray-200">Mensaje</Label>
              <div className="relative">
                <Textarea
                  id="mensaje"
                  placeholder="Tu mensaje"
                  {...register("mensaje", {
                    required: 'El mensaje es requerido',
                    minLength: { value: 20, message: 'Mínimo 20 caracteres' },
                    maxLength: { value: 1000, message: 'Máximo 1,000 caracteres' }
                  })}
                  className="pl-10 min-h-[100px] bg-gray-800/50 border-gray-700 text-gray-100 placeholder:text-gray-400 focus:border-blue-500 transition-all duration-300"
                />
                <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              </div>
              {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje.message}</p>}
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              variants={itemAnimation}
            >
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 via-green-500 to-red-500 hover:from-blue-600 hover:via-green-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensaje'
                )}
              </Button>
            </motion.div>
          </motion.form>
        </CardContent>
      </Card>

      <AnimatePresence>
        {dialogOpen && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="bg-gray-900 border-blue-500/20">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-100">{dialogContent.title}</DialogTitle>
                <DialogDescription className="text-gray-300">
                  {dialogContent.description}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button onClick={() => setDialogOpen(false)} className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300">
                  Cerrar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}