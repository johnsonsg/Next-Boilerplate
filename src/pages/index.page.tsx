import React from "react";
import Layout from "../components/Layout";
import LearnSkillsSection from "../components/LearnSkillsSection";
import { MetaData } from "../types/metadata";

const HomePage: React.FC = () => {
  const metaData: MetaData = {
    title: "Home Page",
    description:
      "Welcome to Next.js Starter Template with TypeScript, ESLint, Prettier, and Husky",
    // Add more metadata attributes as needed
  };

  return (
    <Layout metaData={metaData}>
      <LearnSkillsSection />
    </Layout>
  );
};

export default HomePage;
