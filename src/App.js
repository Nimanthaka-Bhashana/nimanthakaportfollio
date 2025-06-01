import React from "react";
import Home from "./components/Home";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Box from '@mui/material/Box';

function App() {
  return (
    <Box minHeight="100vh" bgcolor="var(--background)" color="var(--text-primary)">
      <Navbar />
      <Box component="main" sx={{ pt: { xs: 8, sm: 10 }, bgcolor: 'var(--background)', color: 'var(--text-primary)' }}>
        <Home />
        <Features />
        <Projects />
        <Resume />
        <Contact />
      </Box>
    </Box>
  );
}

export default App;
