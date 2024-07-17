import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/system';

const Card = styled(Box)(({ theme }) => ({
  perspective: '1000px',
  width: '100%',
  '&:hover .inner': {
    transform: 'rotateY(180deg)',
  },
}));

const Inner = styled(Box)(({ theme, color }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '100%', // Esto mantiene la relación de aspecto 1:1
  textAlign: 'center',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',
  borderRadius: '8px',
  boxShadow: theme.shadows[3],
  backgroundColor: color,
}));

const Face = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
});

const Front = styled(Face)(({ image }) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const Back = styled(Face)(({ color }) => ({
  flexDirection: 'column',
  color: '#fff',
  transform: 'rotateY(180deg)',
  padding: '8px',
  backgroundColor: color,
}));

const Title = styled((props) => <Typography {...props} />)(({ theme, isMobile }) => ({
  fontSize: isMobile ? '1rem' : '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
}));

const Description = styled((props) => <Typography {...props} />)(({ theme, isMobile }) => ({
  fontSize: isMobile ? '0.6rem' : '1.5rem',
  textAlign: 'center',
  '& span': {
    fontWeight: 'bold',
  },
}));

const ODSCard = ({ color, image, title, description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card>
      <Inner className="inner" color={color}>
        <Front image={image} />
        <Back color={color}>
          <Title isMobile={isMobile} variant="h6" component="div">
            {title}
          </Title>
          <Description isMobile={isMobile} variant="body2">
            <span>Objetivo:</span> {description}
          </Description>
        </Back>
      </Inner>
    </Card>
  );
};

export default ODSCard;
