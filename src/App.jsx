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
import "./App.css";

const AOS_DURATION = 500;
const AOS_DELAY_STEP = 100;

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
        top: section.offsetTop - 110, // Odstup od horního okraje stránky (výška AppBar)
        behavior: "smooth",
      });
      setMobileOpen(false);
    }
  };

  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<LogIn />} />
        <Route
          path="/admin/*"
          element={
            <Box className="admin-container">
              <AdminNav />
              <Box className="admin-content">
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
            <Box className="main-container">
              <AppBar className={`app-bar ${scrolling ? "scrolling" : ""}`}>
                <Container className="app-bar-container">
                  <Toolbar className="toolbar">
                    <Header />
                    <Box className="menu-items">
                      {menuItems.map((item) => (
                        <Button
                          key={item.text}
                          className="menu-button"
                          onClick={() => handleScrollToSection(item.id)}
                        >
                          {item.text}
                        </Button>
                      ))}
                    </Box>
                    <IconButton
                      className="menu-icon"
                      onClick={handleDrawerToggle}
                    >
                      {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                  </Toolbar>
                </Container>
              </AppBar>
              <Drawer
                anchor="top"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{ className: "drawer-paper" }}
              >
                <Box className="drawer-header">
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
              <Box className="content">
                <section id="home" className="section" data-aos="fade-up">
                  <Home handleScrollToSection={handleScrollToSection} />
                </section>
                <section
                  id="calendar"
                  className="section"
                  data-aos="fade-up"
                  data-aos-delay={AOS_DELAY_STEP}
                >
                  <CalendarPage />
                </section>
                <section
                  id="pricelist"
                  className="section"
                  data-aos="fade-up"
                  data-aos-delay={AOS_DELAY_STEP * 2}
                >
                  <PriceList />
                </section>
                <section
                  id="contact"
                  className="section"
                  data-aos="fade-up"
                  data-aos-delay={AOS_DELAY_STEP * 3}
                >
                  <Contact />
                </section>
                <section
                  id="republika"
                  className="section"
                  data-aos="fade-up"
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
  );
}

export default App;