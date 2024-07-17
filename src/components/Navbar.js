import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, List, ListItem, ListItemText, ListItemIcon, Tooltip } from '@mui/material';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';
import logo from '../../public/logo.png';
import HomeIcon from '@mui/icons-material/Home';

import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GroupIcon from '@mui/icons-material/Group';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StarIcon from '@mui/icons-material/Star';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const theme = useTheme();

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  const menuItems = [
    { text: 'Inicio', icon: <HomeIcon />, to: 'inicio' },
    { text: 'Beneficios', icon: <StarIcon />, to: 'beneficios' },
    { text: 'Preguntas Frecuentes', icon: <QuestionAnswerIcon />, to: 'preguntas-frecuentes' },
    { text: 'Impacto', icon: <EmojiPeopleIcon />, to: 'impacto' },
    { text: 'Aliados', icon: <EmojiPeopleIcon />, to: 'aliados' },
    { text: 'Nuestro Equipo', icon: <GroupIcon />, to: 'equipo' },
    { text: 'Involúcrate', icon: <EmojiPeopleIcon />, to: 'involucrate' },
    { text: 'Contáctanos', icon: <ContactMailIcon />, to: 'contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      for (const item of menuItems) {
        const element = document.getElementById(item.to);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(item.to);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar position="fixed" color="primary" sx={{ bgcolor: theme.palette.background.default }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Image src={logo} alt="Logo" width={60} height={60} />
        <Typography variant="h6" sx={{ flexGrow: 1, ml: 2, color: theme.palette.text.primary }}>
          <span style={{ color: '#FF6666' }}>Volunt</span>
          <span style={{ color: '#CC0000' }}>RED</span>
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {menuItems.map((item) => (
            <ScrollLink
              key={item.text}
              to={item.to}
              smooth={true}
              duration={1000}
              spy={true}
              activeClass="active"
              className="nav-link"
              style={{
                margin: '0 10px',
                cursor: 'pointer',
                color: activeSection === item.to ? theme.palette.primary.main : theme.palette.text.primary,
                textDecoration: 'none',
                position: 'relative',
                padding: '5px 0',
              }}
            >
              {item.text}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  bgcolor: theme.palette.primary.main,
                  transform: activeSection === item.to ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </ScrollLink>
          ))}
        </Box>
        <Tooltip title={darkMode ? "Modo claro" : "Modo oscuro"}>
          <IconButton onClick={toggleDarkMode} color="inherit" sx={{ ml: 2 }}>
            {darkMode ? (
              <Brightness7Icon sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'rotate(180deg)' } }} />
            ) : (
              <Brightness4Icon sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'rotate(180deg)' } }} />
            )}
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={toggleDrawer(false)}
              sx={{
                bgcolor: activeSection === item.to ? theme.palette.action.selected : 'transparent',
                '&:hover': {
                  bgcolor: theme.palette.action.hover,
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={1000}
                style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
              >
                <ListItemText primary={item.text} />
              </ScrollLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}