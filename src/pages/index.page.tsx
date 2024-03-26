import React from "react";
import Layout from "../components/Layout";
import LearnSkillsSection from "../components/LearnSkillsSection";
import { MetaData } from "../types/metadata";

const HomePage: React.FC = () => {
  const metaData: MetaData = {
    title: "Run Tech Academy",
    description:
      "Learn the fundamentals of being a successful running back at Run Tech Academy.",
    // Add more metadata attributes as needed
  };

  return (
    <Layout metaData={metaData}>
      <LearnSkillsSection />
    </Layout>
  );
};

export default HomePage;
