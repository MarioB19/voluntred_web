import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Card = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
  height: '450px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: theme.shadows[2],
  border: `1px solid ${theme.palette.primary.main}`,
}));

const Photo = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '50%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const Divider = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '2px',
  backgroundColor: theme.palette.primary.main,
}));

const Description = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '50%',
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: theme.spacing(2.5),
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '50px',
  backgroundColor: 'rgba(0, 0, 255, 0.5)',
  borderRadius: '0 0 12px 12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  transition: 'transform 0.5s',
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
  color: '#4CAF50',
  cursor: 'pointer',
  transition: 'color 0.3s, transform 0.3s',
  '&:hover': {
    color: 'rgba(255, 255, 255, 0.7)',
    transform: 'scale(1.1)',
  },
}));

const MemberCard = ({ name, position, degree, description, linkedIn, instagram, image }) => {
  const theme = useTheme();
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Card
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <Photo sx={{ backgroundImage: `url(${image})` }} />
      <Divider />
      <Description>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
          {name}
        </Typography>
        <Typography variant="body1" component="div" sx={{ color: 'red', fontWeight: 'bold', mb: 1 }}>
          {position}
        </Typography>
        <Typography variant="body2" component="div" sx={{ fontStyle: 'italic', color: 'green', mb: 1 }}>
          {degree}
        </Typography>
        <Typography variant="body2" component="div" sx={{ color: theme.palette.text.secondary }}>
          {description}
        </Typography>
        <Overlay style={{ transform: showOverlay ? 'translateY(0)' : 'translateY(100%)' }}>
          <SocialIcon>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize="large" />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon fontSize="large" />
            </a>
          </SocialIcon>
        </Overlay>
      </Description>
    </Card>
  );
};

export default MemberCard;
