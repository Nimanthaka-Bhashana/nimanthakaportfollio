import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Box, 
  Button,
  TextField
} from '@mui/material';

const contactDetails = [
  {
    icon: <FaMapMarkerAlt size={24} />,
    label: "Address",
    value: "28/A/7 Gold Park, Harischandrawatta, Thudawa, Matara",
  },
  {
    icon: <FaPhoneAlt size={24} />,
    label: "Phone",
    value: "+94 763223190",
    link: "tel:+94763223190",
  },
  {
    icon: <FaEnvelope size={24} />,
    label: "Email",
    value: "nimanthakabashana@gmail.com",
    link: "mailto:nimanthakabashana@gmail.com",
  },
];

const Contact = () => (
  <Container 
    maxWidth="md" 
    sx={{ 
      py: { xs: 6, md: 10 }, 
      scrollMarginTop: '80px',
    }} 
    id="contact"
  >
    <Typography 
      variant="h3" 
      align="center" 
      fontWeight={700} 
      color="primary"
      sx={{
        mb: 2,
        position: 'relative',
        '&:after': {
          content: '""',
          display: 'block',
          width: '80px',
          height: '4px',
          background: 'linear-gradient(45deg, #3f51b5, #2196f3)',
          margin: '16px auto 0',
          borderRadius: '2px'
        }
      }}
    >
      Get In Touch
    </Typography>
    
    <Typography 
      variant="subtitle1" 
      align="center" 
      color="text.secondary" 
      sx={{ 
        maxWidth: 600,
        mx: 'auto',
        mb: 6
      }}
    >
      Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
    </Typography>

    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card 
          elevation={4} 
          sx={{ 
            height: '100%',
            borderRadius: 2,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography 
              variant="h5" 
              fontWeight={600} 
              color="text.primary"
              gutterBottom
              sx={{ mb: 3 }}
            >
              Contact Information
            </Typography>
            
            <Grid container spacing={3}>
              {contactDetails.map((item, idx) => (
                <Grid item xs={12} key={idx}>
                  <Box 
                    display="flex" 
                    alignItems="flex-start" 
                    gap={3}
                    component={item.link ? "a" : "div"}
                    href={item.link || undefined}
                    target={item.link && item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link && item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: item.link ? 'translateX(5px)' : 'none'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.contrastText',
                        flexShrink: 0
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography 
                        variant="subtitle1" 
                        fontWeight={600} 
                        color="text.primary"
                      >
                        {item.label}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color={item.link ? "primary.main" : "text.secondary"}
                        sx={{
                          wordBreak: 'break-word',
                          '&:hover': {
                            textDecoration: item.link ? 'underline' : 'none'
                          }
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card 
          elevation={4} 
          sx={{ 
            height: '100%',
            borderRadius: 2,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default Contact;