import  { useEffect, useState } from "react";
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

const OrdinacniDoba = () => {
  const [ordinacniDoba, setOrdinacniDoba] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

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
        setOrdinacniDoba(data.obsah);
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
    fetchOrdinacniDoba();
  }, []);

  const formatOrdinacniDobaToTable = () => {
    const days = ordinacniDoba
      .split("<p>")
      .filter((item) => item.trim() !== "")
      .map((item) => item.replace("</p>", ""));
    return days.map((day) => {
      const parts = day.split(":");
      return {
        dayName: parts[0].trim(),
        hours: parts.slice(1).join(":").trim(),
      };
    });
  };

  const tableData = formatOrdinacniDobaToTable();

  return errorMessage ? (
    <Typography
      variant="h6"
      color="error"
      align="center"
      sx={{
        marginTop: "20px",
        color: "#d32f2f",
        fontWeight: "bold",
      }}
    >
      {errorMessage}
    </Typography>
  ) : (
    <Box
      sx={{
        marginTop: "40px",
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
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "0px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
        }}
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
              Den
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
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
                  backgroundColor: "#f9f9f9",
                },
              }}
            >
              <TableCell sx={{ color: "#555" }}>{row.dayName}</TableCell>
              <TableCell sx={{ color: "#555" }}>{row.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default OrdinacniDoba;
