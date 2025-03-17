import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import {
  IconBellRinging,
  IconUser,
  IconCalendar,
  IconMoneybag,
  IconLogout,
} from "@tabler/icons-react"; // Ikony
import { useAuth } from "../admin/AuthContext"; // Pro získání údajů o uživatelském přihlášení

const data = [
  { link: "/admin/aktuality", label: "Aktuality", icon: IconBellRinging },
  { link: "/admin/cenik", label: "Cenik", icon: IconMoneybag },
  { link: "/admin/oteviraci-doba", label: "Ordinacni doba", icon: IconCalendar,  },
];

const AdminNav = () => {
  const [active, setActive] = useState("Aktuality");
  const { logout, user } = useAuth(); // Získání přihlášeného uživatele
  const navigate = useNavigate(); // pro přesměrování

  // Pokud uživatel není přihlášený, přesměrujeme ho na hlavní stránku
  useEffect(() => {
    if (!user) {
      navigate("/"); // Přesměrování na hlavní stránku, pokud není přihlášen
    }
  }, [user, navigate]);

  // Pokud uživatel není přihlášený, nebudeme vykreslovat AdminNav
  if (!user) return null;

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: 2,
        borderRight: "1px solid #e0e0e0",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
      >
        <img
          src="/src/assets/icons/logo.png"
          alt="logo"
          style={{ width: "auto", height: "50px", objectFit: "contain" }}
        />
        <Box>
          <IconUser sx={{ fontSize: 24 }} />
          <Typography variant="body2">Přihlášen:</Typography>
          <Typography variant="body2" color="textSecondary">
            {user?.email}
          </Typography>
        </Box>
      </Box>

      <Divider />

      <List>
        {data.map((item) => (
          <ListItem
            button
            component={Link}
            to={item.link}
            key={item.label}
            selected={item.label === active}
            onClick={() => setActive(item.label)}
          >
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingTop: 2,
        }}
      >
        <ListItem button onClick={() => logout()}>
          <ListItemIcon>
            <IconLogout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </Box>
    </Box>
  );
};

export default AdminNav;