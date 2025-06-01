import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Container, Typography, Card, CardContent, Grid, Box, IconButton } from '@mui/material';

const contactDetails = [
  {
    icon: <FaMapMarkerAlt />,
    label: "Address",
    value: "28/A/7 Gold Park, Harischandrawatta, Thudawa, Matara",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+94 763223190",
    link: "tel:+94763223190",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "nimanthakabashana@gmail.com",
    link: "mailto:nimanthakabashana@gmail.com",
  },
];

const Contact = () => (
  <Container maxWidth="sm" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'var(--background)', color: 'var(--text-primary)' }} id="contact">
    <Typography variant="h4" align="center" fontWeight={700} color="primary" gutterBottom>
      Contact
    </Typography>
    <Card elevation={4} sx={{ mt: 4 }}>
      <CardContent>
        <Grid container spacing={3}>
          {contactDetails.map((item, idx) => (
            <Grid item xs={12} key={idx}>
              <Box display="flex" alignItems="center" gap={2}>
                <IconButton color="primary" sx={{ fontSize: 32 }}
                  component={item.link ? "a" : "span"}
                  href={item.link || undefined}
                  target={item.link && item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link && item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={item.label}
                  size="large"
                  disableRipple={!item.link}
                >
                  {item.icon}
                </IconButton>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600} color="text.primary">
                    {item.label}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  </Container>
);

export default Contact;
