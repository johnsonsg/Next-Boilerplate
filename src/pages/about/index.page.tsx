// Create About Page
import React from 'react';
import Layout from '../../components/Layout';
import { MetaData } from '../../types/metadata';

const AboutPage: React.FC = () => {
  const metaData: MetaData = {
    title: 'About Run Tech Academy',
    description:
      'Learn more about Run Tech Academy and how we can help you become a successful running back.',
    // Add more metadata attributes as needed
  };

  return (
    <Layout metaData={metaData}>
      <h1>About Run Tech Academy</h1>
      <p>
        Run Tech Academy is a premier online learning platform that teaches the fundamentals of being a successful running back. Our courses are designed by professional running backs and coaches to help you improve your skills and take your game to the next level.
      </p>
    </Layout>
  );
};

export default AboutPage;