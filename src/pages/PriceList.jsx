import React, { useEffect, useState } from "react";
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
      .filter(Boolean);

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
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" align="center" sx={{ mb: 2, fontFamily: "'Titillium Web', sans-serif" }}>
          Ceník služeb
        </Typography>
        <Table size="small" aria-label="Ceník služeb">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell sx={{ fontWeight: "bold", fontFamily: "'Titillium Web', sans-serif" }}>
                Popis služby
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontFamily: "'Titillium Web', sans-serif" }}>
                Cena
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {priceListData.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontFamily: "'Titillium Web', sans-serif" }}>{row.service}</TableCell>
                <TableCell sx={{ fontFamily: "'Titillium Web', sans-serif" }}>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default PriceList;