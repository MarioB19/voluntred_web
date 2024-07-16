import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FormularioContacto from './FormularioContacto';

export default function Contacto() {
  return (
    <Box
      id="contacto"
      sx={{
        py: 8,
        bgcolor: 'background.paper',
        color: 'text.primary',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="div" color="primary.main" fontWeight="bold" sx={{ mb: 6, textAlign: 'center' }}>
        Contacto
      </Typography>

      <Grid container spacing={10} justifyContent="center">
        <Grid item xs={12} sm={6} display="flex" flexDirection="column" alignItems="center">
          <IconButton sx={{ color: 'white', bgcolor: 'blue', mb: 1, '&:hover': { bgcolor: 'blue' }, borderRadius: '50%' }}>
            <EmailIcon />
          </IconButton>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontSize: '1.5rem' }}>voluntred@gmail.com</Typography>
        </Grid>
        <Grid item xs={12} sm={6} display="flex" flexDirection="column" alignItems="center">
          <IconButton sx={{ color: 'white', bgcolor: 'blue', mb: 1, '&:hover': { bgcolor: 'blue' }, borderRadius: '50%' }}>
            <PhoneIcon />
          </IconButton>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontSize: '1.5rem' }}>
            +52 33 2179-0549<br />

          </Typography>
        </Grid>
      </Grid>
      <FormularioContacto></FormularioContacto>
    </Box>
  );
}
