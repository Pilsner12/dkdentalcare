import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import RepublikaLogo from '../assets/icons/rep-bez-kazu-img.svg'; // Import SVG loga
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; // Import ikony pro otevření nového odkazu

const RepublikaBezKazu = () => {
  return (
    <Box
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        position: 'relative', // Umožňuje rozšíření pozadí přes celou šířku
      }}
    >
      {/* Zajišťuje, že obsah bude omezený šířkou pomocí Container */}
      <Container sx={{ maxWidth: 'lg', textAlign: 'center', position: 'relative' }}>
        
        {/* Zobrazení obrázku */}
        <Box sx={{ marginBottom: 3 }}>
          <img 
            src={RepublikaLogo} 
            alt="Republika bez zubního kazu" 
            style={{ width: '200px', height: 'auto', display: 'block', margin: '0 auto' }} 
          />
        </Box>
        
        {/* Text o projektu */}
        <Typography variant="body1" paragraph>
          Naše ordinace plně podporuje osvětu zaměřenou na ústní zdraví, kterou propaguje projekt "Republika bez zubního kazu" řízený Českou stomatologickou komorou. Tento projekt považujeme za skvělou příležitost, jak vzdělávat naše pacienty o prevenci zubních problémů a správné péči o ústní dutinu. Jsme přesvědčeni, že pravidelná péče o zuby a návštěvy u stomatologa jsou klíčové pro udržení zdraví zubů a snížení rizika vzniku zubních kazů. Aktivně se zapojujeme do tohoto projektu, abychom nejen zlepšili ústní zdraví našich pacientů, ale i šířili důležitou osvětu mezi širší veřejností.
        </Typography>

        {/* Tlačítko pro otevření odkazu v novém okně */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<OpenInNewIcon />}
          onClick={() => window.open('https://www.republikabezkazu.cz', '_blank')}
          sx={{
            fontSize: '1rem',
            padding: '10px 20px',
            marginTop: 3,
          }}
        >
          Přejít na web
        </Button>
      </Container>
    </Box>
  );
};

export default RepublikaBezKazu;
