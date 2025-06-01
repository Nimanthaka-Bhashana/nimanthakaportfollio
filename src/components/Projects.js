import React from "react";
import { FaGithub } from "react-icons/fa";
import { Container, Typography, Card, CardContent, Grid, Box, Button } from '@mui/material';

const projects = [
  {
    title: "Restaurant Management System",
    description:
      "Developed a restaurant management system using C# and .NET framework. The system features an intuitive interface for staff to efficiently manage orders, inventory, and customer data. Utilizing SQL Server for data storage.",
    tech: "C#, .NET, SQL Server",
    github: "https://github.com/yourgithub/restaurant-management",
    image: require('../images/projects/projectOne.png'),
  },
  {
    title: "Pizza Shop Management System",
    description:
      "Utilized React.js and Java with Spring Boot. Enhanced customer experience and facilitated efficient admin operations.",
    tech: "React.js, Java, Spring Boot",
    github: "https://github.com/yourgithub/pizza-shop-management",
    image: require('../images/projects/projectTwo.png'),
  },
  {
    title: "Student Management System",
    description:
      "A Java-based Student Management System, created with NetBeans and MySQL, streamlines student-related tasks in educational institutions.",
    tech: "Java, NetBeans, MySQL",
    github: "https://github.com/yourgithub/student-management",
    image: require('../images/projects/projectThree.png'),
  },
  {
    title: "Colombo City Main Campus App",
    description:
      "Developed a mobile app for a Java-based Student Management System using Android Studio and MySQL, enhancing student task management for educational institutions.",
    tech: "Android Studio, Java, MySQL",
    github: "https://github.com/yourgithub/colombo-campus-app",
    image: require('../images/projects/projectFour.png'),
  },
  {
    title: "Website For Ice Cream-Company",
    description:
      "Designed and implemented a responsive Ice cream website for an online platform including PHP back-end system.",
    tech: "PHP, HTML, CSS, JavaScript",
    github: "https://github.com/yourgithub/ice-cream-company",
  },
];

const Projects = () => (
  <Container id="projects" maxWidth="md" sx={{ py: { xs: 4, md: 8 }, scrollMarginTop: { xs: '80px', sm: '100px' }, bgcolor: 'var(--background)', color: 'var(--text-primary)' }}>
    <Typography variant="h4" align="center" fontWeight={700} color="primary" gutterBottom>
      Projects
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex', height: '100%', minWidth: 0 }}>
           <Card sx={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 0.2,
                      mr: 2,
                      ml: 2,
                      maxWidth: 800,
                      minWidth: 0
                    }}>
            {project.image && (
              <Box sx={{ width: '100%', height: { xs: 120, sm: 150, md: 180 }, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'var(--surface)' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              </Box>
            )}
            <CardContent sx={{ flexGrow: 1, minWidth: 0 }}>
              <Typography gutterBottom variant="h6" component="div" fontWeight={700} color="secondary" sx={{ wordBreak: 'break-word', fontSize: { xs: '1.1rem', sm: '1.2rem' } }}>
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, wordBreak: 'break-word', fontSize: { xs: '0.98rem', sm: '1.05rem' } }}>
                {project.description}
              </Typography>
              {project.tech && (
                <Typography variant="subtitle2" color="primary" sx={{ mb: 2, fontSize: { xs: '0.92rem', sm: '1.02rem' } }}>
                  {project.tech}
                </Typography>
              )}
              {project.link && (
                <Button
                  variant="contained"
                  color="secondary"
                  href={project.link}
                  sx={{ mt: 1 }}
                >
                  View Project
                </Button>
              )}
              {project.github && (
                <Button
                  variant="contained"
                  color="primary"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<FaGithub />}
                  size="small"
                  sx={{ mt: 1 }}
                >
                  View on GitHub
                </Button>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
