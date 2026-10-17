import React, { useState } from 'react';
import { Alert, Box, Button, Container, Paper, Stack, TextField, Typography } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import SectionHeading from '../components/SectionHeading.jsx';

const initialForm = { name: '', email: '', message: '' };
export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    setSubmitted(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };
  return <Container maxWidth="lg"><Box className="inner-page">
    <SectionHeading eyebrow="SAY HELLO" title="Let’s connect.">Have a question about a project or want to share an idea? Leave a note below.</SectionHeading>
    <Box className="contact-layout">
      <Box className="contact-aside">
        <Typography className="eyebrow">A NOTE IS ALWAYS WELCOME</Typography>
        <Typography variant="h4">Good things often start with a conversation.</Typography>
        <Typography color="text.secondary">Use the form to share a little about what you have in mind.</Typography>
        <Box className="contact-email"><Typography className="eyebrow">FORM STATUS</Typography><Typography color="text.secondary" sx={{ mt: 1, fontSize: 13 }}>This portfolio form is a front-end demo and is not connected to an inbox yet.</Typography></Box>
      </Box>
      <Paper elevation={0} className="contact-card"><Box component="form" onSubmit={handleSubmit}><Stack spacing={2.5}>
        {submitted && <Alert severity="success">Thanks! The demo form accepted your message, but it has not been sent to an inbox.</Alert>}
        <TextField label="Your name" name="name" value={form.name} onChange={handleChange} required fullWidth />
        <TextField label="Email address" name="email" value={form.email} onChange={handleChange} type="email" required fullWidth />
        <TextField label="Your message" name="message" value={form.message} onChange={handleChange} required fullWidth multiline minRows={4} />
        <Button type="submit" variant="contained" endIcon={<SendRoundedIcon />} fullWidth>Try the demo form</Button>
        <Typography variant="caption" color="text.secondary">This form currently runs only in your browser.</Typography>
      </Stack></Box></Paper>
    </Box>
  </Box></Container>;
}
