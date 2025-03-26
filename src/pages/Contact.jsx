import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Container, Typography, Box } from "@mui/material";
import { IconPhone, IconMapPin, IconAt } from "@tabler/icons-react";
import PropTypes from "prop-types";
import { supabase } from "../supabase/supabase-client";

const MOCKDATA = [
  { title: "Email", description: "dkdentalcaresro@gmail.com", icon: IconAt },
  { title: "Telefon recepce", description: "+420 379 725 564 ", icon: IconPhone },
  { title: "Adresa", description: "Branská 55, 344 01 Domažlice", icon: IconMapPin },
];

function ContactIcon({ title, description, icon }) {
  const IconComponent = icon;
  return (
    <Box display="flex" alignItems="center" m={2}>
      <Box mr={3}>
        <IconComponent style={{ width: 30, height: 30 }} />
      </Box>
      <Box>
        <Typography variant="body2" color="textSecondary">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Box>
  );
}

ContactIcon.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

function ContactIconsList() {
  return <Box>{MOCKDATA.map((item) => <ContactIcon key={item.title} {...item} />)}</Box>;
}

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
        if (user?.id) {
          const { data, error } = await supabase
            .from("MessageFromFormular")
            .select("id, UserName, UserEmail, UserMessage")
            .eq("UserEmail", user.email)
            .order("created_at", { ascending: false });

          if (error) throw error;
          setFormMessages(data);
        }
      } catch (error) {
        console.error("Chyba při získávání zpráv:", error);
      }
    }
    getUserData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message.trim() || !userName.trim() || !userEmail.trim()) {
      alert("Prosím vyplňte všechna pole");
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("MessageFromFormular").insert([
        { UserName: userName, UserEmail: userEmail, UserMessage: message },
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
    setMessage("");
    setUserName("");
    setUserEmail("");
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom mt={10}>
            Kontaktujte nás
          </Typography>
          <Typography variant="body1" paragraph mt={6}>
            Zavolejte na recepci pro potvrzení Vámi vybraného termínu.
          </Typography>
          <ContactIconsList />
        </Grid>

        <Grid item xs={12} sm={6} mt={20}>
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              label="Jméno a příjmení"
              fullWidth
              required
              margin="normal"
              variant="outlined"
            />
            <TextField
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              label="Email"
              fullWidth
              required
              margin="normal"
              variant="outlined"
            />
            <TextField
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              label="Vaše zpráva"
              fullWidth
              required
              margin="normal"
              variant="outlined"
              multiline
              minRows={5}
            />
            <Grid container justifyContent="flex-end" spacing={2} sx={{ marginTop: 2 }}>
              <Grid item>
                <Button variant="outlined" color="error" onClick={resetForm}>
                  Zrušit
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                  Odeslat
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;