import React from "react";
import { FaMobileAlt, FaDesktop, FaGlobe, FaRobot } from "react-icons/fa";
import { Container, Typography, Card, CardContent, Grid, Box } from '@mui/material';

const features = [
  {
    icon: <FaMobileAlt className="text-blue-600 text-3xl" />,
    title: "App Development",
    description:
      "Experienced in developing mobile applications with Android Studio, focusing on intuitive design and efficient functionality.",
  },
  {
    icon: <FaDesktop className="text-blue-600 text-3xl" />,
    title: "Standalone Application Development",
    description:
      "Developed standalone applications, including a restaurant management system, tailored to unique user requirements and optimized for performance.",
  },
  {
    icon: <FaGlobe className="text-blue-600 text-3xl" />,
    title: "Web Development",
    description:
      "Created and deployed a variety of web projects. Explore my GitHub for examples of my front-end and back-end expertise.",
  },
  {
    icon: <FaRobot className="text-blue-600 text-3xl" />,
    title: "Machine Learning",
    description:
      "Skilled in implementing machine learning algorithms, including a mobile price prediction model, to solve complex problems and leverage data for actionable insights.",
  },
];

const Features = () => (
  <Container id="features" maxWidth="md" sx={{ 
    py: { xs: 4, md: 8 }, 
    scrollMarginTop: { xs: '80px', sm: '100px' }, 
    bgcolor: 'var(--background)', 
    color: 'var(--text-primary)' 
  }}>
    <Typography variant="h4" align="center" fontWeight={700} color="primary" gutterBottom>
      What I Do
    </Typography>
    <Grid container spacing={4} alignItems="stretch">
      {features.map((feature, idx) => (
        <Grid item xs={12} sm={6} key={idx} sx={{ display: 'flex', height: '100%', minWidth: 0 }}>
          <Card sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 1,
            mr: 2,
            ml: 2,
            maxWidth: 800,
            minWidth: 0
          }}>
            <CardContent sx={{ 
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              p: 2,
              minWidth: 0
            }}>
              <Box sx={{ fontSize: { xs: 38, sm: 48 }, color: 'var(--accent)', mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" fontWeight={600} gutterBottom sx={{ wordBreak: 'break-word', fontSize: { xs: '1.1rem', sm: '1.2rem' } }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ wordBreak: 'break-word', fontSize: { xs: '0.98rem', sm: '1.05rem' } }}>
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Features;