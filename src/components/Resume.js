import React from "react";
import { Container, Typography, Card, CardContent, Grid, Box, Divider } from '@mui/material';

const education = [
  {
    period: "2005 - 2024",
    title: "Higher National Diploma in Software Engineering",
    place: "National Institute of Business Management (present)",
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
    details: "I have completed diploma with distinction",
  },
  {
    title: "Solo Learn Java Intermediate Certificate Course",
    place: "Sololearn - (01/01/2023)",
    details: "Online",
  },
  {
    title: "React JS Certificate",
    place: "Great Learning - (2024)",
    details: "Online. Learned basics of React JS",
  },
];

const Resume = () => (
  <Container id="resume" maxWidth="md" sx={{ py: { xs: 4, md: 8 }, scrollMarginTop: { xs: '80px', sm: '100px' }, bgcolor: 'var(--background)', color: 'var(--text-primary)' }}>
    <Typography variant="h3" align="center" gutterBottom fontWeight={700} color="primary">
      Resume
    </Typography>
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" gutterBottom fontWeight={600} color="secondary">
        Education
      </Typography>
      <Grid container spacing={3}>
        {education.map((edu, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {edu.period}
                </Typography>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {edu.title}
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  {edu.place}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    <Divider sx={{ my: 4 }} />
    <Box>
      <Typography variant="h5" gutterBottom fontWeight={600} color="secondary">
        Certificates
      </Typography>
      <Grid container spacing={3}>
        {certificates.map((cert, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {cert.title}
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  {cert.place}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
