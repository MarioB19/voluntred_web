import { Box, Typography } from '@mui/material';

export default function Contacto() {
  return (
    <Box id="contacto" sx={{ py: 8, bgcolor: 'secondary.light' }}>
      <Typography variant="h2" color="secondary.dark">Contáctanos</Typography>
      <Typography>Tu correo electrónico</Typography>
      <Typography>Tu mensaje</Typography>
    </Box>
  );
}