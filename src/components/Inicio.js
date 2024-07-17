import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, Typography, Card, useMediaQuery, useTheme } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import dynamic from 'next/dynamic';

const LazyYouTube = dynamic(() => import('./LazyYouTube'), { ssr: false });

const Inicio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const items = [
    {
      name: "Quiénes Somos",
      description: "VoluntRED es una aplicación móvil que conecta a personas interesadas en el voluntariado con asociaciones de carácter social del estado de Jalisco, impulsando la participación de ciudadanos a eventos de voluntariado, actuando como un catalizador para revalorizar y potencializar el voluntariado, logrando que las necesidades de comunidades y grupos vulnerables sean atendidas, contribuyendo al desarrollo de cada uno de los indicadores establecidos en la agenda 2030 por la ONU.",
      type: "text",
      image: "/quienes-somos.png"
    },
    {
      name: "Video de presentación",
      description: "Pitch de Presentación | VoluntRED",
      type: "video",
      src: "https://www.youtube-nocookie.com/embed/1XVrmduzO2o?si=E99rB0id-IsLosmy"
    },
    {
      name: "Misión",
      description: "Facilitar y fomentar la participación activa de individuos altruistas en eventos de voluntariado, conectando de manera efectiva a personas con causas significativas y a organizaciones sin fines de lucro en la Zona Metropolitana de Guadalajara (ZMG), México. Nos comprometemos a crear una plataforma inclusiva y accesible que contribuya al desarrollo de comunidades locales, promoviendo un espíritu solidario y generando un impacto positivo en la sociedad.",
      type: "text",
      image: "/mision.png"
    },
    {
      name: "Visión",
      description: "Aspiramos a ser la plataforma líder en México para la conexión entre voluntarios y organizaciones sociales, siendo reconocidos por nuestra contribución significativa al aumento de la participación en eventos de voluntariado. Buscamos construir una red sólida y colaborativa que inspire a la comunidad a comprometerse activamente en la construcción de un futuro más sostenible, consciente y equitativo. Nuestra visión es ser un catalizador para el cambio positivo, creando un impacto duradero en la sociedad mexicana.",
      type: "text",
      image: "/vision.png"
    }
  ];

  return (
    <Box id="inicio" sx={{ 
      width: '100%', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      bgcolor: 'background.default', 
      mt: 8, 
      px: { xs: 4, sm: 6, md: 8 },
      position: 'relative'
    }}>
      <Carousel
        animation="slide"
        navButtonsAlwaysVisible
        autoPlay={false}
        fullHeightHover={false}
        sx={{ 
          width: '100%', 
          maxWidth: '1200px',
        }}
        indicatorContainerProps={{
          style: {
            marginTop: '20px',
            zIndex: 1,
          }
        }}
        NavButton={({ onClick, className, style, next, prev }) => {
          return (
            <Box
              onClick={onClick}
              className={className}
              sx={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
                borderRadius: '50%',
                p: 1,
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
                left: next ? 'auto' : { xs: 4, sm: -10 },
                right: prev ? 'auto' : { xs: 4, sm: -10 },
              }}
            >
              {next && <NavigateNextIcon sx={{ fontSize: { xs: 30, sm: 40 } }} />}
              {prev && <NavigateBeforeIcon sx={{ fontSize: { xs: 30, sm: 40 } }} />}
            </Box>
          )
        }}
      >
        {items.map((item, index) => (
          <Card key={index} sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            overflow: 'hidden', 
            boxShadow: 3, 
            borderRadius: 4, 
            bgcolor: theme.palette.mode === 'dark' ? 'black' : 'white',
            mx: { xs: 2, sm: 4 },
          }}>
            {item.type === 'video' ? (
              <>
                <Box sx={{ width: '100%', paddingTop: '56.25%', position: 'relative' }}>
                  {isClient && <LazyYouTube src={item.src} title={item.name} />}
                </Box>
                <Box sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant={isMobile ? "h5" : "h4"} component="div" sx={{ color: '#4CAF50', mt: 2, fontWeight: 'bold' }}>
                    {item.name}
                  </Typography>
                  <Typography variant={isMobile ? "h6" : "h5"} sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black', fontWeight: 'bold' }}>
                    {item.description}
                  </Typography>
                </Box>
              </>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', height: '100%' }}>
                <Box sx={{
                  width: isMobile ? '100%' : '50%',
                  height: isMobile ? '200px' : 'auto',
                  position: 'relative',
                }}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                  />
                </Box>
                <Box sx={{ 
                  width: isMobile ? '100%' : '50%', 
                  p: 4, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  bgcolor: theme.palette.mode === 'dark' ? 'black' : 'white',
                }}>
                  <Typography variant={isMobile ? "h5" : "h4"} component="div" sx={{ color: '#4CAF50', mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
                    {item.name}
                  </Typography>
                
                  <Typography variant={isMobile ? "h6" : "h5"} sx={  { color: theme.palette.mode === 'dark' ? 'white' : 'black', fontWeight: 'bold', textAlign: 'justify' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            )}
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default Inicio;