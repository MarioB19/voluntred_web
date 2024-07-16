import { Box, Typography } from '@mui/material';

export default function PreguntasFrecuentes() {
  return (
    <Box id="preguntas-frecuentes" sx={{ py: 8, bgcolor: 'primary.light' }}>
      <Typography variant="h2" color="primary.dark">Preguntas Frecuentes</Typography>
      <Typography>Aquí respondemos las preguntas más comunes sobre nuestro servicio.</Typography>
    </Box>
  );
}