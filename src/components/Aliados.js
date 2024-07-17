import React from 'react';
import { Box, useTheme, styled, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomBox = styled(Box)(({ theme }) => ({
  width: '400px',
  height: 'auto',  // Cambiado a auto para acomodar el texto y el carrusel
  margin: 'auto',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  position: 'relative',
  display: 'flex',
  flexDirection: 'column', // Cambiado a columna para apilar texto y carrusel
  alignItems: 'center',
  justifyContent: 'center',
}));

const CarouselImage = styled('img')(({ theme }) => ({
  borderRadius: '10px',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)', 
  },
}));

const StyledArrowButton = styled('button')(({ theme }) => ({
  background: theme.palette.background.default, 
  color: theme.palette.text.secondary,
  border: '1px solid', 
  borderColor: theme.palette.divider,
  cursor: 'pointer',
  '&:hover': {
    background: theme.palette.action.hover, 
    color: theme.palette.text.primary, 
  },
  position: 'absolute',
  zIndex: 1,
  width: '30px',
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%', 
}));

const Aliados = () => {
  const theme = useTheme();

  const items = [
    {
      image: '../../aliados/redODS.png',
      link: 'https://promotoresods.org/',
    },
    {
      image: '../../aliados/globalShapers.png',
      link: 'https://www.globalshapers.org/hubs',
    }
  ];

  return (
    <CustomBox id="aliados">
        <Typography variant="h3" component="div" color="primary.main" fontWeight="bold" sx={{ mb: 4, textAlign: 'center' }}>
        Nuestros Aliados
      </Typography>
  

      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        stopOnHover
        showIndicators={true}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <StyledArrowButton onClick={onClickHandler} style={{ top: '10px', left: '10px' }}>
              <ArrowBackIosIcon fontSize="small" />
            </StyledArrowButton>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <StyledArrowButton onClick={onClickHandler} style={{ bottom: '10px', right: '10px' }}>
              <ArrowForwardIosIcon fontSize="small" />
            </StyledArrowButton>
          )
        }
      >
        {items.map((item, index) => (
          <Box
            key={index}
            component="a"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CarouselImage src={item.image} alt={`carousel-item-${index}`} />
          </Box>
        ))}
      </Carousel>
    </CustomBox>
  );
};

export default Aliados;
