import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase-client"; // Ujistěte se, že cesta je správná
import { Container, Paper, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'; // Importy pro Material-UI komponenty
import classes from "./OrdinacniDoba.module.scss"; // Ujistěte se, že máte správnou cestu pro SCSS

const OrdinacniDoba = () => {
  const [ordinacniDoba, setOrdinacniDoba] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  // Funkce pro načtení ordinační doby z databáze
  const fetchOrdinacniDoba = async () => {
    try {
      const { data, error, status } = await supabase
        .from("obsah")
        .select("obsah")
        .eq("typ", "ordinacni_doba")
        .limit(1)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setOrdinacniDoba(data.obsah); // Nastaví obsah do stavu
      } else {
        console.warn("No rows returned for ordinacni_doba.");
        setErrorMessage("Nebyly nalezeny žádné záznamy ordinační doby.");
      }
    } catch (error) {
      console.error("Chyba při načítání ordinační doby:", error);
      setErrorMessage("Nepodařilo se načíst ordinační dobu.");
    }
  };

  // Načítání při prvním vykreslení komponenty
  useEffect(() => {
    fetchOrdinacniDoba();
  }, []);

  // Funkce pro převedení HTML na tabulku
  const formatOrdinacniDobaToTable = () => {
    // Rozdělíme obsah podle <p> tagů
    const days = ordinacniDoba.split("<p>").filter(item => item.trim() !== "").map(item => item.replace("</p>", ""));

    // Rozdělení každého dne na název dne a ordinační dobu
    const rows = days.map(day => {
      const parts = day.split(":");
      const dayName = parts[0].trim(); // První část je název dne
      const hours = parts.slice(1).join(":").trim(); // Zbytek je ordinační doba

      return { dayName, hours };
    });

    return rows;
  };

  const tableData = formatOrdinacniDobaToTable();

  return (
    <div className={classes.ordinacniDoba}>
      {errorMessage ? (
        <Typography variant="h6" color="error">{errorMessage}</Typography> // Používáme Typography pro zobrazení textu chyby
      ) : (
        <Container>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Den</TableCell>
                  <TableCell>Ordinační doba</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.dayName}</TableCell>
                    <TableCell>{row.hours}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Container>
      )}
    </div>
  );
};

export default OrdinacniDoba;
