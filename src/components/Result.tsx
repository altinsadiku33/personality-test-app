// src/components/Result.tsx

import React from 'react';

interface ResultProps {
  score: number;
}

const Result: React.FC<ResultProps> = ({ score }) => {
  const personality = score > 0 ? "Extrovert" : "Introvert";
  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold">Your personality trait is: {personality}</h2>
    </div>
  );
};

export default Result;
