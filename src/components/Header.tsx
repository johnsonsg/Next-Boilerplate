import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Container maxWidth="lg">
          <Typography variant="h6" component="div">
            NextJS Boilerplate
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
