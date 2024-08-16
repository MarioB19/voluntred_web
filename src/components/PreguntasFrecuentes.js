import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, IconButton, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PeopleIcon from '@mui/icons-material/People';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import BusinessIcon from '@mui/icons-material/Business';
import HelpIcon from '@mui/icons-material/Help';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';

const faqCategories = [
  {
    category: 'Voluntarios',
    icon: <PeopleIcon />,
    color: '#FF6666',
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
    icon: <MobileFriendlyIcon />,
    color: '#66B2FF',
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
    icon: <BusinessIcon />,
    color: '#66FF66',
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
    category: 'Dudas Generales',
    icon: <HelpIcon />,
    color: '#FFB266',
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
];

const FAQCard = styled(motion.div)(({ theme, bgcolor }) => ({
  border: `2px solid ${bgcolor}`,
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
}));

const FAQ = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].category);

  const handleExpandClick = (question) => {
    setExpandedQuestion(expandedQuestion === question ? null : question);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setExpandedQuestion(null);
  };

  const currentCategory = faqCategories.find(cat => cat.category === activeCategory);

  return (
    <Box id="preguntas-frecuentes" sx={{ p: 3 }}>
      <Typography variant="h3" component="div" color="primary.main" fontWeight="bold" sx={{ mb: 4, textAlign: 'center' }}>
        Preguntas Frecuentes
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {faqCategories.map((cat) => (
          <Grid item key={cat.category} xs={6} sm={3}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                onClick={() => handleCategoryClick(cat.category)}
                sx={{
                  flexDirection: 'column',
                  color: activeCategory === cat.category ? cat.color : 'grey',
                  bgcolor: activeCategory === cat.category ? `${cat.color}30` : 'transparent',
                  border: activeCategory === cat.category ? `2px solid ${cat.color}` : '2px solid transparent',
                  borderRadius: 2,
                  p: 1,
                  width: '100%',
                  '&:hover': {
                    bgcolor: `${cat.color}30`,
                  },
                }}
              >
                {cat.icon}
                <Typography>{cat.category}</Typography>
              </IconButton>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentCategory.questions.map((q) => (
            <FAQCard key={q.question} bgcolor={currentCategory.color}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 2,
                  cursor: 'pointer',
                  bgcolor: expandedQuestion === q.question ? `${currentCategory.color}10` : 'transparent',
                  '&:hover': {
                    bgcolor: `${currentCategory.color}10`,
                  },
                }}
                onClick={() => handleExpandClick(q.question)}
              >
                <Typography variant="h6" fontWeight="bold">{q.question}</Typography>
                <IconButton>
                  {expandedQuestion === q.question ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Box>
              <AnimatePresence>
                {expandedQuestion === q.question && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent sx={{ p: 2 }}>
                      <Typography variant="body1" fontSize="1.1rem">{q.answer}</Typography>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </FAQCard>
          ))}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default FAQ;