import React from 'react';
import { Box, TextField, Button, Typography, Grid, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function FormularioContacto() {
  return (
    <Box
      sx={{
        p: 4,
        bgcolor: 'background.paper',
        color: 'text.primary',
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: 2,
        maxWidth: 800,
        mx: 'auto',
        my: 4
      }}
    >
      <Typography variant="h4" gutterBottom sx={{
        color: 'text.primary',
        textAlign: 'center',
        fontWeight: 'medium',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 3
      }}>
        <MailOutlineIcon sx={{ mr: 1, fontSize: 40, color: 'blue' }} /> Manda un mensaje
      </Typography>
      <Grid container spacing={2} alignItems="flex-end">
        {['Nombre', 'Email', 'Mensaje'].map((field, index) => (
          <Grid item xs={12} sm={index < 2 ? 6 : 12} key={field}>
            <Typography variant="overline" display="block" sx={{ mb: 1, color: 'text.secondary', fontSize: '1.1rem' }}>
              {field}
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder={field}
              InputProps={{
                endAdornment: index < 2 ? (
                  <InputAdornment position="end">
                    <EmailIcon sx={{ color: 'red', fontSize: 30 }} />
                  </InputAdornment>
                ) : null,
                startAdornment: index === 2 ? (
                  <InputAdornment position="start">
                    <ModeCommentIcon sx={{ color: 'red', fontSize: 30 }} />
                  </InputAdornment>
                ) : null,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  fontSize: '1.1rem', // Larger text inside inputs
                  '& fieldset': {
                    borderColor: 'transparent',
                    transition: 'border-color 0.3s',
                    borderWidth: '2px', // Thicker border for clearer focus
                  },
                  '&:hover fieldset': {
                    borderColor: 'grey.300',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)' // Subtle shadow around fields
                }
              }}
              multiline={field === 'Mensaje'}
              rows={field === 'Mensaje' ? 4 : 1}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              bgcolor: 'primary.main',
              color: 'background.paper',
              textTransform: 'none',
              fontSize: '1.1rem', // Bigger button text
              fontWeight: 'medium',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' // Consistent shadow for button
            }}
            fullWidth
          >
            Enviar Mensaje
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
