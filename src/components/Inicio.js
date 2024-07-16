import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, useMediaQuery, IconButton } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Inicio = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const items = [
    {
      name: "Video de presentación",
      description: "Pitch de Presentación | VoluntRED",
      type: "video",
      src: "https://drive.google.com/file/d/1v9r4Rc1DVG90NPOipUkCugQxIM7LR8hK/preview"
    },
    {
      name: "Quiénes Somos",
      description: "VoluntRED es una aplicación móvil que conecta a personas interesadas en el voluntariado con asociaciones de carácter social del estado de Jalisco, impulsando la participación de ciudadanos a eventos de voluntariado, actuando como un catalizador para revalorizar y potencializar el voluntariado, logrando que las necesidades de comunidades y grupos vulnerables sean atendidas, contribuyendo al desarrollo de cada uno de los indicadores establecidos en la agenda 2030 por la ONU.",
      type: "text",
      image: "../../quienes-somos.png"
    },
    {
      name: "Misión",
      description: "Facilitar y fomentar la participación activa de individuos altruistas en eventos de voluntariado, conectando de manera efectiva a personas con causas significativas y a organizaciones sin fines de lucro en la Zona Metropolitana de Guadalajara (ZMG), México. Nos comprometemos a crear una plataforma inclusiva y accesible que contribuya al desarrollo de comunidades locales, promoviendo un espíritu solidario y generando un impacto positivo en la sociedad.",
      type: "text",
      image: "../../mision.png"
    },
    {
      name: "Visión",
      description: "Aspiramos a ser la plataforma líder en México para la conexión entre voluntarios y organizaciones sociales, siendo reconocidos por nuestra contribución significativa al aumento de la participación en eventos de voluntariado. Buscamos construir una red sólida y colaborativa que inspire a la comunidad a comprometerse activamente en la construcción de un futuro más sostenible, consciente y equitativo. Nuestra visión es ser un catalizador para el cambio positivo, creando un impacto duradero en la sociedad mexicana.",
      type: "text",
      image: "../../vision.png"
    }
  ];

  return (
    <Box id = "inicio" sx={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'background.default', mt: 8 }}>
      <Carousel
        animation="slide"
        navButtonsAlwaysVisible
        autoPlay={false}
        sx={{ width: '90%', height: '90%' }}
        indicatorContainerProps={{
          style: {
            marginTop: '20px',
          }
        }}
        navButtonsProps={{
          style: {
            backgroundColor: 'transparent',
            color: '#000',
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#000',
            },
            zIndex: 10,
            fontSize: '2rem'
          }
        }}
        PrevIcon={<NavigateBeforeIcon sx={{ fontSize: 60 }} />}
        NextIcon={<NavigateNextIcon sx={{ fontSize: 60 }} />}
      >
        {items.map((item, index) => (
          <Card key={index} sx={{ height: '100%', display: 'flex', flexDirection: isMobile ? 'column' : 'row', overflow: 'hidden', boxShadow: 3, borderRadius: 4 }}>
           {item.type === 'video' ? (
              <>
                <Box sx={{ width: '100%', paddingTop: '56.25%', position: 'relative', height: '0', overflow: 'hidden' }}>
                  <CardMedia
                    component="iframe"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                    src={item.src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 4 }}>
                  <Typography gutterBottom variant="h3" component="div" color="primary.main" fontWeight="bold" sx={{ mt: 2, textAlign: 'center' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </>
            )  : (
              <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', height: '100%' }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: isMobile ? '100%' : '50%',
                    height: isMobile ? 'auto' : '100%',
                    objectFit: 'cover',
                  }}
                  image={item.image}
                  alt={item.name}
                />
                <CardContent sx={{ width: isMobile ? '100%' : '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 4, textAlign: 'center' }}>
                  <Typography gutterBottom variant="h3" component="div" color="primary.main" fontWeight="bold">
                    {item.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mt: 2, lineHeight: 1.8 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Box>
            )}
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default Inicio;
