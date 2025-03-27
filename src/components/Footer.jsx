import React from 'react';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpeningTime from '../admin/OpeningTime'; // Import komponenty
import './Footer.css'; // Import CSS souboru

function Footer() {
  return (
    <Box className="footer">
      <Container>
        <Grid container spacing={0} justifyContent="center" alignItems="flex-start" sx={{ mt:5 }}> 
          {/* Logo */}
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <Typography variant="body1" sx={{ mb: 4 }}>
              DK dentalcare s.r.o
            </Typography>
            <img
              src="/assets/icons/dkdc_logo.png"
              alt="DK Dental Care Logo"
              className="footer-logo"
            />
          </Grid>

          {/* Ordinační doba */}
          <Grid item xs={12} sm={6} md={3} textAlign="center">
          <Typography variant="body1" sx={{ mb: 2}}>
              Ordinační doba:
            </Typography>
          
            <OpeningTime />
          </Grid>

          {/* Adresa  */}
          <Grid item xs={12} sm={6} md={3} textAlign="center">

          <Typography variant="body1" sx={{ mb: 4}}>
          Kde nás najdete:
            </Typography>
            <Typography variant="body1" sx={{ mt: 4 }}>Adresa:</Typography>
            <Typography variant="body2">Branská 55, 344 01 Domažlice</Typography>
            
            <Typography variant="body1" sx={{ mt: 4 }}>Kontakt:</Typography>
            <Typography variant="body2">info@dkdentalcare.cz</Typography>
            <Typography variant="body2">+420 379 725 564</Typography>

          </Grid>

          {/* Kontakt */}
          <Grid item xs={12} sm={6} md={3} textAlign="center">
          <Typography variant="body1" sx={{ mb: 4 }}>
             Zde na mapě:
            </Typography>
          <Box className="footer-map">
        
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.328347695357!2d12.927771777021805!3d49.44083917137848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470aea6cf9916fc1%3A0x40179a5a7f08b40!2zQnJhbnNrw6EgNTUsIDM0NC4wMSBEb21hxI1saWNlIDE!5e0!3m2!1scs!2scz!4v1711545146277"
      width="100%"
      height="100%"
     
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  
  </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
