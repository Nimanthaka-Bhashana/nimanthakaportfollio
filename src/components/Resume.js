import React from "react";
import { Container, Typography, Card, CardContent, Grid, Box, Divider } from '@mui/material';

const education = [
  {
    period: "2023 - 2024",
    title: "Higher National Diploma in Software Engineering",
    place: "National Institute of Business Management",
    details: "Studied IT related subjects like PDSA, ADBMS, IOT, ITMP, DIP, Robotic etc.",
  },
  {
    period: "2022 - 2023",
    title: "Diploma in Software Engineering",
    place: "National Institute of Business Management",
    details: "3.88 GPA. Studied IT related subjects like Operating Systems, DBMS, OOPS, Web Development, EAD, JAVA, C# etc.",
  },
  {
    period: "2011 - 2020",
    title: "Higher Secondary Education",
    place: "ST.Thomas College Matara",
    details: "C S S(Math Stream). HSC Subjects: PCM, English, Electrical Maintenance, Environment Education.",
  },
  {
    period: "2005 - 2010",
    title: "Primary School Education",
    place: "Olcot College",
    details: "Studied in this school from 11th to 12th std.",
  },
];

const certificates = [
  {
    title: "Diploma Certificate",
    place: "Diploma in software Engineering",
    details: "Completed with distinction",
  },
  {
    title: "SoloLearn Java Intermediate Certificate",
    place: "Sololearn - (01/01/2023)",
    details: "Online certification course",
  },
  {
    title: "React JS Certificate",
    place: "Great Learning - (2024)",
    details: "Online course covering React JS fundamentals",
  },
];

const Resume = () => (
  <Container id="resume" maxWidth="md" sx={{ py: { xs: 4, md: 8 }, scrollMarginTop: { xs: '80px', sm: '100px' }, bgcolor: 'var(--background)', color: 'var(--text-primary)' }}>
    <Typography variant="h3" align="center" gutterBottom fontWeight={700} color="primary">
      Resume
    </Typography>
    
    <Box sx={{ mb: 6 }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        fontWeight={600} 
        sx={{ 
          mb: 4,
          display: 'flex',
          alignItems: 'center',
          '&:before': {
            content: '""',
            display: 'inline-block',
            width: '30px',
            height: '4px',
            backgroundColor: 'secondary.main',
            mr: 2
          }
        }}
      >
        Academic
      </Typography>
      <Grid container spacing={4}>
        {education.map((edu, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <Card 
              elevation={2} 
              sx={{ 
                height: '100%',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 4
                },
                borderLeft: '4px solid',
                borderColor: 'primary.main'
              }}
            >
              <CardContent>
                <Typography 
                  variant="subtitle2" 
                  color="text.secondary" 
                  gutterBottom
                  sx={{
                    backgroundColor: 'primary.light',
                    color: 'primary.contrastText',
                    display: 'inline-block',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    mb: 2
                  }}
                >
                  {edu.period}
                </Typography>
                <Typography 
                  variant="h6" 
                  fontWeight={600} 
                  gutterBottom 
                  sx={{ 
                    color: 'text.primary',
                    fontSize: { xs: '1.1rem', sm: '1.2rem' } 
                  }}
                >
                  {edu.title}
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  color="primary.main" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    '&:before': {
                      content: '"📍"',
                      mr: 1
                    }
                  }}
                >
                  {edu.place}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.6
                  }}
                >
                  {edu.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    
    <Divider 
      sx={{ 
        my: 6,
        '&:before, &:after': {
          borderColor: 'primary.main'
        }
      }} 
    />
    
    <Box sx={{ mb: 4 }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        fontWeight={600} 
        sx={{ 
          mb: 4,
          display: 'flex',
          alignItems: 'center',
          '&:before': {
            content: '""',
            display: 'inline-block',
            width: '30px',
            height: '4px',
            backgroundColor: 'secondary.main',
            mr: 2
          }
        }}
      >
        Certifications
      </Typography>
      <Grid container spacing={3}>
        {certificates.map((cert, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card 
              elevation={2}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 4
                },
                borderTop: '4px solid',
                borderColor: 'secondary.main'
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography 
                  variant="h6" 
                  fontWeight={600} 
                  gutterBottom 
                  sx={{ 
                    color: 'text.primary',
                    fontSize: { xs: '1rem', sm: '1.1rem' } 
                  }}
                >
                  {cert.title}
                </Typography>
                <Typography 
                  variant="subtitle2" 
                  color="secondary.main" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    '&:before': {
                      content: '"🏛️"',
                      mr: 1
                    }
                  }}
                >
                  {cert.place}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.6
                  }}
                >
                  {cert.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export default Resume;