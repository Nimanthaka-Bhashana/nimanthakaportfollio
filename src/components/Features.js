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
    <Grid container spacing={4}>
      {features.map((feature, idx) => (
        <Grid item xs={12} sm={6} key={idx} sx={{ display: 'flex' }}>
          <Card elevation={3} sx={{ 
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}>
            <CardContent sx={{ 
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              p: 3
            }}>
              <Box sx={{ fontSize: 48, color: 'var(--accent)', mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
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