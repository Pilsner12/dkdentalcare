import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase-client";
import {
  Container,
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@mui/material";
import LogoImage from "../components/LogoImage"; // Import komponenty

export function PriceList() {
  const [obsah, setObsah] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("obsah")
        .select("obsah")
        .eq("typ", "cenik")
        .limit(1)
        .single();

      if (error) {
        setError(error.message);
      } else {
        setObsah(data?.obsah || "");
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  const formatPrice = (price) => {
    if (!price) return "";
    return price.replace(/(\d)(Kč)/, "$1 Kč").trim();
  };

  const parsePriceList = (text) =>
    text
      .split("<p>")
      .filter((line) => line.trim() !== "")
      .map((line) => line.replace("</p>", "").trim())
      .map((line) => {
        const parts = line.split(":").map((part) => part.trim());
        if (parts.length === 2) {
          return { service: parts[0], price: formatPrice(parts[1]) };
        }
        return null;
      })
      .filter(Boolean); // Odstraní null hodnoty

  const priceListData = parsePriceList(obsah);

  if (loading) {
    return <Typography align="center">Načítání...</Typography>;
  }

  if (error) {
    return (
      <Box textAlign="center">
        <Typography color="error">Chyba: {error}</Typography>
        <button onClick={() => setLoading(true)}>Zkuste to znovu</button>
      </Box>
    );
  }

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" align="center" sx={{ mb: 2 }}>
            Ceník služeb
          </Typography>
          <Table size="small" aria-label="Ceník služeb">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell sx={{ fontWeight: "bold" }}>Popis služby</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Cena</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {priceListData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.service}</TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>

      <Typography
        variant="h6"
        align="center"
        sx={{ mt: 6, mb: 1, fontWeight: "normal", color: "#333" }}
      >
        Pojišťovny, se kterými spolupracujeme:
      </Typography>

      <Box
        sx={{
          display: "grid",

          justifyItems: "center",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
          },
          gap: 1,
          mt: 2,
          justifyContent: "center",
        }}
      >
        <a href="https://www.cpzp.cz" target="_blank" rel="noopener noreferrer">
          <LogoImage src="/src/assets/pojistovny/cpzp.png" alt="ČPZP" />
        </a>
        <a href="https://www.ozp.cz" target="_blank" rel="noopener noreferrer">
          <LogoImage src="/src/assets/pojistovny/ozp.png" alt="OZP" />
        </a>
        <a href="https://www.vozp.cz" target="_blank" rel="noopener noreferrer">
          <LogoImage src="/src/assets/pojistovny/vozp.png" alt="VOZP" />
        </a>
        <a href="https://www.vzp.cz" target="_blank" rel="noopener noreferrer">
          <LogoImage src="/src/assets/pojistovny/vzp.jpg" alt="VZP" />
        </a>
        <a href="https://www.zpmvcr.cz/" target="_blank" rel="noopener noreferrer">
          <LogoImage src="/src/assets/pojistovny/zpmv.png" alt="ZPMV" />
        </a>
      </Box>
    </>
  );
}

export default PriceList;
