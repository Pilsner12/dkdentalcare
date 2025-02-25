import { Box, Typography, Button } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/src/assets/img/dentist-with-smile-lq.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        position: "relative",
        margin: 0,
      }}
    >
      {/* Overlay pro lepší čitelnost textu */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      />

      {/* Obsah stránky */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h2">Stomatologická péče</Typography>
        <Typography variant="h5" sx={{ mt: 3 }}>
          pro celou Vaši rodinu.
        </Typography>

        {/* Velká tlačítka pro přechod na sekce */}
        <Box sx={{ mt: 20, display: "flex", gap: "50px", justifyContent: "center",  }}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })}
          >
            Objednat
          </Button>

          <Button
            variant="outlined"
            size="large"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Kontaktujte nás
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
