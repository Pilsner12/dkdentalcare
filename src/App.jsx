import React, { useState, useEffect } from "react";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CalendarPage from "./pages/Calendar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PriceList from "./pages/PriceList";
import LogIn from "./admin/LogIn";
import AdminNav from "./admin/AdminNav";
import Aktuality from "./admin/Aktuality";
import Cenik from "./components/Cenik";
import OrdinacniDoba from "./admin/OrdinacniDoba";
import RepublikaBezKazu from "./pages/RepublikaBezKazu";
import AOS from "aos";
import "aos/dist/aos.css";

const AOS_DURATION = 500;
const AOS_DELAY_STEP = 100;

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
  },
});

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    AOS.init({
      duration: AOS_DURATION,
      once: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const menuItems = [
    { text: "Domů", id: "home" },
    { text: "Kalendář", id: "calendar" },
    { text: "Ceník", id: "pricelist" },
    { text: "Kontakt", id: "contact" },
    { text: "Republika Bez Kazu", id: "republika" },
  ];

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
      setMobileOpen(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<LogIn />} />
          <Route
            path="/admin/*"
            element={
              <Box sx={{ display: "flex", minHeight: "100vh" }}>
                {/* Navigační panel */}
                <AdminNav />
                {/* Obsah administrativního prostředí */}
                <Box sx={{ flex: 1, padding: 3 }}>
                  <Routes>
                    <Route path="aktuality" element={<Aktuality />} />
                    <Route path="cenik" element={<Cenik />} />
                    <Route path="ordinacni-doba" element={<OrdinacniDoba />} />
                  </Routes>
                </Box>
              </Box>
            }
          />

          {/* Public Routes */}
          <Route
            path="/"
            element={
              <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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
                  <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                      <Header />
                      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        {menuItems.map((item) => (
                          <Button
                            key={item.text}
                            color="inherit"
                            sx={{ color: "white", fontSize: "1rem", "&:hover": { color: "yellow" } }}
                            onClick={() => handleScrollToSection(item.id)}
                          >
                            {item.text}
                          </Button>
                        ))}
                      </Box>
                      <IconButton
                        color="inherit"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: "block", md: "none" }, color: "white" }}
                      >
                        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                      </IconButton>
                    </Toolbar>
                  </Container>
                </AppBar>
                <Drawer anchor="top" open={mobileOpen} onClose={handleDrawerToggle} PaperProps={{ sx: { width: "100%" } }}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                    <IconButton onClick={handleDrawerToggle}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <List>
                    {menuItems.map((item) => (
                      <ListItem button key={item.text} onClick={() => handleScrollToSection(item.id)}>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
                <Box sx={{ flex: 1, width: "100%" }}>
                  <section
                    id="home"
                    style={{ minHeight: "100vh" }}
                    data-aos="fade-up"
                    data-aos-duration={AOS_DURATION}
                  >
                    <Home />
                  </section>
                  <section
                    id="calendar"
                    style={{ minHeight: "100vh" }}
                    data-aos="fade-up"
                    data-aos-duration={AOS_DURATION}
                    data-aos-delay={AOS_DELAY_STEP}
                  >
                    <CalendarPage />
                  </section>
                  <section
                    id="pricelist"
                    style={{ minHeight: "100vh" }}
                    data-aos="fade-up"
                    data-aos-duration={AOS_DURATION}
                    data-aos-delay={AOS_DELAY_STEP * 2}
                  >
                    <PriceList />
                  </section>
                  <section
                    id="contact"
                    style={{ minHeight: "100vh" }}
                    data-aos="fade-up"
                    data-aos-duration={AOS_DURATION}
                    data-aos-delay={AOS_DELAY_STEP * 3}
                  >
                    <Contact />
                  </section>
                  <section
                    id="republika"
                    style={{ minHeight: "100vh" }}
                    data-aos="fade-up"
                    data-aos-duration={AOS_DURATION}
                    data-aos-delay={AOS_DELAY_STEP * 4}
                  >
                    <RepublikaBezKazu />
                  </section>
                </Box>
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