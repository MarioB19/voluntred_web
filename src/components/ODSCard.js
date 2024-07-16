import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Card = styled(Box)(({ theme }) => ({
  perspective: '1000px',
  '&:hover .inner': {
    transform: 'rotateY(180deg)',
  },
}));

const Inner = styled(Box)(({ theme, color }) => ({
  position: 'relative',
  width: '300px',  // Ajustamos el ancho a 300px
  height: '300px',  // Ajustamos la altura a 300px para hacerla cuadrada
  textAlign: 'center',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',
  borderRadius: '8px',
  boxShadow: theme.shadows[3],
  backgroundColor: color,
}));

const Front = styled(Box)(({ theme, image }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2rem',
  color: '#fff',
  borderRadius: '8px',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const Back = styled(Box)(({ theme, color }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  transform: 'rotateY(180deg)',
  borderRadius: '8px',
  padding: theme.spacing(2),
  backgroundColor: color,
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',  // Título más grande
  fontWeight: 'bold',
  textAlign: 'center',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  textAlign: 'center',
  '& span': {
    fontWeight: 'bold',  // Palabra "Objetivo" en negritas
  },
}));

const ODSCard = ({ color, image, title, description }) => (
  <Card>
    <Inner className="inner" color={color}>
      <Front image={image} />
      <Back color={color}>
        <Title variant="h6" component="div">
          {title}
        </Title>
        <Description variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'center' }}>
          <span>Objetivo:</span> {description}
        </Description>
      </Back>
    </Inner>
  </Card>
);

export default ODSCard;
