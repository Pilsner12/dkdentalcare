import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase-client";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@mui/material";
import React from "react";

const OpeningTime = () => {
  const [ordinacniDoba, setOpeningTime] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchOpeningTime = async () => {
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
        setOpeningTime(data.obsah);
      } else {
        console.warn("No rows returned for ordinacni_doba.");
        setErrorMessage("Nebyly nalezeny žádné záznamy ordinační doby.");
      }
    } catch (error) {
      console.error("Chyba při načítání ordinační doby:", error);
      setErrorMessage("Nepodařilo se načíst ordinační dobu.");
    }
  };

  useEffect(() => {
    fetchOpeningTime();
  }, []);

  const formatOpeningTimeToTable = () => {
    if (!ordinacniDoba) return [];
    const days = ordinacniDoba
      .split("<p>")
      .filter((item) => item.trim() !== "")
      .map((item) => item.replace("</p>", "").trim());
    return days.map((day) => {
      const parts = day.split(":");
      return {
        dayName: parts[0].trim(),
        hours: parts.slice(1).join(":").trim(),
      };
    });
  };

  const tableData = formatOpeningTimeToTable();

  return errorMessage ? (
    <Typography
      variant="h6"
      align="center"
      sx={{
        marginTop: "20px",
        color: "white", // Text bude bílý
        fontWeight: "bold",
      }}
    >
      {errorMessage}
    </Typography>
  ) : (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Table
        size="small"
        sx={{
          margin: "0 auto",
          maxWidth: "400px",
          backgroundColor: "transparent", // Odstraní pozadí tabulky
          borderRadius: "0px",
          boxShadow: "none", // Odstraní stín tabulky
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white", // Text bude bílý
                borderBottom: "1px solid white", // Bílá spodní čára
                textTransform: "uppercase", // Všechna písmena velká
              }}
            >
              Den
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white", // Text bude bílý
                borderBottom: "1px solid white", // Bílá spodní čára
                textTransform: "uppercase", // Všechna písmena velká
              }}
            >
              Ordinační doba
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:nth-of-type(even)": {
                  backgroundColor: "transparent", // Odstraní pozadí sudých řádků
                },
                borderBottom: "0.5px solid white", // Tenká čára mezi dny
              }}
            >
              <TableCell
                sx={{
                  color: "white", // Text bude bílý
                  textTransform: "uppercase", // Všechna písmena velká
                }}
              >
                {row.dayName}
              </TableCell>
              <TableCell
                sx={{
                  color: "white", // Text bude bílý
                }}
              >
                {row.hours}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default OpeningTime;