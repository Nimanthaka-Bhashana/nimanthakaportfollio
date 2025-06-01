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
    <AppBar position="fixed" elevation={2} sx={{ bgcolor: 'var(--primary)', color: 'var(--text-primary)' }}>
      <Toolbar sx={{ maxWidth: 900, mx: 'auto', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src={require("../images/logo.JPG")} alt="Logo" sx={{ width: 32, height: 32 }} />
          <Typography variant="h6" color="secondary" fontWeight={700} sx={{ letterSpacing: 1 }}>
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
              PaperProps={{ sx: { bgcolor: 'var(--primary)', color: 'var(--text-primary)', minWidth: 220 } }}
            >
              <Box sx={{ width: 220 }} role="presentation" onClick={handleDrawerClose}>
                <List>
                  {navLinks.map((item) => (
                    <ListItem key={item.href} disablePadding>
                      <ListItemButton component="a" href={item.href} sx={{ color: 'var(--text-primary)' }}>
                        <ListItemText primary={item.label} />
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
                sx={{ color: 'var(--text-primary)', fontWeight: 600 }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

