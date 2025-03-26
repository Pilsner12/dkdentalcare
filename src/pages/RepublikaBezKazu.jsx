import React from 'react';
import { Typography, Button } from '@mui/material';
import RepublikaLogo from '../assets/icons/rep-bez-kazu-img.svg'; 
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; 

const RepublikaBezKazu = () => {
  return (
    <div style={{ paddingTop: 5, paddingBottom: 5 }}>
      <div style={{ maxWidth: 'lg', textAlign: 'center', position: 'relative', margin: '0 auto' }}>
        
        <div style={{ marginBottom: 4 }}>
          <img 
            src={RepublikaLogo} 
            alt="Republika bez zubního kazu" 
            style={{ width: '200px', height: 'auto', display: 'block', margin: '0 auto' }} 
          />
        </div>

        <Typography
          variant="h5"
          sx={{
            color: '#333',
            fontWeight: 400,
            lineHeight: 1.75,
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '1.15rem',
            letterSpacing: '0.5px',
            marginBottom: 4,
            textAlign: 'center',
          }}
        >
          Naše ordinace plně podporuje osvětu zaměřenou na ústní zdraví, kterou propaguje projekt &quotRepublika bez zubního kazu&quot řízený Českou stomatologickou komorou. Tento projekt považujeme za skvělou příležitost, jak vzdělávat naše pacienty o prevenci zubních problémů a správné péči o ústní dutinu...
        </Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<OpenInNewIcon />}
          onClick={() => window.open('https://www.republikabezkazu.cz', '_blank')}
          sx={{
            fontSize: '1rem',
            padding: '12px 25px',
            marginTop: 3,
            fontWeight: 600,
            borderRadius: '0px',
            textTransform: 'none',
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)',
            transition: 'background-color 0.5s ease, box-shadow 0.3s ease',
            '&:hover': {
              backgroundColor: '#388E3C',
              boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          Přejít na web
        </Button>
      </div>
    </div>
  );
};

export default RepublikaBezKazu;
