import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import defaultního stylu
import { Box, Typography, Paper } from "@mui/material";
import OpeningTime from "../admin/OpeningTime";

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      {/* Upozornění s pozadím přes celou šířku */}
      <Box
        sx={{
          width: "100%", // Pozadí přes celou šířku
          backgroundColor: "#ffcccc", // Červené pozadí
          padding: "16px 0", // Vertikální odsazení
          textAlign: "center", // Zarovnání textu na střed
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#2a2a2a",
            fontWeight: "bold",
          }}
        >
          Z kapacitních důvodů aktuálně NEPŘIJÍMÁME nové pacienty.
        </Typography>
      </Box>

      {/* Obsah stránky */}
      <Box
        sx={{
          display: "flex", // Flexbox pro zarovnání vedle sebe
          flexDirection: "row", // Zarovnání do řádku
          justifyContent: "center", // Horizontální zarovnání na střed
          alignItems: "flex-start", // Zarovnání k horní hraně
          flexWrap: "wrap", // Zalamování na menších obrazovkách
          gap: 4, // Mezera mezi prvky
          mt: 5, // Odsazení od horní části stránky
        }}
      >
        {/* Karty vedle sebe */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Karty budou vedle sebe
            gap: 4, // Mezera mezi kartami
            flexWrap: "wrap", // Zalamování na menších obrazovkách
            justifyContent: "center", // Zarovnání na střed na menších obrazovkách
            width: "100%", // Zajistí, že karty zaberou celou šířku
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "200px",
              height: "200px",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
              textAlign: "center",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Jste náš pacient? <br /> Objednejte se zde:
              <br /> <br /> 
              +420 379 725 564
            </Typography>
          </Paper>

          <Paper
            elevation={3}
            sx={{
              width: "200px",
              height: "200px",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
              textAlign: "center",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "normal" }}>
              V případě urgentních potíží nás kontaktujte telefonicky.<br /> Pokusíme
              se vám zajistit co nejrychlejší termín.
            </Typography>
          </Paper>
        </Box>

        {/* Kalendář pod kartami */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: "4px",
            maxWidth: "400px",
            width: "100%", // Šířka 100% na menších obrazovkách
            "@media (min-width: 600px)": {
              width: "400px", // Šířka 400px na větších obrazovkách
            },
          }}
        >
          <Calendar onChange={setDate} value={date} locale="cs-CZ" />
        </Paper>

        {/* Opening time */}
        <Paper sx={{ elevation: 3, padding: "8px", width: "300px" }}>
  <OpeningTime color="black" />
</Paper>
      </Box>
    </>
  );
}

export default CalendarPage;