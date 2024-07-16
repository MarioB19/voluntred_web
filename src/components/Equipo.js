import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MemberCard from './MemberCard';

const Equipo = () => (
    <Box id="equipo" sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="h3" component="div" color="primary.main" fontWeight="bold" sx={{ mb: 4, textAlign: 'center' }}>
            Nuestro Equipo
        </Typography>


        <Grid container spacing={3} justifyContent="center">
            <Grid item>
                <MemberCard
                    name="Mario Brandon Muro Ramos"
                    position="Fundador & Chief Executive Officer (CEO)"
                    degree="Tecnólogo en Desarrollo de Software"
                    description="Agente de cambio apasionado de la tecnología y de sus implicaciones y aplicaciones en el ambito social, para lograr un impacto positivo."
                    linkedIn="https://www.linkedin.com/in/brandonmuro/"
                    instagram="https://www.instagram.com/brandon_mur_/"
                    image="../../team/brandonMuro.jpg"
                />
            </Grid>
            <Grid item>
                <MemberCard
                    name="Omar Mendoza Hernandez"
                    position="Desarrollador de Software"
                    degree="Tecnólogo en Desarrollo de Software"
                    description="Desarrollador de software apasionado por innovar y optimizar soluciones tecnológicas eficientes y escalables, logrando un cambio positivo"
                    linkedIn="https://www.linkedin.com/"
                    instagram="https://www.instagram.com/omarh__23/"
                    image="../../team/omarMendoza.jpg"
                />
            </Grid>

        </Grid>
    </Box>
);

export default Equipo;
