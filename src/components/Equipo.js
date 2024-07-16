import { Box, Typography } from '@mui/material';

export default function Equipo() {
  return (
    <Box id="equipo" sx={{ py: 8, bgcolor: 'info.light' }}>
      <Typography variant="h2" color="info.dark">Nuestro Equipo</Typography>
      <Typography>Conoce a las personas detrás de VoluntRED que hacen todo esto posible.</Typography>
    </Box>
  );
}