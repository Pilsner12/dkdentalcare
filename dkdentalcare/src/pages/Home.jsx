import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/src/assets/img/dentist-with-smile-lq.jpg')", // 🖼 Cesta k obrázku
        backgroundSize: "cover", // Pokryje celou šířku i výšku
        backgroundPosition: "center", // Udržuje obrázek v centru
        backgroundRepeat: "no-repeat",
        width: "100vw", // Šířka přes celou šířku prohlížeče
        height: "100vh", // Výška přes celou výšku okna
        position: "relative", // Pozice pro overlay
        margin: 0, // Zajistí, že není žádné odsazení
      }}
    >
      {/* Přidáme overlay pro lepší čitelnost textu */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Poloprůhledný tmavý overlay
        }}
      />

      {/* Obsah stránky */}
      <Box sx={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", color: "white", textAlign: "center" }}>
        <Typography variant="h2">Stomatologická péče</Typography>
        <Typography variant="h5" sx={{ mt: 3 }}>pro celou Vaši rodinu.</Typography>
      </Box>
    </Box>
  );
}

export default Home;
