import AdminDashboard from "./AdminDashboard";
import LogIn from "./LogIn";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";
import { useAuth } from "./AuthContext"; // Kontext autentizace

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
  },
});

function Admin() {
  const { isAuth } = useAuth(); // Přístup k autentizačnímu stavu z kontextu

  console.log("Je uživatel autentizovaný?", isAuth); // Ladicí výstup pro ověření autentizace

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {isAuth ? (
          <AdminDashboard /> // Zobrazení dashboardu pro přihlášené uživatele
        ) : (
          <LogIn /> // Zobrazení přihlašovací stránky
        )}
      </Container>
    </ThemeProvider>
  );
}

export default Admin;
