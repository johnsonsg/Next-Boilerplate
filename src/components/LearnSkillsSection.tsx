import React from 'react';

const LearnSkillsSection: React.FC = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Subtitle Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Example skill cards */}
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-2">Subtitle Section</h3>
          <p>Learn about Next.js</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-2">Ball Security</h3>
          <p>While using React</p>
        </div>
        {/* Add more skill cards here */}
      </div>
    </section>
  );
};

export default LearnSkillsSection;