import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BusinessIcon from '@mui/icons-material/Business';

const beneficiosVoluntarios = [
  "Contribuir a causas sociales que te apasionen y marcar una diferencia real.",
  "Desarrollar tus habilidades, obtener nuevas experiencias y expandir tu visión.",
  "Conocer nuevas personas, crear vínculos y trabajar en equipo por un bien común.",
  "Sentirte parte de algo más grande que tú mismo.",
  "Tener un propósito y reconectarte con tu comunidad.",
  "Crecer como persona a través del servicio desinteresado."
];

const beneficiosAsociaciones = [
  "Encontrar voluntarios comprometidos para tus proyectos y actividades.",
  "Aumentar tu capacidad operativa gracias al talento y el tiempo donado.",
  "Tener mayor visibilidad y atraer más personas a tu causa.",
  "Aprovechar la tecnología para optimizar tus procesos de gestión de voluntarios.",
  "Recibir retroalimentación para mejorar continuamente.",
  "Potenciar tu impacto y llegar a más beneficiarios."
];

const Beneficios = () => {
  return (
    <Box id = "beneficios" sx={{ width: '100%', minHeight: '100vh', bgcolor: 'background.default', p: 4 }}>
      <Typography variant="h3" component="div" color="primary.main" fontWeight="bold" sx={{ mb: 4, textAlign: 'center' }}>
        Beneficios
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 4, borderLeft: '5px solid green' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <VolunteerActivismIcon sx={{ fontSize: 40, color: 'green', mr: 2 }} />
                <Typography variant="h4" component="div" color="primary.main" fontWeight="bold" sx={{ textAlign: 'center' }}>
                  Beneficios para los Voluntarios
                </Typography>
              </Box>
              <ul>
                {beneficiosVoluntarios.map((beneficio, index) => (
                  <li key={index}>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1, lineHeight: 1.8 }}>
                      {beneficio}
                    </Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 4, borderLeft: '5px solid blue' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <BusinessIcon sx={{ fontSize: 40, color: 'blue', mr: 2 }} />
                <Typography variant="h4" component="div" color="primary.main" fontWeight="bold" sx={{ textAlign: 'center' }}>
                  Beneficios para las Asociaciones
                </Typography>
              </Box>
              <ul>
                {beneficiosAsociaciones.map((beneficio, index) => (
                  <li key={index}>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1, lineHeight: 1.8 }}>
                      {beneficio}
                    </Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Beneficios;
