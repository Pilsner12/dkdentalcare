import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase-client";
import { Container, Paper, Typography, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

export function PriceList() {
  const [obsah, setObsah] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
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
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Typography align="center">Načítání...</Typography>;
  }

  if (error) {
    return (
      <Typography color="error" align="center">
        Chyba: {error}
      </Typography>
    );
  }

  const formatPrice = (price) => price.replace(/(\d)(Kč)/, "$1 Kč");

  const parsePriceList = (text) => {
    return text
      .split("<p>")
      .filter((line) => line.trim() !== "")
      .map((line) => line.replace("</p>", "").trim())
      .map((line) => {
        const [service, price] = line.split(":").map((part) => part.trim());
        return { service, price: formatPrice(price) };
      });
  };

  const priceListData = parsePriceList(obsah);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          Ceník služeb
        </Typography>
        <Table size="small">
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
  );
}

export default PriceList;
