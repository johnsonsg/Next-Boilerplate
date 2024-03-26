// Create About Page
import React from 'react';
import Layout from '../../components/Layout';
import { MetaData } from '../../types/metadata';

const AboutPage: React.FC = () => {
  const metaData: MetaData = {
    title: 'About Us',
    description:
      'About Next.js Starter Template with TypeScript, ESLint, Prettier, and Husky',
    // Add more metadata attributes as needed
  };

  return (
    <Layout metaData={metaData}>
      <h1>About Us</h1>
      <p>
        Next.js Starter Template with TypeScript, ESLint, Prettier, and Husky
      </p>
    </Layout>
  );
};

export default AboutPage;