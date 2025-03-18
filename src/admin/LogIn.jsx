import { useState } from "react";
import { Container, Box, TextField, Button, Typography, Alert, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase-client"; // Ověř správnou cestu
import React from 'react';

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    console.log("DEBUG: Supabase response", data, error);

    if (error) {
      if (error.message.includes("Invalid login credentials")) {
        setError("Nesprávný email nebo heslo.");
      } else {
        setError("Přihlášení selhalo. Zkuste to znovu.");
      }
      setLoading(false);
      return;
    }

    navigate("/admin/aktuality");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ mt: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography component="h1" variant="h5">Přihlášení</Typography>
        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            label="Email"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Heslo"
            type="password"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button 
            type="submit" 
            fullWidth 
            variant="contained" 
            sx={{ mt: 3, mb: 2 }} 
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Přihlásit"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LogIn;
