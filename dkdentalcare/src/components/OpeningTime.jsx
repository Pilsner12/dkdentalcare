import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase-client";
import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

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
    const days = ordinacniDoba.split("<p>").filter(item => item.trim() !== "").map(item => item.replace("</p>", ""));
    return days.map(day => {
      const parts = day.split(":");
      return { dayName: parts[0].trim(), hours: parts.slice(1).join(":").trim() };
    });
  };

  const tableData = formatOrdinacniDobaToTable();

  return errorMessage ? (
    <Typography variant="h6" color="error" align="center">{errorMessage}</Typography>
  ) : (
    <>
      
      <Table size="small" style={{ margin: "0 auto", maxWidth: "300px", marginTop: "40px" }}>
        <TableHead>
          <TableRow style={{ backgroundColor: "#f5f5f5" }}>
            <TableCell style={{ fontWeight: "bold" }}>Den</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Ordinační doba</TableCell>
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
    </>
  );
};

export default OrdinacniDoba;
