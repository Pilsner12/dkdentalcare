import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpeningTime from '../admin/OpeningTime'; // Import komponenty

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#292b2c', // tmavší pozadí pro patičku
        color: 'white',
        py: 4, 
        mt: 'auto',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Zajistí zalamování na menších obrazovkách
          justifyContent: 'space-between', // Rovnoměrné rozložení boxů
          textAlign: 'center',
        }}
      >
        {/* Box 1: Logo a název */}
        <Box
          sx={{
            flex: '1 1 200px',
            mb: 2, 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1, // Mezera mezi logem a textem
              cursor: 'pointer',
            }}
          >
            <img
              src="/assets/icons/dkdc_logo.png" // Cesta k logu
              alt="DK Dental Care Logo"
              style={{ height: 50 }} // Nastavení velikosti loga
            />
            
          </Box>
         
        </Box>

        {/* Box 2: Ordinační doba */}
        <Box class name="opening-time" 
        sx={{ flex: '1 1 200px', mb: 2 }}>
          <OpeningTime /> {/* Použití komponenty */}
        </Box>

        {/* Box 3: Odkazy na sociální sítě */}
        <Box sx={{ flex: '1 1 200px', mb: 2 }}>
          <IconButton
            color="inherit"
            href="https://www.facebook.com"
            target="_blank"
            sx={{ mx: 1 }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.twitter.com"
            target="_blank"
            sx={{ mx: 1 }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com"
            target="_blank"
            sx={{ mx: 1 }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com"
            target="_blank"
            sx={{ mx: 1 }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>

        {/* Box 4: Kontakt */}
        <Box sx={{ flex: '1 1 200px', mb: 2 }}>
          <Typography variant="body2">Kontakt:</Typography>
          <Typography variant="body2">info@dkdentalcare.cz</Typography>
          <Typography variant="body2">+420 123 456 789</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;