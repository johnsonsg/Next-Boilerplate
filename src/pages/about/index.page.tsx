// pages/about/index.page.tsx

import React from 'react';
import Layout from '../../components/Layout';
import { MetaData } from '../../types/metadata';
import { Typography, Container } from '@mui/material';

const AboutPage: React.FC = () => {
  const metaData: MetaData = {
    title: 'About Us',
    description:
      'About Next.js Starter Template with TypeScript, ESLint, Prettier, and Husky',
    // Add more metadata attributes as needed
  };

  return (
    <Layout metaData={metaData}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>About Us</Typography>
        <Typography variant="body1">
          Next.js Starter Template with TypeScript, ESLint, Prettier, and Husky
        </Typography>
      </Container>
    </Layout>
  );
};

export default AboutPage;
