import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
import OpenInNewIcon from "@mui/icons-material/OpenInNew"; // Import ikony
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CalendarPage from "./pages/Calendar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RepublikaBezKazu from "./pages/RepublikaBezKazu";
import PriceList from "./pages/PriceList";

// MUI téma pro použití fontu Montserrat
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif", // Použití fontu Montserrat
  },
});

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const NAVBAR_HEIGHT = 70;                                              // Výška navbaru

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const menuItems = [
    { text: "Domů", id: "home" },
    { text: "Kalendář", id: "calendar" },
    { text: "Ceník", id: "pricelist" },
    { text: "Kontakt", id: "contact" },
    { text: "Republika Bez Kazu", id: "republika",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      {" "}
      <Router>
        {" "}
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          {" "}
          <AppBar
            position="fixed"
            sx={{
              background:
                "linear-gradient(0deg, rgba(0, 51, 102, 0.8), rgba(0, 85, 164, 0.8), rgba(0, 153, 255, 0.8))",
              backdropFilter: scrolling ? "blur(10px)" : "none",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              borderBottom: "1px solid rgba(255, 255, 0, 0.8)",
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
                  {menuItems.map((item) =>
                    item.withIcon ? ( // Pokud má být přidána ikona
                      <Button
                        key={item.text}
                        color="inherit"
                        startIcon={<OpenInNewIcon />} // Ikona odkazu
                        sx={{
                          color: "white",
                          fontSize: "1rem",
                          "&:hover": { color: "yellow" },
                        }}
                        onClick={() =>
                          document
                            .getElementById(item.id)
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        {item.text}
                      </Button>
                    ) : (
                      <Button
                        key={item.text}
                        color="inherit"
                        sx={{
                          color: "white",
                          fontSize: "1rem",
                          "&:hover": { color: "yellow" },
                        }}
                        onClick={() =>
                          document
                            .getElementById(item.id)
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        {item.text}
                      </Button>
                    )
                  )}
                </Box>
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ display: { xs: "block", md: "none" }, color: "white" }}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </Container>
          </AppBar>
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
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setMobileOpen(false);
                  }}
                >
                  {item.withIcon ? (
                    <>
                      <OpenInNewIcon
                        sx={{ marginRight: "8px", color: "#333" }}
                      />
                      <ListItemText primary={item.text} />
                    </>
                  ) : (
                    <ListItemText primary={item.text} />
                  )}
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Box sx={{ flex: 1, width: "100%" }}>
            <section
              id="home"
              style={{
                minHeight: "100vh",
                paddingTop: "0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Home />
            </section>
            <section
              id="calendar"
              style={{
                minHeight: "100vh",
                paddingTop: `${NAVBAR_HEIGHT}px`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CalendarPage />
            </section>
            <section
              id="pricelist"
              style={{
                minHeight: "100vh",
                paddingTop: `${NAVBAR_HEIGHT}px`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PriceList />
            </section>
            <section
              id="contact"
              style={{
                minHeight: "100vh",
                paddingTop: `${NAVBAR_HEIGHT}px`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Contact />
            </section>
            <section
              id="republika"
              style={{
                minHeight: "100vh",
                paddingTop: `${NAVBAR_HEIGHT}px`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RepublikaBezKazu />
            </section>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
