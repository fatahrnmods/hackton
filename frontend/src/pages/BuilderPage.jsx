import React from 'react';
import CompatibilityChecker from '../components/CompatibilityChecker';
import PCBuildCreator from '../components/PCBuildCreator';

const BuilderPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <PCBuildCreator />
      <CompatibilityChecker />
    </div>
  );
};

export default BuilderPage;
