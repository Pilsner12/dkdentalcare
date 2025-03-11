import { Box, Typography, Container, Button } from '@mui/material';
import RepublikaLogo from '../assets/icons/rep-bez-kazu-img.svg'; // Import SVG loga
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; // Import ikony pro otevření nového odkazu

const RepublikaBezKazu = () => {
  return (
    <Box
      sx={{
        paddingTop: 5, // Zvýšení odsazení
        paddingBottom: 5, // Zvýšení odsazení
        
      }}
    >
      <Container sx={{ maxWidth: 'lg', textAlign: 'center', position: 'relative' }}>
        
        {/* Zobrazení obrázku */}
        <Box sx={{ marginBottom: 4 }}>
          <img 
            src={RepublikaLogo} 
            alt="Republika bez zubního kazu" 
            style={{ width: '200px', height: 'auto', display: 'block', margin: '0 auto' }} 
          />
        </Box>

        {/* Text o projektu - Moderní design */}
        <Typography
          variant="h5"
          sx={{
            color: '#333',
            fontWeight: 400,
            lineHeight: 1.75, // Zvýšení řádkování pro lepší čitelnost
            maxWidth: '800px', // Nastavení maximální šířky pro lepší přehlednost
            margin: '0 auto',
            fontSize: '1.15rem',
            letterSpacing: '0.5px',
            marginBottom: 4,
            fontFamily: '"Roboto", sans-serif',
            textAlign: 'center',
          }}
        >
          Naše ordinace plně podporuje osvětu zaměřenou na ústní zdraví, kterou propaguje projekt "Republika bez zubního kazu" řízený Českou stomatologickou komorou. Tento projekt považujeme za skvělou příležitost, jak vzdělávat naše pacienty o prevenci zubních problémů a správné péči o ústní dutinu. Jsme přesvědčeni, že pravidelná péče o zuby a návštěvy u stomatologa jsou klíčové pro udržení zdraví zubů a snížení rizika vzniku zubních kazů. Aktivně se zapojujeme do tohoto projektu, abychom nejen zlepšili ústní zdraví našich pacientů, ale i šířili důležitou osvětu mezi širší veřejností.
        </Typography>

        {/* Tlačítko pro přechod na web */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<OpenInNewIcon />}
          onClick={() => window.open('https://www.republikabezkazu.cz', '_blank')}
          sx={{
            fontSize: '1rem',
            padding: '12px 25px',
            marginTop: 3, // Větší mezera mezi textem a tlačítkem
            fontWeight: 600,
            borderRadius: '0px', // Zaoblené rohy pro moderní vzhled
            textTransform: 'none',
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)', // Jemný stín pro tlačítko
            transition: 'background-color 0.5s ease, box-shadow 0.3s ease', // Hladký přechod při hoveru
            '&:hover': {
              backgroundColor: '#388E3C', // Tmavší zelená při hoveru
              boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          Přejít na web
        </Button>
      </Container>
    </Box>
  );
};

export default RepublikaBezKazu;
