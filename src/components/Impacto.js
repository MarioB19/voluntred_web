import { Box, Typography } from '@mui/material';

export default function Impacto() {
  return (
    <Box id="impacto" sx={{ py: 8, bgcolor: 'secondary.light' }}>
      <Typography variant="h2" color="secondary.dark">Impacto</Typography>
      <Typography>Nuestro impacto ha alcanzado a miles de personas y comunidades alrededor del mundo.</Typography>
    </Box>
  );
}