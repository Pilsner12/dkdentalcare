import { Box, Drawer, AppBar, Toolbar, Typography, Container } from '@mui/material';
import AdminNav from './AdminNav'; // Komponenta postranního panelu
import { Outlet } from 'react-router-dom'; // Pro vkládání dalších komponent (např. dashboardu)
import React from 'react';

const drawerWidth = 240; // Šířka postranního panelu

const Admin = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar pro horní panel (vhodně pro logo a navigaci) */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Postranní panel - Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"  // trvalý postranní panel
        anchor="left"
      >
        <AdminNav />  {/* Postranní navigace */}
      </Drawer>

      {/* Hlavní obsah */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          paddingTop: 8, // Aby se obsah nezačínal přímo pod horní lištou
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        <Container maxWidth="lg">
          <Outlet />  {/* Vkládání dalších komponent (např. AdminDashboard) */}
        </Container>
      </Box>
    </Box>
  );
};

export default Admin;
