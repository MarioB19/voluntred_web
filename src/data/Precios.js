import { Users, Heart, Building, GraduationCap } from 'lucide-react'

export const planes = [
  {
    title: "Voluntarios",
    icon: Users,
    price: "Gratis",
    description: "Para individuos comprometidos con el cambio social.",
    features: [
      { text: "Acceso a todas las oportunidades", included: true },
      { text: "Perfil personalizado", included: true },
      { text: "Certificados de participación", included: true },
      { text: "Seguimiento de horas", included: true },
    ],
    buttonText: "Comenzar",
  },
  {
    title: "ONGs",
    icon: Heart,
    price: "Gratis",
    description: "Para organizaciones sin fines de lucro.",
    features: [
      { text: "Publicación de oportunidades", included: true },
      { text: "Gestión de voluntarios", included: true },
      { text: "Reportes básicos", included: true },
      { text: "Soporte por correo", included: true },
    ],
    buttonText: "Registrarse",
  },
  {
    title: "ONGs Premium",
    icon: Heart,
    price: 200,
    description: "Funciones exclusivas para ONGs.",
    features: [
      { text: "Todo lo incluido en ONGs", included: true },
      { text: "Reportes avanzados", included: true },
      { text: "Integración con CRM", included: true },
      { text: "Soporte prioritario", included: true },
    ],
    buttonText: "Actualizar",
    popular: true,
  },
  {
    title: "Empresas",
    icon: Building,
    price: "Consultar",
    description: "Soluciones personalizadas para responsabilidad social corporativa.",
    features: [
      { text: "Programa de voluntariado corporativo", included: true },
      { text: "Dashboard personalizado", included: true },
      { text: "Reportes de impacto", included: true },
      { text: "Integración con sistemas internos", included: true },
    ],
    buttonText: "Contactar",
  },
  {
    title: "Universidades",
    icon: GraduationCap,
    price: "Consultar",
    description: "Plataforma adaptada para instituciones educativas.",
    features: [
      { text: "Gestión de servicio social", included: true },
      { text: "Seguimiento de horas por carrera", included: true },
      { text: "Reportes para acreditación", included: true },
      { text: "Integración con sistemas académicos", included: true },
    ],
    buttonText: "Contactar",
  },
]