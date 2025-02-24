import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // 🆕 Ikona pro zavření
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Domů", path: "/" },
    { text: "O nás", path: "/about" },
    { text: "Kontakt", path: "/contact" },
  ];

  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        
        {/* Navigace */}
        <AppBar position="static" sx={{ boxShadow: "none", margin: 0, padding: 0 }}>
          <Container maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: 0 }}>
              
              {/* Logo jako odkaz na hlavní stránku */}
              <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "inherit" }}>
                Moje Webová Aplikace
              </Typography>

              {/* Menu - skryté na mobilu */}
              <Box sx={{ display: { xs: "none", md: "flex" }, padding: 0 }}>
                {menuItems.map((item) => (
                  <Button key={item.text} color="inherit" component={Link} to={item.path} sx={{ padding: 0 }}>
                    {item.text}
                  </Button>
                ))}
              </Box>

              {/* Ikona hamburgeru pro mobil */}
              <IconButton 
                color="inherit" 
                edge="end" 
                onClick={handleDrawerToggle} 
                sx={{ display: { xs: "block", md: "none" }, padding: 0 }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Mobilní boční menu (Drawer) */}
        <Drawer 
          anchor="top" 
          open={mobileOpen} 
          onClose={handleDrawerToggle}
          PaperProps={{ sx: { width: "100%" } }} // 🛠 Nastaví šířku na 100%
        >
          {/* Horní část menu s tlačítkem Zavřít */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigace v menu */}
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component={Link} to={item.path} onClick={handleDrawerToggle}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Hlavní obsah */}
        <Box sx={{
          backgroundImage: "url('/src/assets/img/dentist-with-smile-lq.jpg')", // Cesta k obrázku
          backgroundSize: "cover", // Pokrývá celou šířku i výšku
          backgroundPosition: "center", // Udržuje obrázek v centru
          backgroundRepeat: "no-repeat",
          width: "100vw", // Šířka přes celý viewport
          height: "100vh", // Výška přes celý viewport
          position: "relative",
        }}>
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
          
          {/* Obsah stránky - omezený kontejner */}
          <Box sx={{
            position: "absolute", 
            color: "white", 
            textAlign: "center", 
            top: "20%", // Posuneme text 20% od horního okraje
            left: "50%", 
            transform: "translateX(-50%)", // Zarovnání na střed
            maxWidth: "900px", // Omezení šířky obsahu
            width: "100%", // Šířka obsahu přes celý kontejner
            padding: "0 20px", // Okraje pro lepší vzhled
          }}>
            <Typography variant="h2"> Stomatologická péče </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>pro celou Vaši rodinu.</Typography>
          </Box>
        </Box>

        {/* Paticka */}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
