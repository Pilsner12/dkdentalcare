import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Container, Paper, Typography, Box } from "@mui/material";
import { ContactIconsList } from "../components/ContactIcons";
import { supabase } from "../supabase/supabase-client";
import OrdinacniDoba from "../components/OrdinacniDoba";

export function Contact() {
  const [formMessages, setFormMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function getUserData() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        const userId = user?.id;

        if (userId) {
          const { data: formMessages, error } = await supabase
            .from("MessageFromFormular")
            .select("id, UserName, UserEmail, UserMessage")
            .eq("id", userId)
            .order("created_at", { ascending: false });

          if (error) throw error;
          setFormMessages(formMessages);
        }
      } catch (error) {
        console.error("Chyba při získávání zpráv:", error);
      }
    }

    getUserData();
  }, []);

  const handleSubmit = async () => {
    if (!message.trim() || !userName.trim() || !userEmail.trim()) {
      alert('Prosím vyplňte všechna pole');
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("MessageFromFormular").insert([
        {
          UserName: userName,
          UserEmail: userEmail || null,
          UserMessage: message,
        },
      ]);
      if (error) throw error;

      setFormMessages([
        { UserName: userName, UserEmail: userEmail, UserMessage: message, created_at: new Date().toISOString() },
        ...formMessages,
      ]);
      resetForm();
    } catch (error) {
      console.error("Chyba při odesílání formuláře:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setMessage('');
    setUserName('');
    setUserEmail('');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={6} sx={{ padding: 4, borderRadius: 3 }}>
        <Grid container spacing={4}>
          {/* Left section: Contact Information */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>Kontaktujte nás</Typography>
            <Typography variant="body1" paragraph>
              Zavolejte na recepci pro potvrzení Vámi vybraného termínu.
            </Typography>
            <ContactIconsList />
          </Grid>

          {/* Right section: Form */}
          <Grid item xs={12} sm={6}>
            <TextField
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              label="Jméno a příjmení"
              fullWidth
              required
              placeholder="Adam Novák"
              margin="normal"
              variant="outlined"
            />
            <TextField
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
              label="Email"
              fullWidth
              required
              placeholder="vas@email.cz"
              margin="normal"
              variant="outlined"
            />
            <TextField
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              label="Vaše zpráva"
              fullWidth
              required
              placeholder="Napište nám..."
              margin="normal"
              variant="outlined"
              multiline
              minRows={5}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
              <Button
                variant="outlined"
                color="error"
                sx={{ marginRight: 2 }}
                onClick={resetForm}
              >
                Zrušit
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                loading={isSubmitting}
              >
                Odeslat
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Google Map */}
        <Box sx={{ marginTop: 4 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.3643321668364!2d12.927127876991948!3d49.43983065961276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ab060e2a14643%3A0xa84aff933242c022!2zQnJhbnNrw6EgNTUsIDM0NCAwMSBEb21hxb5saWNlIDEtTcSbc3Rv!5e0!3m2!1scs!2scz!4v1730547605732!5m2!1scs!2scz"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <OrdinacniDoba />
      </Paper>
    </Container>
  );
}

export default Contact;
