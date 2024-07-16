import { Box, Typography } from '@mui/material';

export default function Beneficios() {
  return (
    <Box id="beneficios" sx={{ py: 8, bgcolor: 'info.light' }}>
      <Typography variant="h2" color="info.dark">Beneficios</Typography>
      <Typography>Fácil de usar, conéctate con voluntarios y impacta positivamente.</Typography>
    </Box>
  );
}