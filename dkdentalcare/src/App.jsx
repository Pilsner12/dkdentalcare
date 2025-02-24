import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppBar, Toolbar, Container, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Domů", id: "home" },
    { text: "O nás", id: "about" },
    { text: "Kontakt", id: "contact" },
  ];

  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        
        {/* Navigační lišta */}
        <AppBar position="fixed" sx={{ backgroundColor: "white", boxShadow: "none", borderBottom: "1px solid #ddd" }}>
          <Container maxWidth="md">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0" }}>
              
              {/* Logo a nadpis */}
              <Header />

              {/* Menu - viditelné na desktopu */}
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    color="inherit"
                    sx={{ color: "black", fontSize: "1rem" }}
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>

              {/* Ikona hamburgeru pro mobilní verzi */}
              <IconButton 
                color="inherit" 
                edge="end" 
                onClick={handleDrawerToggle} 
                sx={{ display: { xs: "block", md: "none" }, color: "black" }}
              >
                <MenuIcon />
              </IconButton>

            </Toolbar>
          </Container>
        </AppBar>

        {/* Mobilní menu */}
        <Drawer 
          anchor="top" 
          open={mobileOpen} 
          onClose={handleDrawerToggle}
          PaperProps={{ sx: { width: "100%" } }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item) => (
              <ListItem 
                button 
                key={item.text} 
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                  setMobileOpen(false);
                }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Hlavní obsah */}
        <Box sx={{ flex: 1, width: "100%" }}>
          {/* Home sekce */}
          <section id="home">
            <Home />
          </section>

          {/* O nás sekce */}
          <section id="about" style={{ height: "400px", backgroundColor: "lightblue", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <About />
          </section>

          {/* Kontakt sekce */}
          <section id="contact" style={{ height: "400px", backgroundColor: "lightgray", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Contact />
          </section>
        </Box>

        {/* Paticka */}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
