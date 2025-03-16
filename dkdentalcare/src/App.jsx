import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CalendarPage from "./pages/Calendar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RepublikaBezKazu from "./pages/RepublikaBezKazu";
import PriceList from "./pages/PriceList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LogIn from "./admin/LogIn"; // Cesta k LogIn komponentě
import AdminNav from "./admin/AdminNav"; // Cesta k AdminNav komponentě

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif", // Použití fontu Montserrat
  },
});

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Menu položky s ID sekcí
  const menuItems = [
    { text: "Domů", id: "home" },
    { text: "Kalendář", id: "calendar" },
    { text: "Ceník", id: "pricelist" },
    { text: "Kontakt", id: "contact" },
    { text: "Republika Bez Kazu", id: "republika" },
  ];

  // Funkce pro plynulé posouvání
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false); // Zavření mobilního menu
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* Admin sekce */}
          <Route path="/admin" element={<LogIn />} /> {/* Login komponenta pro /admin */}
          <Route path="/admin/*" element={<AdminNav />} /> {/* Navigace pro Admin */}

          {/* Zbytek aplikace */}
          <Route
            path="/"
            element={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100vh",
                }}
              >
                {/* Navigace */}
                <AppBar
                  position="fixed"
                  sx={{
                    background:
                      "linear-gradient(0deg, rgba(0, 51, 102, 0.8), rgba(0, 85, 164, 0.8), rgba(0, 153, 255, 0.8))",
                    backdropFilter: scrolling ? "blur(10px)" : "none",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    borderBottom: "2px solid rgba(255, 255, 0, 0.8)",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <Container
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Toolbar
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Header />
                      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        {menuItems.map((item) => (
                          <Button
                            key={item.text}
                            color="inherit"
                            sx={{
                              color: "white",
                              fontSize: "1rem",
                              "&:hover": { color: "yellow" },
                            }}
                            onClick={() => handleScrollToSection(item.id)} // Posouvání k sekci
                          >
                            {item.text}
                          </Button>
                        ))}
                      </Box>
                      <IconButton
                        color="inherit"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{
                          display: { xs: "block", md: "none" },
                          color: "white",
                        }}
                      >
                        <MenuIcon />
                      </IconButton>
                    </Toolbar>
                  </Container>
                </AppBar>

                {/* Postranní menu pro mobilní zařízení */}
                <Drawer
                  anchor="top"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  PaperProps={{ sx: { width: "100%" } }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}
                  >
                    <IconButton onClick={handleDrawerToggle}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <List>
                    {menuItems.map((item) => (
                      <ListItem
                        button
                        key={item.text}
                        onClick={() => handleScrollToSection(item.id)}
                      >
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}
                  </List>
                </Drawer>

                {/* Sekce */}
                <Box sx={{ flex: 1, width: "100%", marginTop: `0px` }}>
                  <section id="home">
                    <Home />
                  </section>
                  <section id="calendar">
                    <CalendarPage />
                  </section>
                  <section id="pricelist">
                    <PriceList />
                  </section>
                  <section id="contact">
                    <Contact />
                  </section>
                  <section id="republika">
                    <RepublikaBezKazu />
                  </section>
                </Box>

                {/* Zápatí */}
                <Footer />
              </Box>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
