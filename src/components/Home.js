import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { Container, Box, Avatar, Typography, Button, Stack, IconButton } from '@mui/material';

const Home = () => {
  const pdfUrl = `${process.env.PUBLIC_URL}/Nimanthaka_Bhashana_CV.pdf`; 

  return (
    <Container
      id="home"
      maxWidth="xl"
      sx={{
        py: { xs: 6, md: 10 },
        scrollMarginTop: { xs: '80px', sm: '100px' },
        bgcolor: 'var(--background)',
        color: 'var(--text-primary)',
        minWidth: 0,
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" sx={{ minWidth: 0 }}>
        <Avatar
          src={require("../images/bannerImg.JPG")}
          alt="Nimanthaka Bhashana"
          sx={{ width: { xs: 96, sm: 128 }, height: { xs: 96, sm: 128 }, mb: 3, boxShadow: 3 }}
        />
        <Typography
          variant="h3"
          fontWeight={700}
          color="primary"
          gutterBottom
          sx={{ fontSize: { xs: '2rem', sm: '2.5rem' }, wordBreak: 'break-word' }}
        >
          Hi, I'm Nimanthaka Bhashana
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          fontWeight={600}
          gutterBottom
          sx={{ fontSize: { xs: '1.1rem', sm: '1.4rem' } }}
        >
          I'm Developer<span style={{ color: '#2563eb', marginLeft: 4 }}>|</span>
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 3, fontSize: { xs: '1rem', sm: '1.1rem' }, wordBreak: 'break-word' }}
        >
          An enthusiastic undergraduate with a passion for programming and a keen eye for collaboration. I am a fast learner and a hard worker.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }} justifyContent="center">
          <IconButton
            component="a"
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            sx={{ fontSize: { xs: 22, sm: 28 } }}
          >
            <FaGithub />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            sx={{ fontSize: { xs: 22, sm: 28 } }}
          >
            <FaLinkedin />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:nimanthakabashana@gmail.com"
            color="primary"
            sx={{ fontSize: { xs: 22, sm: 28 } }}
          >
            <FaEnvelope />
          </IconButton>
        </Stack>

        <Button
          variant="contained"
          color="primary"
          component="a"
          href={pdfUrl}
          download
          startIcon={<FaDownload />}
          sx={{ mt: 2 }}
        >
          Download CV
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
