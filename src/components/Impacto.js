import React from 'react';
import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import ODSCard from './ODSCard';

const Impacto = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const odsItems = [
        {
          color: '#E5243B',
          image: '/ods/ODS1.jpg',
          title: 'Fin de la Pobreza',
          description: 'Erradicar la pobreza extrema y garantizar el acceso a servicios básicos y oportunidades para todos.',
        },
        {
          color: '#DDA63A',
          image: '/ods/ODS2.jpg',
          title: 'Hambre Cero',
          description: 'Lograr la seguridad alimentaria, la nutrición adecuada y promover la agricultura sostenible.',
        },
        {
          color: '#4C9F38',
          image: '/ods/ODS3.jpg',
          title: 'Salud y Bienestar',
          description: 'Garantizar una vida saludable y promover el bienestar para todos, abordando enfermedades y mejorando la atención médica.',
        },
        {
          color: '#C5192D',
          image: '/ods/ODS4.jpg',
          title: 'Educación de Calidad',
          description: 'Asegurar el acceso a una educación inclusiva, equitativa y de calidad para todos.',
        },
        {
          color: '#FF3A21',
          image: '/ods/ODS5.jpg',
          title: 'Igualdad de Género',
          description: 'Lograr la igualdad de género y empoderar a mujeres y niñas en todos los niveles.',
        },
        {
          color: '#26BDE2',
          image: '/ods/ODS6.jpg',
          title: 'Agua Limpia y Saneamiento',
          description: 'Garantizar la disponibilidad y gestión sostenible del agua y el saneamiento para todos.',
        },
        {
          color: '#FCC30B',
          image: '/ods/ODS7.jpg',
          title: 'Energía Asequible y No Contaminante',
          description: 'Asegurar el acceso a una energía asequible, sostenible y moderna para todos.',
        },
        {
          color: '#A21942',
          image: '/ods/ODS8.jpg',
          title: 'Trabajo Decente y Crecimiento Económico',
          description: 'Promover el crecimiento económico sostenido, inclusivo y trabajo decente para todos.',
        },
        {
          color: '#FD6925',
          image: '/ods/ODS9.jpg',
          title: 'Industria, Innovación e Infraestructura',
          description: 'Construir infraestructuras resilientes, promover la industrialización inclusiva y sostenible, y fomentar la innovación.',
        },
        {
          color: '#DD1367',
          image: '/ods/ODS10.jpg',
          title: 'Reducción de las Desigualdades',
          description: 'Reducir la desigualdad dentro y entre los países, asegurando la igualdad de oportunidades.',
        },
        {
          color: '#FD9D24',
          image: '/ods/ODS11.jpg',
          title: 'Ciudades y Comunidades Sostenibles',
          description: 'Lograr que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles.',
        },
        {
          color: '#BF8B2E',
          image: '/ods/ODS12.jpg',
          title: 'Producción y Consumo Responsables',
          description: 'Garantizar patrones de producción y consumo sostenibles.',
        },
        {
          color: '#3F7E44',
          image: '/ods/ODS13.jpg',
          title: 'Acción por el Clima',
          description: 'Adoptar medidas urgentes para combatir el cambio climático y sus efectos.',
        },
        {
          color: '#0A97D9',
          image: '/ods/ODS14.jpg',
          title: 'Vida Submarina',
          description: 'Conservar y utilizar sosteniblemente los océanos, mares y recursos marinos.',
        },
        {
          color: '#56C02B',
          image: '/ods/ODS15.jpg',
          title: 'Vida de Ecosistemas Terrestres',
          description: 'Proteger, restaurar y promover un uso sostenible de los ecosistemas terrestres.',
        },
        {
          color: '#00689D',
          image: '/ods/ODS16.jpg',
          title: 'Paz, Justicia e Instituciones Sólidas',
          description: 'Promover sociedades pacíficas e inclusivas para el desarrollo sostenible, facilitar el acceso a la justicia para todos y crear instituciones eficaces, responsables e inclusivas a todos los niveles.',
        },
      ];

      
  return (
    <Box id="impacto" sx={{ padding: 4 }}>
      <Typography variant="h3" component="div" color="primary.main" fontWeight="bold" sx={{ mb: 4, textAlign: 'center' }}>
        VoluntRED y las ODS
      </Typography>
      <Typography
        variant="body1"
        component="div"
        color="text.primary"
        sx={{ mb: 4, fontSize: isMobile ? '1.1rem' : '1.5rem', textAlign: 'center' }}
      >
        En VoluntRED estamos dedicados a promover los Objetivos de Desarrollo Sostenible (ODS) mediante nuestro trabajo. Conectamos a voluntarios con organizaciones sociales que se enfocan en causas alineadas con los 17 ODS, como la reducción de la pobreza, la salud y el bienestar, y la igualdad de género, entre otros. Clasificamos cada proyecto en nuestra plataforma según el ODS al que contribuyen directamente. De esta manera, nuestros usuarios pueden seleccionar el objetivo global al que desean aportar su tiempo y habilidades al buscar oportunidades de voluntariado.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {odsItems.map((item, index) => (
          <Grid 
            item 
            xs={6} 
            sm={4} 
            md={4} 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            key={index}
          >
            <ODSCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Impacto;

