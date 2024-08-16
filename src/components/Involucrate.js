import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Involucrate() {
  return (
    <Box
      id="involucrate"
      sx={{
        py: { xs: 4, md: 8 },
        px: 2,
        bgcolor: 'background.default',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" component="div" color="primary.main" fontWeight="bold" sx={{ mb: 4, textAlign: 'center' }}>
        Involúcrate
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.primary', fontSize: { xs: '1.3rem', md: '1.3rem' } }}>
        Actualmente estamos buscando personas comprometidas que quieran unirse a nuestra causa.
        Es por ello, que les brindaremos la oportunidad de probar nuestro prototipo, y que nos puedan brindar retroalimentaciones,
        igualmente de que estarán en la lista de espera para contar con acceso anticipado a la Aplicación Móvil.
        <Box component="span" sx={{ display: 'block', fontWeight: 'bold', fontSize: '1.5rem', mt: 2 }}>
          ¡Regístrate como Voluntario y se parte del cambio con VoluntRED!
        </Box>
      </Typography>
      <Card
        sx={{
          maxWidth: 300,
          mx: 'auto',
          bgcolor: 'background.paper',
          boxShadow: 2,
          borderRadius: 2,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
          }
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <FavoriteIcon sx={{ fontSize: 40, color: 'error.main', mb: 2 }} />
          <Typography variant="h5" component="div" sx={{ color: 'text.primary', fontSize: '1.3rem', mb: 2 }}>
            ¡Únete a Nosotros!
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="error"
            href="https://forms.gle/UFwM51GJZwKcRK178"
            target="_blank"  
            rel="noopener noreferrer"  
            sx={{
              mt: 2,
              py: 1,
              transition: 'background-color 0.3s ease-in-out',
              '&:hover': {
                bgcolor: 'error.dark'
              }
            }}
          >
            REGÍSTRATE
          </Button>

        </CardContent>
      </Card>
    </Box>
  );
}