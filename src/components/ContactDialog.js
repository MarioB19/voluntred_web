"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, ChevronDown } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ContactDialog = ({ isOpen, onClose, type = "universidad" }) => {
  const [formData, setFormData] = React.useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoOrganizacion: '',
    motivacion: '',
    areasInteres: [],
    experiencia: ''
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [notificationDialog, setNotificationDialog] = React.useState({ isOpen: false, title: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const emailContent = `
      <h2>Nuevo mensaje de contacto - ${type}</h2>
      <p><strong>Nombre:</strong> ${formData.nombre}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Teléfono:</strong> ${formData.telefono}</p>
      ${formData.tipoOrganizacion ? `<p><strong>Tipo de ${type}:</strong> ${formData.tipoOrganizacion}</p>` : ''}
      ${formData.motivacion ? `<p><strong>Motivación:</strong> ${formData.motivacion}</p>` : ''}
      ${formData.areasInteres.length > 0 ? `<p><strong>Áreas de interés:</strong> ${formData.areasInteres.join(', ')}</p>` : ''}
    `

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: `Nuevo contacto de ${type} - VoluntRED`,
          text: emailContent.replace(/<[^>]*>/g, ''),
          html: emailContent
        }),
      })

      if (response.ok) {
        setNotificationDialog({
          isOpen: true,
          title: "Mensaje enviado",
          message: "Gracias por tu interés. Te contactaremos pronto."
        })
      } else {
        throw new Error('Error al enviar el mensaje')
      }
    } catch (error) {
      console.error('Error:', error)
      setNotificationDialog({
        isOpen: true,
        title: "Error",
        message: "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const organizationTypes = {
    universidad: [
      { id: "publica", label: "Universidad Pública" },
      { id: "privada", label: "Universidad Privada" },
      { id: "tecnologico", label: "Instituto Tecnológico" }
    ],
    empresa: [
      { id: "pequeña", label: "Pequeña Empresa (1-50 empleados)" },
      { id: "mediana", label: "Mediana Empresa (51-250 empleados)" },
      { id: "grande", label: "Gran Empresa (250+ empleados)" }
    ],
    ong: [
      { id: "local", label: "ONG Local" },
      { id: "nacional", label: "ONG Nacional" },
      { id: "internacional", label: "ONG Internacional" }
    ]
  }

  const areasInteres = [
    "Educación", "Salud", "Medio Ambiente", "Derechos Humanos", 
    "Desarrollo Comunitario", "Arte y Cultura", "Tecnología"
  ]

  const renderFormFields = () => {
    switch (type) {
      case "voluntario":
        return (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="space-y-2"
            >
              <Label htmlFor="motivacion" className="text-gray-200">
                Motivación para ser voluntario
              </Label>
              <Textarea
                id="motivacion"
                className="min-h-[120px] bg-gray-800/50 border-gray-700 text-gray-100 placeholder:text-gray-400 focus:border-blue-500 focus:ring-green-500 rounded-md transition-all duration-200 ease-in-out"
                placeholder="Cuéntanos por qué quieres ser voluntario..."
                value={formData.motivacion}
                onChange={(e) => setFormData({ ...formData, motivacion: e.target.value })}
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="space-y-2"
            >
              <Label htmlFor="areasInteres" className="text-gray-200">
                Áreas de interés
              </Label>
              <Select
                id="areasInteres"
                value={formData.areasInteres}
                onValueChange={(value) => setFormData({ ...formData, areasInteres: value })}
              >
                <SelectTrigger className="bg-gray-800/50 border-gray-700 text-gray-100 focus:border-blue-500 focus:ring-green-500 rounded-md transition-all duration-200 ease-in-out">
                  <SelectValue placeholder="Selecciona tus áreas de interés" />
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 rounded-md">
                  {areasInteres.map((area) => (
                    <SelectItem 
                      key={area} 
                      value={area}
                      className="text-gray-100 focus:bg-blue-600 focus:text-white hover:bg-green-600/20 transition-colors duration-150 ease-in-out"
                    >
                      <span className="flex items-center gap-2">
                        <Check className="w-4 h-4 opacity-0 group-data-[state=checked]:opacity-100 transition-opacity duration-150 ease-in-out" />
                        {area}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>
          </>
        )
      case "ong":
      case "universidad":
      case "empresa":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="space-y-2"
          >
            <Label className="text-gray-200">Tipo de {type === "universidad" ? "Institución" : type === "empresa" ? "Empresa" : "ONG"}</Label>
            <RadioGroup
              value={formData.tipoOrganizacion}
              onValueChange={(value) => setFormData({ ...formData, tipoOrganizacion: value })}
              className="space-y-2"
            >
              {organizationTypes[type].map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option.id}
                    id={option.id}
                    className="border-gray-600 text-blue-500 focus:border-blue-500 focus:ring-green-500"
                  />
                  <Label
                    htmlFor={option.id}
                    className="text-gray-200 font-normal cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800/20 max-w-lg rounded-lg overflow-hidden">
              <DialogHeader>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <DialogTitle className="text-2xl font-bold text-gray-100 flex justify-between items-center">
                    ¡Gracias por tu interés!
                    <Button
                      variant="ghost"
                      className="w-8 h-8 p-0 text-gray-400 hover:text-gray-300 transition-colors duration-150 ease-in-out"
                      onClick={onClose}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </DialogTitle>
                </motion.div>
              </DialogHeader>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                onSubmit={handleSubmit}
                className="space-y-6 pt-4"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Label htmlFor="nombre" className="text-gray-200">
                      {type === "voluntario" ? "Nombre completo" : `Nombre de la ${type === "universidad" ? "Universidad" : type === "empresa" ? "Empresa" : "ONG"}`}
                    </Label>
                    <Input
                      id="nombre"
                      className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder:text-gray-400 focus:border-blue-500 focus:ring-green-500 rounded-md transition-all duration-200 ease-in-out"
                      placeholder="Ingresa tu nombre..."
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Label htmlFor="email" className="text-gray-200">
                      Correo electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder:text-gray-400 focus:border-blue-500 focus:ring-green-500 rounded-md transition-all duration-200 ease-in-out"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Label htmlFor="telefono" className="text-gray-200">
                      Teléfono de contacto
                    </Label>
                    <Input
                      id="telefono"
                      type="tel"
                      className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder:text-gray-400 focus:border-blue-500 focus:ring-green-500 rounded-md transition-all duration-200 ease-in-out"
                      placeholder="+52 (123) 456-7890"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      required
                    />
                  </motion.div>

                  {renderFormFields()}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 via-green-600 to-red-600 hover:from-blue-700 hover:via-green-700 hover:to-red-700 text-white font-medium py-2.5 rounded-md transition-all duration-200 ease-in-out"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar información'}
                  </Button>
                </motion.div>
              </motion.form>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      <Dialog open={notificationDialog.isOpen} onOpenChange={() => setNotificationDialog({ ...notificationDialog, isOpen: false })}>
        <DialogContent className="bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800/20 rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-100">
              {notificationDialog.title}
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              {notificationDialog.message}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button 
              onClick={() => {
                setNotificationDialog({ ...notificationDialog, isOpen: false });
                if (notificationDialog.title === "Mensaje enviado") {
                  onClose();
                }
              }}
              className="bg-gradient-to-r from-blue-600 via-green-600 to-red-600 hover:from-blue-700 hover:via-green-700 hover:to-red-700 text-white transition-colors duration-150 ease-in-out rounded-md"
            >
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ContactDialog