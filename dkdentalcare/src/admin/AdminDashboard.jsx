import { Box, Typography, Grid, Paper } from "@mui/material";

function AdminDashboard() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2, textAlign: "center" }}>
            <Typography variant="h6">Statistika 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2, textAlign: "center" }}>
            <Typography variant="h6">Statistika 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2, textAlign: "center" }}>
            <Typography variant="h6">Statistika 3</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminDashboard;
