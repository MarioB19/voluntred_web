import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MemberCard from './MemberCard';

const Equipo = () => (
    <Box id="equipo" sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="h3" component="div" color="primary.main" fontWeight="bold" sx={{ mt : 6, mb: 4, textAlign: 'center' }}>
            Nuestro Equipo
        </Typography>


        <Grid container spacing={3} justifyContent="center">
            <Grid item>
                <MemberCard
                    name="Mario Brandon Muro Ramos"
                    position="Founder & Chief Executive Officer (CEO)"
                    degree="Tecnólogo en Desarrollo de Software"
                    description="Agente de cambio apasionado por tecnología y de sus implicaciones y aplicaciones en el ambito social, innovando y creando tecnología."
                    linkedIn="https://www.linkedin.com/in/brandonmuro/"
                    instagram="https://www.instagram.com/brandon.muro.mx/"
                    image="../../team/brandonMuro.jpg"
                />
            </Grid>
            <Grid item>
                <MemberCard
                    name="Kassandra Edith Muro Ramos"
                    position="Chief Business Officer (CBO) "
                    degree="Ingeniera en Alimentos y Biotecnología"
                    description="Coordinadora Nacional de Voluntariado en la Red Internacional de Promotores ODS y curadora del Hub de Guadalajara de Global Shapers."
                    linkedIn="https://www.linkedin.com/in/kassandramuro/"
                    instagram="https://www.instagram.com/kass.muro/"
                    image="../../team/kassandraMuro.jpg"
                />
            </Grid>

            <Grid item>
                <MemberCard
                    name="Omar Mendoza Hernandez"
                    position="Desarrollador de Software"
                    degree="Tecnólogo en Desarrollo de Software"
                    description="Desarrollador de software apasionado por innovar y optimizar soluciones tecnológicas eficientes y escalables, logrando un cambio positivo."
                    linkedIn="https://www.linkedin.com/"
                    instagram="https://www.instagram.com/omarh__23/"
                    image="../../team/omarMendoza.jpg"
                />
            </Grid>

        </Grid>
    </Box>
);

export default Equipo;
