import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {/* Informace o stránkách */}
        <Typography variant="body2" sx={{ mb: 2 }}>
          © 2025 DK Dental Care | Všechna práva vyhrazena
        </Typography>

        {/* Odkazy na další informace */}
        <Box sx={{ mb: 2 }}>
          <Link href="/about" color="inherit" sx={{ mx: 2 }}>
            O nás
          </Link>
          <Link href="/privacy-policy" color="inherit" sx={{ mx: 2 }}>
            Zásady ochrany osobních údajů
          </Link>
          <Link href="/terms-of-service" color="inherit" sx={{ mx: 2 }}>
            Podmínky použití
          </Link>
        </Box>

        {/* Odkazy na sociální sítě */}
        <Box>
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
      </Container>
    </Box>
  );
}

export default Footer;
