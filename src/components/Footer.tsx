import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          &copy; 2024 NextJS Boilerplate
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
