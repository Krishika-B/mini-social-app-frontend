import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Navbar({ user }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MiniSocial
        </Typography>
        <Typography>{user}</Typography>
      </Toolbar>
    </AppBar>
  );
}