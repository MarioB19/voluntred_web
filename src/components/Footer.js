import React from 'react';
import { Box, Typography, IconButton, Grid, Link, useTheme } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FaTiktok } from 'react-icons/fa';
import Image from 'next/image'; // Utilizando Image de Next.js para optimizar la carga de imágenes
import logo from '../../public/logo.png';

export default function Footer() {
  const theme = useTheme();
  const socialLinks = {
    Instagram: 'https://www.instagram.com/voluntred.mx/',
    YouTube: 'https://www.youtube.com/@VoluntRED',
    TikTok: 'https://www.tiktok.com/@voluntred'
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : 'red', // Fondo rojo en modo claro, gris oscuro en modo oscuro
        color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : 'white', // Texto blanco en modo claro, gris en modo oscuro
        p: 3,
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Image src={logo} alt="Logo" width={75} height={75} />
        <Typography variant="h6" sx={{ flexGrow: 1, ml: 2, fontSize: '1.3rem', color: 'inherit' }}>
          <span style={{ color: 'inherit' }}>Volunt</span>
          <span style={{ color: 'inherit', fontWeight: 'bold' }}>RED</span>
        </Typography>
      </Box>
      <Grid container justifyContent="center" spacing={1}>
        {Object.entries(socialLinks).map(([platform, url]) => (
          <Grid item key={platform}>
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: 'inherit' }}>
                {platform === 'Instagram' && <InstagramIcon sx={{ width: 35, height: 35 }} />}
                {platform === 'YouTube' && <YouTubeIcon sx={{ width: 35, height: 35 }} />}
                {platform === 'TikTok' && <FaTiktok style={{ width: 35, height: 35 }} />}
              </IconButton>

            </Link>
          </Grid>
        ))}
      </Grid>
      <Typography variant="caption" sx={{ mt: 3, fontSize: '1.2rem', color: 'inherit' , textAlign : "center"}}>
        © 2024 VoluntRED. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}
