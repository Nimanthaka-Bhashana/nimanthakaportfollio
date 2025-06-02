import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <AppBar position="fixed" elevation={2} sx={{ bgcolor: 'var(--primary)', color: 'var(--text-primary)', width: '100vw', left: 0 }}>
      <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%', display: 'flex', justifyContent: 'space-between', px: { xs: 1, sm: 3 } }}>
        <Box display="flex" alignItems="center" gap={1} minWidth={0}>
          <Avatar src={require("../images/logo.JPG")} alt="Logo" sx={{ width: 32, height: 32 }} />
          <Typography variant="h6" color="secondary" fontWeight={700} sx={{ letterSpacing: 1, fontSize: { xs: '1rem', sm: '1.25rem' }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Nimanthaka Bhashana
          </Typography>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
              PaperProps={{ sx: { bgcolor: 'var(--primary)', color: 'var(--text-primary)', width: { xs: '80vw', sm: 320 }, maxWidth: 400 } }}
            >
              <Box sx={{ width: { xs: '80vw', sm: 320 }, maxWidth: 400, minWidth: 180, overflowX: 'auto' }} role="presentation" onClick={handleDrawerClose}>
                <List>
                  {navLinks.map((item) => (
                    <ListItem key={item.href} disablePadding>
                      <ListItemButton component="a" href={item.href} sx={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                        <ListItemText primary={item.label} sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box display="flex" gap={2}>
            {navLinks.map((item) => (
              <Button
                key={item.href}
                color="secondary"
                component="a"
                href={item.href}
                sx={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: { xs: '0.95rem', md: '1.1rem' }, px: { xs: 1, sm: 2 } }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
      {/* Spacer to avoid content underlap */}
      <Box sx={{ height: { xs: 56, sm: 64, md: 72 }, display: 'block' }} />
    </AppBar>
  );
};

export default Navbar;

