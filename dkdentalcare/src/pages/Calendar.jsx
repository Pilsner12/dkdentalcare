import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import defaultního stylu
import { Box, Typography, Paper } from "@mui/material";
import OrdinacniDoba from "../components/OpeningTime";

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>📅 Rezervační kalendář</Typography>
      <Paper elevation={3} sx={{ p: 2, borderRadius: "12px", maxWidth: "400px" }}>
        <Calendar 
          onChange={setDate} 
          value={date} 
          locale="cs-CZ" 
        />
      </Paper>
      <OrdinacniDoba />
    </Box>
  );
}

export default CalendarPage;
